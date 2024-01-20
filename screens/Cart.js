import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  DatePickerIOS,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { UseProductProvider } from "../context/ProductProvider";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";


export default function Cart() {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const { allProducts, loading } = UseProductProvider()
  

  
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }



  return (
    <View>
      <ScrollView>
        <View className="mt-4">
          {allProducts.map((product) => (
            <View
              key={product._id} // Add a unique key prop for each item in the array
              className="bg-white flex flex-row px-[8px] py-2 justify-between items-center mb-2 mx-2 rounded-sm shadow-md"
            >
              <View className="flex flex-row items-center ">
                <Image
                  style={{ height: 100, width: 100 }}
                  source={{
                    uri: product.thumbnail,
                  }}
                />

                <View className="flex flex-col gap-4 w-[40%]  ">
                  <Text className="font-bold text-sm whitespace-nowrap line-clamp-1">
                    {product.title}
                  </Text>

                  <Text className="font-bold text-sm whitespace-nowrap">
                    ${product.price.toFixed(2)}
                  </Text>
                </View>
              </View>
              <View className="flex flex-col gap-4 ">
                <Pressable>
                  <Svg
                    viewBox="-0.5 0 19 19"
                    xmlns="http://www.w3.org/2000/svg"
                   
                  >
                    <Path
                      d="M4.917 14.889c0 .468.687 1.111 1.146 1.111h6.875c.458 0 1.145-.643 1.145-1.111V6H4.917v8.889zM15 3.465h-2.444L11.333 2H7.667L6.444 3.465H4V4.93h11V3.465z"
                      fill="#000"
                      stroke="none"
                      strokeWidth={1}
                      fillRule="evenodd"
                    />
                  </Svg>
                </Pressable>
                <View className="flex flex-row border border-gray-200 items-center justify-between h-10  rounded-sm px-2 ">
                  <TouchableOpacity className="text-[#333] h-full w-6 flex items-center justify-center">
                    <Text className="text-[#333]">-</Text>
                  </TouchableOpacity>
                  <View className="w-6 bg-gray-100 h-full flex items-center justify-center">
                    <Text>2</Text>
                  </View>

                  <TouchableOpacity className="text-[#333]   h-full w-6 flex items-center justify-center">
                    <Text className="text-[#333]">+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
          <View className="bg-white px-2">
            <View className="flex flex-row py-4 justify-between">
              <Text className="text-sm text-gray-500">Subtotal</Text>
              <Text className="text-sm font-semibold">$1250.52</Text>
            </View>
            <View className="flex flex-row justify-between py-2">
              <Text className="text-sm text-gray-500">Shipping</Text>
              <Text className="text-sm font-semibold">..</Text>
            </View>
            <View className="flex flex-row py-2  border-t border-t-gray-100 justify-between ">
              <Text className="text-sm text-gray-500">Total</Text>
              <Text className="text-sm font-semibold">$13200</Text>
            </View>
          </View>
          <TouchableOpacity className="bg-black flex flex-row justify-center items-center h-10">
            <Text className="text-white">Confirm Order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

