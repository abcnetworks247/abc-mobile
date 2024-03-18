import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { createContext } from "react";
import { UseUserContext } from "./UserContext";
import { io } from "socket.io-client";
import { ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const { UserData, authToken, getUserData } = UseUserContext();

  const socket = io(`${process.env.NEXT_PUBLIC_SOCKET_URL}`);
  const [allProducts, setAllProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartProducts, setCartProducts] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState({});
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState([]);


  // fetch products
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.EXPO_PUBLIC_SERVER_URL}admin/commerce/products`
        );
        if (response.status !== 200) {
          throw new Error("Failed to fetch products");
        }
        const fetchedProducts = response.data;
        setAllProducts(fetchedProducts);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //fetch wishlist only if there is userData
  useEffect(() => {
    const fetchWishlistFromServer = async () => {
      try {
        const authToken = JSON.parse(await AsyncStorage.getItem("authToken"));

        if (!UserData) {
          return;
        }

        // Map through the wishlist IDs and fetch product details
        const productsPromises = UserData.wishlist.map(async (productId) => {
          const productResponse = await axios.get(
            `${process.env.EXPO_PUBLIC_SERVER_URL}admin/commerce/products/${productId}`
          );
          return productResponse.data; // Adjust to your server's response structure
        });

        const products = await Promise.all(productsPromises);

        setWishlist(products);
      } catch (error) {
        console.error("Error fetching wishlist from the server:", error);
      }
    };

    // Fetch wishlist from the server when the component mounts
    if (UserData) {
      fetchWishlistFromServer();
    }
  }, [UserData]);

  // get the cart products back from the server
  useEffect(() => {
    if (UserData && UserData.cart) {
      setCartProducts(UserData.cart);
    }
  }, [UserData]);

  // show toast message
  const showToast = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      25,
      50
    );
  };


  const handleAddToCart = (productId, userId) => {
    setLoadingProducts((prevLoading) => ({
      ...prevLoading,
      [productId]: true,
    }));

    const existingCartItem = cartProducts.find(
      (item) => item.product._id === productId
    );

    if (existingCartItem) {
      // If the product is already in cart, increment quantity by 1
      const updatedCart = cartProducts.map((item) => {
        if (item.product._id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      setCartProducts(updatedCart);
    } else {
      // If the product is not in cart, add it with quantity 1
      const productToAdd = products.find(
        (product) => product._id === productId
      );
      if (productToAdd) {
        const newCartItem = {
          _id: productToAdd._id,
          product: productToAdd,
          quantity: 1,
        };
        setCartProducts([...cartProducts, newCartItem]);
      }
    }

      setLoadingProducts({});
      showToast("Product added To cart");

    // Emit a signal to notify the server about the cart update
    const cartdata = {
      productId: productId,
      userId: userId,
    };

    socket.emit("cartadd", cartdata);
  };


  // add to cart socket
  // const handleAddToCart = (productId, userId) => {
  //   setLoadingProducts((prevLoading) => ({
  //     ...prevLoading,
  //     [productId]: true,
  //   }));

  //   const cartdata = {
  //     productId: productId,
  //     userId: userId,
  //   };

  //   socket.emit("cartadd", cartdata);
  // };

  // remove item from cart
  const handleRemoveFromCart = (productId, userId) => {
   
    setLoadingProducts((prevLoading) => ({
      ...prevLoading,
      [productId]: true,
    }));

    const cartdata = {
      productId: productId,
      userId: userId,
    };

    socket.emit("cartremove", cartdata);

    const updatedCart = cartProducts.filter(
      (item) => item.product._id !== productId
    );
    setCartProducts(updatedCart);

     setLoadingProducts({});
    showToast("Item removed from cart");
  };

  // minus cart quantity
  const handleCartDecrease = (productId, userId) => {
    setLoadingProducts((prevLoading) => ({
      ...prevLoading,
      [productId]: true,
    }));

     const updatedCart = cartProducts.map((item) => {
       if (item.product._id === productId) {
         // If quantity is already 1, don't decrement further
         if (item.quantity === 1) {
           return item;
         }
         return {
           ...item,
           quantity: item.quantity - 1,
         };
       }
       return item;
     });

    setCartProducts(updatedCart);
     setLoadingProducts({});
     showToast("Item decremented");

    const cartdata = {
      productId: productId,
      userId: userId,
    };

    socket.emit("cartminus", cartdata);
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
  };

  // emit signals to add to wish list
  const handleWishAdd = (productId, userId) => {
   
    const wishdata = {
      productId: productId,
      userId: userId,
    };
    socket.emit("wishadd", wishdata);
  };

  socket.on("wishlist", (userwishlist) => {
    setWishlist(userwishlist);
    
  });

  useEffect(() => {
    
    socket.on("cart", (cartItems) => {
      
      setCartProducts(cartItems);
  
    
    });

     

    // return () => {
    //   socket.disconnect();
    // };
  }, [socket]);

  return (
    <ProductContext.Provider
      value={{
        cartProducts,
        allProducts,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartDecrease,
        handleAddToWishlist,
        wishlist,
        handleWishAdd,
        setSearchResults,
        setLoading,
        loading,
        showToast,
        loadingProducts,
        products,
        setProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

/**
 * Returns the product provider from the React context.
 * @returns {Object} The product provider.
 */
export function UseProductProvider() {
  return useContext(ProductContext);
}
