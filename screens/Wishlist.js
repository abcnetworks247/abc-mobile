import React from "react";
import { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { UseProductProvider } from "../context/ProductProvider";
import WishlistCard from "../components/products/WishlistCard";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";




const { width } = Dimensions.get("window");

const Wishlist = () => {
  const { allProducts, loading } = UseProductProvider();

  const renderProductCard = ({ item }) => (
    <WishlistCard
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
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#00308F" />
      <FlatList
        data={allProducts}
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
