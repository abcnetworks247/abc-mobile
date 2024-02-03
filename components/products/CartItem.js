import React from 'react'
import { View, Text, TouchableOpacity, Pressable, Image } from 'react-native';
import { BinIcon, PlusIcon, MinusIcon } from '../svgs/Icons';
import { UseProductProvider } from '../../context/ProductProvider';
import { UseUserContext } from '../../context/UserContext';

const CartItem = ({ product }) => {

const { handleRemoveFromCart, handleCartDecrease, handleAddToCart } =UseProductProvider();
const { UserData } = UseUserContext();
  const calculateSubtotal = () => {
    return product.quantity * product.product.price;
  };
  return (
    <View className="bg-white p-2 mb-2">
      <View className="flex flex-row items-center gap-2 relative">
        {/* image here */}
        <View className="w-[80px]">
          <Image
            source={{ uri: product.product.thumbnail }}
            style={{ width: "100%", aspectRatio: 1 }}
          />
        </View>

        <Pressable
          className="absolute top-0 right-0"
          onPress={() =>
            handleRemoveFromCart(product.product._id, UserData._id)
          }
        >
          <BinIcon size="24px" />
        </Pressable>

        <View className="flex flex-col flex-grow">
          <View className="flex flex-row items-center justify-between ">
            <View className="flex flex-col ">
              <Text className="font-semibold">{product.product.title}</Text>
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
                onPress={() =>
                  handleCartDecrease(product.product._id, UserData._id)
                }
              >
                <MinusIcon />
              </TouchableOpacity>
              <View className>
                <Text className="font-bold">{product.quantity}</Text>
              </View>

              <TouchableOpacity
                className="flex flex-row items-center justify-center p-2 border border-gray-200"
                onPress={() =>
                  handleAddToCart(product.product._id, UserData._id)
                }
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