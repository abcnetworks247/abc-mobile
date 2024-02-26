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
import Toast from "react-native-toast-message";
import { Fontisto } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import { ActivityIndicator } from "react-native-paper";
import { loadStripe } from "@stripe/stripe-js";
import { RefreshControl } from "react-native";
import { useWindowDimensions } from "react-native";


export default function Cart() {
  const {width}=useWindowDimensions()
  const { cartProducts,  } = UseProductProvider(); 
 const navigation = useNavigation();
const { authToken, UserData, setIsSignUpVisible } = UseUserContext();
  const shippingFee = 5;
  

  const [refreshing, setRefreshing] = React.useState(false);

   const onRefresh = React.useCallback(() => {
     setRefreshing(true);
     setTimeout(() => {
       setRefreshing(false);
        console.log("current user data", UserData)
     }, 2000);
   }, []);
  
  if (!UserData) {
   const handleLoginPress = () => {
      // Navigate to the login screen
      setIsSignUpVisible(true)
    };
    return (
      <View className="flex flex-1 items-center justify-center" >
        <Text className="mb-[20px] text-md" >
          You are not logged in!
        </Text>
        <Text style={{ marginBottom: 20 }}>
          Please log in to view your cart.
        </Text>
        <TouchableOpacity
          onPress={handleLoginPress}
          className
          style={{
            backgroundColor: "#007bff",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
          }}
        >
          <Text className="text-white text-[16px]" >Log In</Text>
        </TouchableOpacity>
      </View>
    );
  }

  
  
 
   
  

  if (UserData && cartProducts.length === 0) {
    
    return (
      <SafeAreaView style={globalstyels.droidSafeArea}>
        <View className="flex flex-1 items-center justify-center sm:mx-12 sm:shadow-lg sm:py-7 ">
          <View className="flex flex-col items-center  gap-2">
            <Fontisto
              name="shopping-basket-remove"
              size={100}
              color={"#2c3e50"}
            />
            <Text className="text-[#575746] font-bold">Your cart is empty</Text>
            <Text className="text-sm ml-3  text-center text-[#313133]  ">
              Why not explore our latest products and discover something you
              love
            </Text>
            <TouchableOpacity
              className="flex items-center justify-center p-2 bg-[#2c3e50] shadow-md rounded-sm "
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


  
const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
if (authToken && cartProducts && cartProducts.length > 0) {
  const totalPrice = cartProducts.reduce(
    (accumulator, product) =>
      accumulator + product.quantity * product.product.price,
    0
  );
  console.log(totalPrice);

  const grandTotal = totalPrice + shippingFee;
  const [paymentType, setPaymentType] = useState("Stripe");
   const [spinner, setSpinner] = useState(false);
  

  
  const CheckOut = async () => {
    console.log("Ready to checkout", cartProducts);
    const AuthtokenString = await AsyncStorage.getItem('authToken')
    const Authtoken = JSON.parse(AuthtokenString)
    console.log("my auth", Authtoken)
    console.log("my payment type", paymentType)
    if (!Authtoken) {
      setIsSignUpVisible(false)
      return;
    }

    let data = {
      product: cartProducts,
    };

    if (paymentType === "Stripe") {
    
      try {
         setSpinner(true);
        const session = await axios.post(
          `${process.env.EXPO_PUBLIC_SERVER_URL}admin/commerce/stripe/create-checkout-session`,
          data,
          {
            headers: {
              Authorization: `Bearer ${Authtoken}`,
            },
            "Content-Type": "application/json",
          }
        );

        if (session.status === 200) {
          console.log("session", session);

            navigation.navigate("Stripeproduct", {
              stripe_url: session.data.url,
            });

          setSpinner(false);

        
        } else {
          console.log("error");
        }
      } catch (error) {
        console.error("Error in PayWithStripe:", error);
          setSpinner(false);
      }
    }
  };

   return (
     <SafeAreaView style={globalstyels.droidSafeArea} className="relative">
       <FocusAwareStatusBar
         barStyle="light-content"
         backgroundColor="#2c3e50"
       />
       <ScrollView
         refreshControl={
           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
         }
       >
         <View className="mt-4 px-2">
           {cartProducts.map((product) => (
             <CartItem key={product._id} product={product} />
           ))}
         </View>
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
             <Text className="text-lg font-bold text-[#00308F]">
               ${grandTotal.toFixed(2)}
             </Text>
           </View>
         </View>
         <View style={{ marginTop: 12 }}>
           <Text>Choose a Payment Method</Text>
           <Picker
             selectedValue={paymentType}
             onValueChange={(itemValue, itemIndex) => setPaymentType(itemValue)}
           >
             <Picker.Item label="Stripe" value="Stripe" />
             <Picker.Item label="Crypto" value="Crypto" />
           </Picker>
         </View>
       </ScrollView>
       <View className="absolute bottom-0 right-0 left-0 z-10">
         <View className="flex flex-row items-center justify-between bg-white px-4 py-2 shadow-lg">
           <Text className="text-lg font-bold ">
             ${grandTotal.toFixed(2)}
           </Text>
           <TouchableOpacity
             style={{width:width/2}}
             className="bg-black flex flex-row justify-center items-center h-10 "
             onPress={CheckOut}
           >
             <Text className="text-white font-bold">
               {spinner ? (
                 <ActivityIndicator size="small" color="white" />
               ) : (
                 "Check out "
               )}
             </Text>
           </TouchableOpacity>
         </View>
       </View>
     </SafeAreaView>
   );
}

 
}

