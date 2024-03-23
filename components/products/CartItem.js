import React from 'react'
import { View, Text, TouchableOpacity, Pressable, Image } from 'react-native';
import { BinIcon, PlusIcon, MinusIcon } from '../svgs/Icons';
import { UseProductProvider } from '../../context/ProductProvider';
import { UseUserContext } from '../../context/UserContext';
import Toast from 'react-native-toast-message';
import { ActivityIndicator, ToastAndroid } from "react-native";
import { useState, useEffect } from 'react';
import { useCustomFonts } from '../../context/FontContext';
import AppLoading from "expo-app-loading";
import { useWindowDimensions } from 'react-native';
const CartItem = ({ product }) => {
const { fontsLoaded, fontStyles } = useCustomFonts();
const {
  handleRemoveFromCart,
  handleCartDecrease,
  handleAddToCart,
  loadingProducts,
} = UseProductProvider();
  const { UserData } = UseUserContext();
  const {width}= useWindowDimensions()
 
 
  const calculateSubtotal = () => {
    return product.quantity * product.product.price;
  };

  const MAX_NAME_LENGTH = 25;  
  const operations = {
    increment: 'increment',
    decrement: 'decrement',
    delete: 'delete'
  }

  
  
 
  
 
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }


 
  return (
    <View className="bg-white p-2 mb-2 ">
      <View className="flex flex-row items-center gap-2 relative w-full">
        {/* image here */}
        <View
          style={{
            width: width > 500 ? 150 : 80,
          }}
          className=" relative rounded-md"
        >
          <Image
            source={{ uri: product.product.thumbnail }}
            style={{ width: "100%", aspectRatio: 1 }}
            className="rounded-md"
          />
          {loadingProducts[product.product._id] && (
            <View
              className="absolute top-0 left-0 right-0 bottom-0"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size="large" color="white" />
            </View>
          )}
        </View>

        <TouchableOpacity
          disabled={loadingProducts[product.product._id]}
          className="absolute top-0 right-0  px-2 py-2 z-10"
          onPress={() => {
            handleRemoveFromCart(product.product._id, UserData._id);
          }}
        >
          <BinIcon size={`${width > 500 ? "30px" : "24px"}`} />
        </TouchableOpacity>

        <View className="flex flex-col flex-grow ">
          <View className=" flex-grow-0">
            <View className="flex flex-co py-1 ">
              <Text
                style={{
                  fontFamily: "PublicSans_700Bold",
                  fontSize: width > 500 ? 20 : 16,
                }}
                className=""
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {product.product.title.length > MAX_NAME_LENGTH
                  ? `${product.product.title.substring(0, MAX_NAME_LENGTH)}...`
                  : product.product.title}
              </Text>

              <Text
                style={{
                  fontFamily: "PublicSans_300Light",
                  fontSize: width > 500 ? 20 : 16,
                }}
              >
                {product.product.category}
              </Text>
            </View>
          </View>

          <View className="flex flex-row items-center justify-between">
            {/* price */}
            <View className="flex flex-row gap-1 items-center">
              <Text
                style={{
                  fontFamily: "PublicSans_700Bold",
                  fontSize: width > 500 ? 20 : 16,
                }}
                className="text-[#00308F]"
              >
                ${calculateSubtotal()}
              </Text>
              <Text
                style={{
                  fontFamily: "PublicSans_300Light",
                  fontSize: width > 500 ? 20 : 16,
                }}
                className="line-through"
              >
                $170
              </Text>
            </View>

            {/* buttons */}
            <View className="flex flex-row items-center justify-evenly gap-2">
              <TouchableOpacity
                className="flex flex-row items-center justify-center p-2 border border-gray-200"
                onPress={() => {
                  handleCartDecrease(product.product._id, UserData._id);
                }}
              >
                <MinusIcon />
              </TouchableOpacity>
              <View className>
                <Text
                  style={{
                    fontFamily: "PublicSans_700Bold",
                    fontSize: width > 500 ? 20 : 16,
                  }}
                >
                  {product.quantity}
                </Text>
              </View>

              <TouchableOpacity
                disabled={loadingProducts[product.product._id]}
                className="flex flex-row items-center justify-center p-2 border border-gray-200"
                onPress={() => {
                  handleAddToCart(product.product._id, UserData._id);
                }}
              >
                <PlusIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem