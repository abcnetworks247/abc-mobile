import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  DatePickerIOS,
  Pressable,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { UseProductProvider } from "../context/ProductProvider";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { BinIcon } from "../components/svgs/Icons";
import { PlusIcon } from "../components/svgs/Icons";
import { MinusIcon } from "../components/svgs/Icons";
// import statusbar
import { StatusBar } from "react-native";
import globalstyels from "../styles/globalstyels";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";


export default function Cart() {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const { allProducts, loading } = UseProductProvider()



  if (loading) {
    return (
      <>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Loading...</Text>
        </View>
      </>
    );
  }



  return (
    <SafeAreaView style={globalstyels.droidSafeArea}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <ScrollView>
        <View className="mt-4 px-2">
          {allProducts.map((product) => (
            <View key={product._id} className="bg-white p-2 mb-2">
              <View className="flex flex-row items-center gap-2">
                <View className="basis-1/3">
                  <Image
                    source={{ uri: product.thumbnail }}
                    style={{ width: "100%", aspectRatio: 1 }}
                  />
                </View>
                <View className="flex flex-col basis-2/3">
                  <View className="flex flex-row items-center ">
                    <View className="flex flex-col basis-2/3">
                      <Text className="font-semibold">{product.title}</Text>
                      <Text className="text-gray-500">{product.category}</Text>
                    </View>

                    <Pressable>
                      <BinIcon />
                    </Pressable>
                  </View>

                  <View className="flex flex-row items-center gap-2">
                    <View className="flex flex-row gap-1 items-center">
                      <Text className="font-bold text-[#00308F]">
                        {product.price.toFixed(1)}
                      </Text>
                      <Text className="text-gray-400 line-through">$170</Text>
                    </View>

                    {/* buttons */}
                    <View className="flex flex-row items-center justify-evenly gap-2">
                      <TouchableOpacity className="flex flex-row items-center justify-center p-2 border border-gray-200">
                        <MinusIcon />
                      </TouchableOpacity>
                      <View className>
                        <Text className="font-bold">1</Text>
                      </View>

                      <TouchableOpacity className="flex flex-row items-center justify-center p-2 border border-gray-200">
                        <PlusIcon />
                      </TouchableOpacity>
                    </View>
                  </View>
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
    </SafeAreaView>
  );
}

