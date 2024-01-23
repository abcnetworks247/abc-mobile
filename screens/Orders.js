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
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { BinIcon } from "../components/svgs/Icons";
import { UseProductProvider } from "../context/ProductProvider";

export default function Orders() {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const { allProducts, loading } = UseProductProvider();

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
        <View className="mt-4 mx-2">
          {allProducts.map((product) => (
            <View key={product._id} className="bg-white shadow-md p-2 mb-4">
              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-col my-2 basis-2/3">
                  <Text className="font-semibold text-blue-700 text-xs">
                    #125167
                  </Text>
                  <Text className="font-semibold text-sm">{product.title}</Text>
                </View>

                <View className="basis-1/3">
                  <Image
                    source={{ uri: product.thumbnail }}
                    style={{ width: "100%", aspectRatio: 1 }}
                  />
                </View>
              </View>

              <View className="mt-1 flex flex-row items-center justify-between">
                <Text className="text-gray-300">Grey Variant</Text>
                <Text className="font-bold text-xs">1x</Text>
                <Text className="text-blue-700 font-bold">
                  ${product.price.toFixed(1)}
                </Text>
              </View>

              <View className="flex flex-row items-center gap-2 mt-1">
                <View className="flex flex-row items-center justify-center p-2 bg-blue-200">
                  <Text className="text-blue-500 text-sm">Completed</Text>
                </View>
                <Text className="text-gray-400">
                  Reached on payment due date
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
