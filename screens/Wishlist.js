import React from "react";
import { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions, Image } from "react-native";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { UseProductProvider } from "../context/ProductProvider";
import WishlistCard from "../components/products/WishlistCard";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import basket from "../assets/emptycart.jpg"




const { width } = Dimensions.get("window");

const Wishlist = () => {
  const { wishlist } = UseProductProvider()
  

  if (wishlist.length == 0) {
    return (
      <View className=" bg-gray-100 lg:h-screen sm:flex sm:items-center sm:justify-center ">
        <View className="bg-white sm:w-[30vw] sm:h-[40vh] h-full flex flex-col justify-center items-center sm:shadow-md sm:rounded-md">
          <Image source={basket} className="w-32 h-auto" />
          <Text className="text-bold">You have no saved items</Text>

          <Text  className="text-sm text-blue-500 underline">
            Go back to store
          </Text>
        </View>
      </View>
    );
}

  const renderProductCard = ({ item }) => (
    <WishlistCard
      title={item.title}
      description={item.description}
      thumbnail={item.thumbnail}
      price={item.price}
    />
  );

 

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#00308F" />
      <FlatList
        data={wishlist}
        renderItem={renderProductCard}
        keyExtractor={(item) => item._id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
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

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Wishlist;
