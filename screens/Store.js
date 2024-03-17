import React from "react";
import { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions, Image, ScrollView, Pressable } from "react-native";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { UseProductProvider } from "../context/ProductProvider";
import Carousel from "react-native-reanimated-carousel";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import globalstyels from "../styles/globalstyels";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import { ActivityIndicator } from "react-native";
import { useWindowDimensions } from "react-native";
import { useCustomFonts } from "../context/FontContext";
import AppLoading from "expo-app-loading";
import LoadingSkeleton from "../components/LoadingSkeleton";




const StoreScreen = () => {
  // const { width, height } = Dimensions.get("screen");
  
const { fontsLoaded, fontStyles } = useCustomFonts();

  const { height:screenHeight , width:screenWidth} = useWindowDimensions();
  // const windowDimensions = Dimensions.get("window");
  const IMG_WIDTH = screenWidth * 0.75;
  const IMG_HEIGHT = IMG_WIDTH / 5;
  const { products, setProducts} = UseProductProvider()
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categoryLoading, setCategoryLoading] = useState(false)
  const [numColumns, setNumColumns] = useState(2);
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
 
 const [totalPages, setTotalPages] = useState(0);
 const [currentPage, setCurrentPage] = useState(1);

const numberOfSkeletons = 5;
//   if(allProducts =='undefined') return
//   // const [filteredProducts,setFilteredProducts]=useState(null)
// console.log("my products, allProduct")
 

   useEffect(() => {
     const isPortrait = screenWidth < 500; 
     setNumColumns(isPortrait ? 2 : 3);
   }, [screenWidth]);


  const uniqueCategories = [
    "All", ...( categories && categories.map((category) => category.name)),
  ];

  // const filteredProducts = selectedCategory
  //   ? products && products.filter((product) =>
  //     selectedCategory === "All"
  //       ? true
  //       : product.category === selectedCategory
  //   )
  //   : products
  
  useEffect(() => {
    if (selectedCategory == 'All') {
      fetchProducts(currentPage, 10);
       return
     }
   
      const getProductsByCategory = async () => {
        try {
           setCategoryLoading(true);
          const response = await axios.get(
            `https://abc-server-nazd.onrender.com/api/v1/admin/commerce/productcategory?category=${selectedCategory}`
          );

          if (response.status === 200) {
            const returnedProducts = response.data;
            setProducts(returnedProducts);
            setCategoryLoading(false);
          } else {
            console.error("Error fetching search results");
              setCategoryLoading(false);
          }
        } catch (error) {
          console.error("Error:", error);
           setCategoryLoading(false);
        }
      };
    
  getProductsByCategory();

  },[selectedCategory])
 
  
  
  
  useEffect(() => {
    const HandleFetch = async () => {
      try {
        const response = await axios.get(
          `${process.env.EXPO_PUBLIC_SERVER_URL}admin/category/product/category`
        );

        if (response.status === 200) {
          setCategories(response.data.data);
        }
      } catch (error) {
        console.log(error)
      }
    };

    HandleFetch();
  },[]);
  
  console.log("all categories", categories)


   const fetchProducts = async (page, perPage) => {
     try {
       setLoading(true)
       const response = await axios.get(
         `https://abc-server-nazd.onrender.com/api/v1/admin/commerce/products?page=${page}&perPage=${perPage}`
       );

       if (response.status == 200) {
          const { products, totalPages, page: currentPage } = response.data;

           setProducts(products);
           setTotalPages(totalPages);
           setCurrentPage(currentPage);
           setLoading(false)
       } else {
         console.log("Error fetching product")
       }

      
     } catch (error) {
       console.error(error);
        
     }
   };

   useEffect(() => {
     fetchProducts(currentPage, 10); // Fetch products on mount with initial page and perPage
   }, []); // Empty dependency array means this effect runs only once on mount

   const handlePageClick = (page) => {
     setCurrentPage(page);
     fetchProducts(page, 10); // Fetch products for the selected page
   };


  







  // const renderProductCard = ({ item }) => (
  //   <ProductCard
  //     title={item.title}
  //     description={item.description}
  //     thumbnail={item.thumbnail}
  //     price={item.price}
  //     productId={item._id}
  //     screenWidth={screenWidth}
  //     numColumns={numColumns}
  //     images={item.images}
  //   />
  // );

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  

  if (loading) {
    return (
   <LoadingSkeleton numberOfSkeletons={numberOfSkeletons}/>
    );
  } 

  return (
    <SafeAreaView className="flex-1 bg-gray-200 ">
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#2c3e50" />

      {products.length === 0 ? (
        <View className="flex flex-1 items-center justify-center">
          <Text>No products have been uploaded yet</Text>
        </View>
      ) : (
        <View className="pt-2 pb-2 bg-white">
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ width: "100%" }}
          >
            {uniqueCategories.map((category, index) => (
              <Pressable
                key={index}
                className={`px-2 py-2 h-10  mx-1 flex flex-row items-center justify-center w-32
            ${selectedCategory === category ? "bg-black" : "bg-gray-200"} `}
                onPress={() => {
                  setSelectedCategory(category);
                  // handleCategoryPress();
                }}
              >
                <Text
                  style={{ fontFamily: "PublicSans_600SemiBold" }}
                  className={`${
                    selectedCategory === category ? "text-white" : "text-black"
                  }`}
                >
                  {categoryLoading && selectedCategory === category ? (
                    <ActivityIndicator size="small" color={"white"} />
                  ) : (
                    category
                  )}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}
      <ScrollView
        className="mt-2"
        contentContainerStyle={{ width: screenWidth }}
      >
        <View
          className="flex flex-row flex-1 flex-wrap "
          style={{ maxWidth: screenWidth }}
        >
          {products.length == 0 ? (
            <View>
              <Text>No products found</Text>
            </View>
          ) : (
            products.map((item, index) => (
              <ProductCard
                key={item._id}
                title={item.title}
                description={item.description}
                thumbnail={item.thumbnail}
                price={item.price}
                productId={item._id}
                screenWidth={screenWidth}
                numColumns={numColumns}
                images={item.images}
                index={index}
              />
            ))
          )}
        </View>
        <View className="flex flex-row justify-center mt-4 mb-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <Pressable
            key={pageNum}
            className={`px-4 py-2 mx-1 rounded-full ${
              currentPage === pageNum
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onPress={() => handlePageClick(pageNum)}
          >
            <Text>{pageNum}</Text>
          </Pressable>
        ))}
      </View>
      </ScrollView>
      
      {/* <FlatList
        data={filteredProducts}
        renderItem={renderProductCard}
        keyExtractor={(item) => item._id.toString()}
        numColumns={2}
        columnWrapperStyle={{ width: screenWidth }}
        className=" bg-gray-200"
      /> */}
    </SafeAreaView>
  );
};



export default StoreScreen;
