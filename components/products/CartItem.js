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

const CartItem = ({ product }) => {
const { fontsLoaded, fontStyles } = useCustomFonts();
const {
  handleRemoveFromCart,
  handleCartDecrease,
  handleAddToCart,
  handleCartLoading,
  selectedProductId,
  setSelectedProductId,
} = UseProductProvider();
  const { UserData } = UseUserContext();
 
 
  const calculateSubtotal = () => {
    return product.quantity * product.product.price;
  };

  const MAX_NAME_LENGTH = 25;  
  const operations = {
    increment: 'increment',
    decrement: 'decrement',
    delete: 'delete'
  }

  
  useEffect(() => {
    if (selectedProductId ) {
      handleRemoveFromCart(product.product._id, UserData._id);
    }
  }, [selectedProductId]);
  
 
  
 
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }


 
  return (
    <View className="bg-white p-2 mb-2 ">
      <View className="flex flex-row items-center gap-2 relative w-full">
        {/* image here */}
        <View className="w-[80px]">
          <Image
            source={{ uri: product.product.thumbnail }}
            style={{ width: "100%", aspectRatio: 1 }}
          />
        </View>

        <TouchableOpacity
          className="absolute top-0 right-0  px-2 py-2 z-10"
          onPress={() => {
            setSelectedProductId(product._id);
          }}
        >
          {handleCartLoading && selectedProductId === product._id ? (
            <ActivityIndicator size="small" color="blue" />
          ) : (
            <BinIcon size="24px" />
          )}
        </TouchableOpacity>

        <View className="flex flex-col flex-grow ">
          <View className=" flex-grow-0">
            <View className="flex flex-co py-1 ">
              <Text
                style={{ fontFamily: "PublicSans_700Bold" }}
                className=""
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {product.product.title.length > MAX_NAME_LENGTH
                  ? `${product.product.title.substring(0, MAX_NAME_LENGTH)}...`
                  : product.product.title}
              </Text>

              <Text style={{ fontFamily: "PublicSans_300Light" }}>
                {product.product.category}
              </Text>
            </View>
          </View>

          <View className="flex flex-row items-center justify-between">
            {/* price */}
            <View className="flex flex-row gap-1 items-center">
              <Text
                style={{ fontFamily: "PublicSans_700Bold" }}
                className="text-[#00308F]"
              >
                ${calculateSubtotal()}
              </Text>
              <Text
                style={{ fontFamily: "PublicSans_300Light" }}
                className="line-through"
              >
                $170
              </Text>
            </View>

            {/* buttons */}
            <View className="flex flex-row items-center justify-evenly gap-2">
              {handleCartLoading && selectedProductId === product._id ? (
                <ActivityIndicator size="small" color="red" />
              ) : (
                <>
                  <TouchableOpacity
                    className="flex flex-row items-center justify-center p-2 border border-gray-200"
                    onPress={() => {
                      setSelectedProductId(product._id);
                      handleCartDecrease(product.product._id, UserData._id);
                    }}
                  >
                    <MinusIcon />
                  </TouchableOpacity>
                  <View className>
                    <Text style={{ fontFamily: "PublicSans_700Bold" }}>
                      {product.quantity}
                    </Text>
                  </View>

                  <TouchableOpacity
                    className="flex flex-row items-center justify-center p-2 border border-gray-200"
                    onPress={() => {
                      setSelectedProductId(product._id);
                      handleAddToCart(product.product._id, UserData._id);
                    }}
                  >
                    <PlusIcon />
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem