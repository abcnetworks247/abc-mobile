import React from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  Button,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import HTML from "react-native-render-html";
import Svg, { Path } from "react-native-svg";
import globalstyels from "../styles/globalstyels";

const ProductDetails = () => {
  const route = useRoute();
  const { title, price, description, thumbnail } = route.params;
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#111827" />
      <SafeAreaView style={globalstyels.droidSafeArea}>
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
              <View className="flex flex-row items-center gap-2">
                <TouchableOpacity
                  onPress={() => { }}
                  className="px-5 py-[8px] bg-black border-gray-100  shadow-md border-1"
                >
                  <Text className="text-sm font-semibold text-left text-white">
                    Add To Cart
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex items-center justify-center  py-2 px-2 bg-gray-100">
                  <Svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24.00 24.00"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000"
                    strokeWidth={0.00024000000000000003}

                  >
                    <Path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 5.881A5.39 5.39 0 0116.05 4C18.822 4 21 6.178 21 8.95c0 3.4-3.055 6.17-7.684 10.367l-.011.01L12 20.515l-1.305-1.179-.036-.032C6.044 15.11 3 12.344 3 8.95 3 6.178 5.178 4 7.95 4A5.39 5.39 0 0112 5.881zm0 12.204l.09-.09c4.284-3.879 7.11-6.444 7.11-9.045 0-1.8-1.35-3.15-3.15-3.15-1.386 0-2.736.891-3.204 2.124h-1.683C10.686 6.691 9.336 5.8 7.95 5.8c-1.8 0-3.15 1.35-3.15 3.15 0 2.601 2.826 5.166 7.11 9.045l.09.09z"
                      fill="red"
                    />
                  </Svg>
                </TouchableOpacity>
              </View>

              <View className="flex flex-row item-center">
                <Text className="text-blue-500 font-bold text-[24px]">
                  ${price.toFixed(2)}
                </Text>
              </View>
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>{title}</Text>

              <HTML source={{ html: description }} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
