import React from "react";
import { useState,useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions , Image, ScrollView, Pressable} from "react-native";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { UseProductProvider } from "../context/ProductProvider";
import Carousel from "react-native-reanimated-carousel";
import { TouchableOpacity } from "react-native";




const StoreScreen = () => {
const { width, height } = Dimensions.get("screen");
const IMG_WIDTH = width * 0.75;
const IMG_HEIGHT = IMG_WIDTH / 5;
  const { allProducts, loading } = UseProductProvider()
  const [selectedCategory, setSelectedCategory] = useState(null);

  const uniqueCategories = [
    "All", ...new Set(allProducts.map((product) => product.category)),
  ];

   const filteredProducts = selectedCategory
     ? allProducts.filter((product) =>
         selectedCategory === "All"
           ? true
           : product.category === selectedCategory
       )
     : allProducts;



const dummyTexts = uniqueCategories.map((category, index) => ({
     key: String(index),
     category: category,
   }));
 

  


  const renderProductCard = ({ item }) => (
    <ProductCard
      title={item.title}
      description={item.description}
      thumbnail={item.thumbnail}
      price={item.price}
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
    <View style={styles.container} className="bg-white">
      
        <FlatList
          data={dummyTexts}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.key}
          className=""
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
              
                className={`px-2 py-2 min-h-6 mx-1 flex flex-row items-center justify-center ${selectedCategory=== item.category ? 'bg-black':'bg-gray-200'}`}
                onPress={() => setSelectedCategory(item.category)}
              >
                <Text
                  className={`${selectedCategory===item.category ? 'text-white':'text-black'}`}
                 
                >
                  {item.category}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      

      <FlatList
        data={filteredProducts}
        renderItem={renderProductCard}
        keyExtractor={(item) => item._id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        className="bg-gray-200 mt-2 pt-2"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },

  columnWrapper: {
    gap: 6,
    padding: 4,
  },

  
  
});

export default StoreScreen;
