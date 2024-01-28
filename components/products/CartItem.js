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
      <View className="flex flex-row items-center gap-2">
        <View className="basis-1/3">
          <Image
            source={{ uri: product.product.thumbnail }}
            style={{ width: "100%", aspectRatio: 1 }}
          />
        </View>
        <View className="flex flex-col basis-2/3">
          <View className="flex flex-row items-center ">
            <View className="flex flex-col basis-2/3">
              <Text className="font-semibold">{product.product.title}</Text>
              <Text className="text-gray-500">{product.product.category}</Text>
            </View>

            <Pressable
              onPress={() =>
                handleRemoveFromCart(product.product._id, UserData._id)
              }
            >
              <BinIcon />
            </Pressable>
          </View>

          <View className="flex flex-row items-center gap-2">
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