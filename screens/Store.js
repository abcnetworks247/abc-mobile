import React from "react";
import { useState,useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const { width } = Dimensions.get("window");

const StoreScreen = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

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
        setProducts(fetchedProducts);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
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
    <View style={styles.container}>
      <FlatList
        data={products}
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
    justifyContent: "space-between",
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StoreScreen;
