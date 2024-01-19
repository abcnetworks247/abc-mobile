import React from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import HTML from "react-native-render-html";

const ProductDetails = () => {
  const route = useRoute();
  const { title, price, description, thumbnail } = route.params;
  return (
    <ScrollView style={styles.container}>
      <View className="mt-10 mb-40">
        <View className="px-10">
          <Image
            style={styles.image}
            source={{ uri: thumbnail }}
            className="rounded-md"
          />
        </View>
        <View className="flex flex-row items-center justify-between w-full px-4 mt-10 mb-4">
          <TouchableOpacity
            onPress={() => {}}
            className="px-5 py-[8px] bg-blue-600 border-gray-100 rounded-md shadow-md border-1"
          >
            <Text className="text-lg font-semibold text-left text-white">
              Add to now
            </Text>
          </TouchableOpacity>
          <View className="flex flex-row rounded-md item-center">
            <Text className="text-gray-700 text-[24px]">${price}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{title}</Text>

          <HTML source={{ html: description }} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  info: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: "#999",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
};

export default ProductDetails;
