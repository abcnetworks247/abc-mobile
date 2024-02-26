import React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { createContext } from "react";
import { UseUserContext } from "./UserContext";
import { io } from "socket.io-client";
import { FlatListComponent, ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const { UserData, authToken, getUserData } = UseUserContext();

  console.log("User Data in product provider", UserData)

  const socket = io(`${process.env.NEXT_PUBLIC_SOCKET_URL}`);

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartProducts, setCartProducts] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [handleCartLoading, setHandleCartLoading] = useState(false);
  const [addToCartActive, setAddToCartActive] = useState(false);
  const [removeFromCartActive, setRemoveFromCartActive] = useState(false);
 const messages = {
     add: "item added to cart",
     remove:"item removed from cart"
 }
  
  
  const showToast = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      25,
      50
    );
  }; 


  // add to cart socket
  const handleAddToCart = (productId, userId) => {
    setHandleCartLoading(true)
    console.log("state of loading before emit", handleCartLoading)
    const cartdata = {
      productId: productId,
      userId: userId,
    };

    socket.emit("cartadd", cartdata);
     console.log("state of loadind after emit", handleCartLoading) 
    };



  useEffect(() => {
      
    socket.on("cart", (cartItems) => {
        setHandleCartLoading(true);
        setCartProducts(cartItems);
        setHandleCartLoading(false);
        console.log("state of loading in socket", handleCartLoading)
        socket.disconnect()
 
         showToast(messages.add);
        
         
   });
  }, [socket]);



  // remove item from cart
  const handleRemoveFromCart = (productId, userId) => {
    setHandleCartLoading(true);
    console.log("hitting remove from cart", productId, userId);
    console.log(`${process.env.NEXT_PUBLIC_SOCKET_URL}`);
    const cartdata = {
      productId: productId,
      userId: userId,
    };

    socket.emit("cartremove", cartdata);
  };

  // minus cart quantity
  const handleCartDecrease = (productId, userId) => {
      setHandleCartLoading(true);
    console.log("decreasing cart Item", productId, userId);
    const cartdata = {
      productId: productId,
      userId: userId,
    };

    socket.emit("cartminus", cartdata);
  };

  // get the cart products back from the server

  useEffect(() => {
    if (UserData && UserData.cart) {
      setCartProducts(UserData.cart);
    }
  }, [UserData && UserData]);

 
  useEffect(() => {
   
    const fetchWishlistFromServer = async () => {
      try {
        const authToken = JSON.parse(await AsyncStorage.getItem('authToken'))
        
        if (!UserData) {
          return
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
    fetchWishlistFromServer();
  }, [UserData]);


  // emit signals to add to wish list
  const handleWishAdd = (productId, userId) => {
    const wishdata = {
      productId: productId,
      userId: userId,
    };
    socket.emit("wishadd", wishdata);
  };

  //reevie the response from the server
  socket.on("wishlist", (userwishlist) => {
    // Update the local state with the updated
    console.log(userwishlist);
    setWishlist(userwishlist);
    console.log("returning wishlist", wishlist);
  });

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
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
        handleCartLoading,
        setAddToCartActive,
        setRemoveFromCartActive,
        showToast,
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
