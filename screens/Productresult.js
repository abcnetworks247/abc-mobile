import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { UseProductProvider } from "../context/ProductProvider";
import Carousel from "react-native-reanimated-carousel";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";
import { useRoute } from "@react-navigation/native";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";


const Productresult = () => {
     const {allProducts}= UseProductProvider()
     const route = useRoute();
    const { title, price, description, thumbnail, id } = route.params;
     const [selectedItem, setSelectedItem] = useState(null);
    const [similarItems, setSimilarItems] = useState([]);
    const [allItems, setAllItems]= useState([])
    
  console.log("id")
    useEffect(() => {
    
      const clickedItem = allProducts.find((item) => item._id === id);
      setSelectedItem(clickedItem);

      // Fetch similar items based on some criteria 
      const similarItems = allProducts.filter(
        (item) => item.category === clickedItem.category
      );

    
      setSimilarItems(similarItems);
      setAllItems([
        selectedItem && selectedItem,
        ...(similarItems.length > 0 && similarItems ),
      ]);
    }, [id]);

     const renderProductCard = ({ item }) => (
       <ProductCard
         title={item.title}
         price={item.price}
         description={item.description}
         thumbnail={item.thumbnail}
       />
     );
  return (
    <View style={styles.container} className="bg-white">
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#00308F" />

      {allItems.length > 0 && (
        <FlatList
          data={allItems}
          renderItem={renderProductCard}
          keyExtractor={(item) => item?._id?.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          className="bg-gray-200 mt-2 pt-2"
        />
      )}
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

export default Productresult;
