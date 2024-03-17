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
import { UseUserContext } from "../context/UserContext";
import { useWindowDimensions } from "react-native";

export default function Orders() {
  const {width}=useWindowDimensions()
  const {UserData}=UseUserContext()
  const [isVisible, setIsVisible] = useState({})
  const orderhistory = UserData.orderhistory;
  const products = orderhistory.map((order) => order.cart);
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
          {orderhistory.map((order) => (
            <View
              key={order._id}
              className="px-2 bg-white mb-2 shadow-md rounded-md"
            >
              <View className="bg-white">
                {/* date placed */}
                <View className="flex flex-row items-center justify-between py-2 border-b-2 border-b-gray-100">
                  <Text>Date placed</Text>
                  <Text className="text-[#00308F]">{order.payment_Date}</Text>
                </View>
                {/* order number */}
                <View className="flex flex-row items-center justify-between py-2 border-b-2 border-b-gray-100">
                  <Text>Delivery Status</Text>

                  <Text className={`px-3 py-1 rounded-full text-white ${order.delivery_Status === 'completed' ?
                    'bg-green-500' : order.delivery_Status === 'inprogress' ? 'bg-amber-500' :
                      order.delivery_Status === 'failed' ? 'bg-red-500':'bg-orange-500'} `}>
                     {order.delivery_Status}
                  </Text>
                </View>
                {/* total amount */}
                <View className="flex flex-row items-center justify-between py-2 border-b-2 border-b-gray-100">
                  <Text>Total amount</Text>
                  <Text className="text-[#00308F] font-bold">
                    ${order.amount}
                  </Text>
                </View>
              </View>
              {!isVisible[order._id] && (
                <Pressable
                  className="px-2 bg-[#00308F] mb-2"
                  onPress={() => viewMoreorLess(order._id)}
                >
                  <Text className="text-white text-center py-2">View more</Text>
                </Pressable>
              )}

              {isVisible[order._id] &&
                order.cart.map((product, index) => (
                  <View key={index} className="bg-white p-2 mb-4">
                    <View className="flex flex-row items-center justify-between">
                      <View style={{ width: width / 5 }}>
                        <Image
                          source={{ uri: product.product.thumbnail }}
                          style={{ width: "100%", aspectRatio: 1 }}
                        />
                      </View>
                      <View className="flex flex-col basis-2/3">
                        <Text className="font-semibold text-sm">
                          {product.product.title}
                        </Text>
                        <Text className="text-[#00308F] font-bold">
                          ${product.product.price}
                        </Text>
                        <Text className="font-bold text-xs">
                          {product.quantity} X
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}

              {isVisible[order._id] && (
                <Pressable
                  className="px-2 bg-[#00308F] mb-2"
                  onPress={() => viewMoreorLess(order._id)}
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
