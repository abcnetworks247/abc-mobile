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
  StatusBar
} from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { BinIcon } from "../components/svgs/Icons";
import { UseProductProvider } from "../context/ProductProvider";
import globalstyels from "../styles/globalstyels";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";

export default function Orders() {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const { allProducts, loading } = UseProductProvider();
  const [isVisible, setIsVisible]= useState({})

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  

  const viewMoreorLess = (id) => {
    setIsVisible((prevState) => ({
      ...prevState,
      [id]: !prevState[id] || false,
    }));
   
  }



  return (
    <SafeAreaView style={globalstyels.droidSafeArea}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <ScrollView className="bg-gray-200"> 
        <View className="mt-4 mx-2">
          {allProducts.map((product, index) => (
            <View
              key={product._id}
              className="px-2 bg-white mb-2 shadow-md rounded-md"
            >
              <View className="bg-white">
                {/* date placed */}
                <View className="flex flex-row items-center justify-between py-2 border-b-2 border-b-gray-100">
                  <Text>Date placed</Text>
                  <Text className="text-[#00308F]">january 22, 2021</Text>
                </View>
                {/* order number */}
                <View className="flex flex-row items-center justify-between py-2 border-b-2 border-b-gray-100">
                  <Text>Order number</Text>
                  <Text className="text-[#00308F]">WU88191111</Text>
                </View>
                {/* total amount */}
                <View className="flex flex-row items-center justify-between py-2 border-b-2 border-b-gray-100">
                  <Text>Total amount</Text>
                  <Text className="text-[#00308F] font-bold">$1600</Text>
                </View> 
              </View>
              {!isVisible[product._id] && (
                <Pressable
                  className="px-2 bg-[#00308F] mb-2"
                  onPress={() => viewMoreorLess(product._id)}
                >
                  <Text className="text-white text-center py-2">View more</Text>
                </Pressable>
              )}

              {isVisible[product._id] && (
                <View className="bg-white p-2 mb-4">
                  <View className="flex flex-row items-center justify-between">
                    <View className="flex flex-col my-2 basis-2/3">
                      <Text className="font-semibold text-[#00308F] text-xs">
                        #125167
                      </Text>
                      <Text className="font-semibold text-sm">
                        {product.title}
                      </Text>
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
                    <Text className="text-[#00308F] font-bold">
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
              )}

              {isVisible[product._id] && (
                <Pressable
                  className="px-2 bg-[#306ee8d5] mb-2"
                  onPress={() => viewMoreorLess(product._id)}
                >
                  <Text className="text-white text-center py-2">View Less</Text>
                </Pressable>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
