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
import emptyCart from "../assets/basket.png"
import CartItem from "../components/products/CartItem";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";
import { UseUserContext } from "../context/UserContext";


export default function Cart() {

const { cartProducts } = UseProductProvider(); 
const { authToken } = UseUserContext()
 const shippingFee = 5;
  
  if (!authToken) {
    return (
      <View>
        <Text>
           Login in to view you cart
        </Text>
      </View>
    )
  }

  
  
 

  const totalPrice = cartProducts?.length > 0 && cartProducts.reduce(
    (accumulator, product) =>
      accumulator + product.quantity * product.product.price,
    0
  );
  console.log(totalPrice);

  const grandTotal = totalPrice + shippingFee;

  if (authToken && cartProducts.length == 0) {
    const navigation=useNavigation()
    return (
      <SafeAreaView style={globalstyels.droidSafeArea}>
        <View className="flex items-center justify-center sm:mx-12 sm:shadow-lg sm:py-7 ">
          <View className="flex flex-col items-center  gap-2">
            <Image
              source={emptyCart}
              className="w-[200px] h-[200px] object-contain"
            />
            <Text className="text-[#575746]">Your cart is empty</Text>
            <Text className="text-sm ml-3  text-center text-[#313133]  ">
              Why not explore our latest products and discover something you
              love
            </Text>
            <TouchableOpacity
              className="flex items-center justify-center p-2 bg-blue-600 shadow-md rounded-sm "
              onPress={() =>
                navigation.dispatch(
                  CommonActions.navigate({
                    name: "Store",
                  })
                )
              }
            >
              <Text className="text-white">Explore now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
}


  

if(authToken && cartProducts.length > 0)

  return (
    <SafeAreaView style={globalstyels.droidSafeArea}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <ScrollView>
        <View className="mt-4 px-2">
          {cartProducts.map((product) => (
            <CartItem key={product._id} product={product} />
          ))}
          <View className="bg-white px-2">
            <View className="flex flex-row py-4 justify-between">
              <Text className="text-sm text-gray-500">Subtotal</Text>
              <Text className="text-sm font-semibold">
                ${totalPrice.toFixed(2)}
              </Text>
            </View>
            <View className="flex flex-row justify-between py-2">
              <Text className="text-sm text-gray-500">Shipping</Text>
              <Text className="text-sm font-semibold">${shippingFee}</Text>
            </View>
            <View className="flex flex-row py-2  border-t border-t-gray-100 justify-between ">
              <Text className="text-sm text-gray-500">Total</Text>
              <Text className="text-sm font-semibold">
                ${grandTotal.toFixed(2)}
              </Text>
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

