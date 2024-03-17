// DonationCard.js
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
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { useWindowDimensions } from "react-native";




const OrderCard = ({orderhistory}) => {
 const {width}=useWindowDimensions()
  const [isVisible, setIsVisible] = useState({});
  
  const viewMoreorLess = (id) => {
    setIsVisible((prevState) => ({
      ...prevState,
      [id]: !prevState[id] || false,
    }));
  };

  return (
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
            
            {/* total amount */}
            <View className="flex flex-row items-center justify-between py-2 border-b-2 border-b-gray-100">
              <Text>Total amount</Text>
              <Text className="text-[#00308F] font-bold">${order.amount}</Text>
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
  );
};



export default OrderCard;
