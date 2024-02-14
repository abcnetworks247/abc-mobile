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





const StoreScreen = () => {
  const { width, height } = Dimensions.get("screen");
  const IMG_WIDTH = width * 0.75;
  const IMG_HEIGHT = IMG_WIDTH / 5;
  const { allProducts, loading } = UseProductProvider()
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categoryLoading, setCategoryLoading] = useState(false)
  // const [filteredProducts,setFilteredProducts]=useState(null)


  const uniqueCategories = [
    "All", ...new Set(allProducts && allProducts.map((product) => product.category)),
  ];

  const filteredProducts = selectedCategory
    ? allProducts && allProducts.filter((product) =>
      selectedCategory === "All"
        ? true
        : product.category === selectedCategory
    )
    : allProducts;







  const renderProductCard = ({ item }) => (
    <ProductCard
      title={item.title}
      description={item.description}
      thumbnail={item.thumbnail}
      price={item.price}
      productId={item._id}
    />
  );
  

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  } 

  return (
    <SafeAreaView className="flex-1 bg-white ">
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      {allProducts.length === 0 ? (
        <View className="flex flex-1 items-center justify-center">
          <Text>No products have been uploaded yet</Text>
        </View>
      ) : (
        <View style={styles.container}>
          {/* <FlatList
            data={dummyTexts}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.key}
            className=" mt-2"
            renderItem={({ item, index }) => {
              return (
                <Pressable
                  className={`px-2 py-2 h-10  mx-1 flex flex-row items-center justify-center ${
                    selectedCategory === item.category
                      ? "bg-black"
                      : "bg-gray-200"
                  }`}
                  onPress={() => {
                    setSelectedCategory(item.category);
                    // handleCategoryPress();
                  }}
                >
                  <Text
                    className={`${
                      selectedCategory === item.category
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {item.category}
                  </Text>
                </Pressable>
              );
            }}
          /> */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
                  className={`${
                    selectedCategory === category ? "text-white" : "text-black"
                  }`}
                >
                  {category}
                </Text>
              </Pressable>
            ))}
          </ScrollView>

          <FlatList
            data={filteredProducts}
            renderItem={renderProductCard}
            keyExtractor={(item) => item._id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            className="mt-2 pt-2 pl-2 bg-gray-200"
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
  
  },

  columnWrapper: {
    gap: 6,
    padding: 1,
  
  },



});

export default StoreScreen;
