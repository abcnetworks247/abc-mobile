import React from 'react'
import { View, Text, TouchableOpacity, Pressable, Image } from 'react-native';
import { BinIcon, PlusIcon, MinusIcon } from '../svgs/Icons';
import { UseProductProvider } from '../../context/ProductProvider';
import { UseUserContext } from '../../context/UserContext';
import Toast from 'react-native-toast-message';
import { ActivityIndicator } from "react-native";
import { useState } from 'react';

const CartItem = ({ product }) => {

const {
  handleRemoveFromCart,
  handleCartDecrease,
  handleAddToCart,
  removeFromCartLoading,
  handleCartLoading,
} = UseProductProvider();
  const { UserData } = UseUserContext();
  const [deletedId, setDeletedId] = useState(null);
  const [incrementId, setIncrementId] = useState(null)
  
  const calculateSubtotal = () => {
    return product.quantity * product.product.price;
  };

  const MAX_NAME_LENGTH = 25;  

  
  const showDeleteToast = () => {
    Toast.show({
      type: "success",
      text1: "Hello",
      text2: "Item is deleted",
      bottomOffset: 2,
      position: "bottom",
    });
  };


 
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
          className="absolute top-0 right-0"
          onPress={() => {
            setDeletedId(product.product._id);
            handleRemoveFromCart(product.product._id, UserData._id);
            showDeleteToast();
          }}
        >
          {removeFromCartLoading && deletedId === product.product._id ? (
            <ActivityIndicator size="small" color="blue" />
          ) : (
            <BinIcon size="24px" />
          )}
        </TouchableOpacity>

        <View className="flex flex-col flex-grow ">
          <View className=" flex-grow-0">
            <View className="flex flex-co py-1 ">
              <Text
                className="font-bold ml-2"
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {product.product.title.length > MAX_NAME_LENGTH
                  ? `${product.product.title.substring(0, MAX_NAME_LENGTH)}...`
                  : product.product.title}
              </Text>

              <Text className="text-gray-500">{product.product.category}</Text>
            </View>
          </View>

          <View className="flex flex-row items-center justify-between">
            {/* price */}
            <View className="flex flex-row gap-1 items-center">
              <Text className="font-bold text-[#00308F]">
                ${calculateSubtotal()}
              </Text>
              <Text className="text-gray-400 line-through">$170</Text>
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
                <Text className="font-bold">{product.quantity}</Text>
              </View>

              {handleCartLoading && incrementId === product.product._id ? (
                <ActivityIndicator size="small" color="red" />
              ) : (
                <TouchableOpacity
                  className="flex flex-row items-center justify-center p-2 border border-gray-200"
                  onPress={() => {
                    setIncrementId(product.product._id);
                    handleAddToCart(product.product._id, UserData._id);
                  }}
                >
                  <PlusIcon />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem