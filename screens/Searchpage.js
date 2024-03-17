import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { TrendIcon, DiagonalArrowcon } from "../components/svgs/Icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios'

const Searchpage = () => {
  const [query, setQuery] = useState("");
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const MAX_NAME_LENGTH = 35;
    
console.log("my searched Products", searchedProduct)

 const fetchProducts = async (searchQuery) => {
   try {
     setLoading(true)
     const response = await axios.get(
       `https://abc-server-nazd.onrender.com/api/v1/admin/commerce/search?query=${searchQuery}`
     );

     if (response.status === 200) {
       const searchData = response.data;
       setSearchedProduct(searchData);
       setLoading(false)
     } else {
       console.error("Error fetching search results");
     }
   } catch (error) {
     console.error("Error:", error);
   }
 };
   useEffect(() => {
     if (query !== "") {
       fetchProducts(query);
     }
   }, [query]);


  return (
    <SafeAreaView style={styles.root}>
      {/* Search bar */}
      <View style={styles.searchBar}>
        {/* Back arrow */}
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={23} />
        </Pressable>

        {/* Search bar */}
        <TextInput
          placeholder="Search..."
          style={styles.input}
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
      </View>

      {/* Product list */}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={searchedProduct}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="px-2 py-1  border-b border-gray-300 bg-white"
              onPress={() =>
                navigation.navigate("Details", {
                  title: item.title,
                  description: item.description,
                  thumbnail: item.thumbnail,
                  price: item.price,
                  productId: item._id,
                  images: item.images,
                })
              }
            >
              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-row items-center ">
                  <TrendIcon />
                  <Text
                    className="font-bold ml-2"
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.title.length > MAX_NAME_LENGTH
                      ? `${item.title.substring(0, MAX_NAME_LENGTH)}...`
                      : item.title}
                  </Text>
                </View>

                <DiagonalArrowcon />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item._id}
        />
      )}
    </SafeAreaView>
  );
};

export default Searchpage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
