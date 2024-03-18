import React from 'react'
import { useState } from 'react';
import {
  View,
  Text,
  Button,
  Pressable,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import Svg, { Rect, Path, Defs, ClipPath } from "react-native-svg";
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadStripe } from '@stripe/stripe-js';
import { Modal } from 'react-native';
import { PanResponder } from 'react-native';
import { Animated } from 'react-native';
import { StyleSheet } from 'react-native';

const Modalscreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const {plan}=route.params
    //  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
     const [spinner, setSpinner] = useState(false);
    // const [amount, setAmount] = useState(plan.range1);
  const [paymentType, setPaymentType] = useState("Stripe");
   const [modalVisible, setModalVisible] = useState(null);
      
 

 const [value, setValue] = useState(plan.range1);

 const increment = () => {
   if (value < plan.range2) {
     setValue(value + 1);
   }
 };

 const decrement = () => {
   if (value > plan.range1) {
     setValue(value - 1);
   }
 };
  //  const pan = React.useRef(new Animated.ValueXY()).current;
  //  const panResponder = React.useRef(
  //    PanResponder.create({
  //      onStartShouldSetPanResponder: () => true,
  //      onPanResponderMove: Animated.event(
  //        [
  //          null,
  //          {
  //            dy: pan.y,
  //          },
  //        ],
  //        { useNativeDriver: false }
  //      ),
  //      onPanResponderRelease: (_, gestureState) => {
  //        if (gestureState.dy > 50) {
  //          // If dragged down more than 50, close the modal
  //          closeModal();
  //        } else {
  //          // Otherwise, reset the position
  //          Animated.spring(pan, {
  //            toValue: { x: 0, y: 0 },
  //            useNativeDriver: false,
  //          }).start();
  //        }
  //      },
  //    })
  //  ).current;

     const SubscribeNow = async () => {
     
       
  
 
       
         const AuthtokenString = await AsyncStorage.getItem('authToken')
         const Authtoken = JSON.parse(AuthtokenString);

       const update = {
         ...plan,
         price: value,
         type: plan.type,
       };

       

       

       if (paymentType === "Stripe") {
         try {
           setSpinner(true);
           const response = await axios.post(
             `${process.env.EXPO_PUBLIC_SERVER_URL}admin/sub/usersubscription`,
             update,
             {
               headers: {
                 Authorization: `Bearer ${Authtoken}`,
                 "Content-Type": "application/json",
               },
             }
           );

         

           if (response.status === 409) {
             console.log(
               "User is already subscribed, redirecting to billing portal",
               response.data.redirectUrl
             );
            

              navigation.navigate("Stripesub", {
                stripe_url: response.data.redirectUrl,
              });
             setSpinner(false);

             // if (response.data && response.data.redirectUrl) {
             //   window.location.href = response.data.data.redirectUrl;
             // }
           } else if (response.status === 200) {
             // Adjusted condition to handle successee
               navigation.navigate("Stripesub", {
                 stripe_url: response.data.url,
               });
              // navigation.navigate("Stripesub", {
              //   stripe_url: response.data.url,
              // });


             setSpinner(false);
           } else {
           
             console.error(`Unexpected response status: ${response.status}`);
             setSpinner(false);
           }
         } catch (error) {
           // window.location.href = error.response.data.redirectUrl;
          
           //window.location.href = error.response.data.redirectUrl;
           navigation.navigate("Stripesub", {
             stripe_url: error.response.data.redirectUrl,
           });

             console.log(error);
             setSpinner(false);
          
         }
       }
  };
  //  const closeModal = () => {
  //    navigation.goBack(); // Close the modal
  //  };

  return (
   
      <SafeAreaView className="flex-1 items-center justify-center bg-white" >
      
         
          <View>
            <Text className="ml-8 text-sm font-medium">
              {plan?.name} - {plan?.type} plan
            </Text>
            <View className="py-6 mt-4 bg-white rounded shadow-lg">
              <View>
                <View className="px-8">
                  <View className="flex flex-row items-center justify-between gap-5">
                    <Text className="inline-flex items-center self-start h-full mt-2 font-semibold ">
                      Subscribe
                    </Text>
                    <View className="flex flex-row items-center">
                      <Pressable
                        onPress={decrement}
                        className="bg-blue-600 p-1.5 font-bold rounded"
                      >
                        <Svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="#fff"
                          className="w-5 h-5 text-white"
                        >
                          <Path d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" />
                        </Svg>
                      </Pressable>
                      <TextInput
                        value={value.toString()}
                        onChangeText={(text) => {
                          const numericValue = parseInt(text);
                          if (
                            !isNaN(numericValue) &&
                            numericValue >= plan.range1 &&
                            numericValue <= plan.range2
                          ) {
                            setValue(numericValue);
                          }
                        }}
                        keyboardType="numeric"
                        editable={false} // Make the input read-only
                        className="font-bold  w-[80px] py-1.5 px-2 mx-1.5 block border border-gray-300 rounded-md text-sm shadow-sm  placeholder-gray-400"
                      />
                      <Pressable
                        onPress={increment}
                        className="bg-blue-600 p-1.5 font-bold rounded"
                      >
                        <Svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="#fff"
                          className="w-5 h-5 text-white"
                        >
                          <Path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
                        </Svg>
                      </Pressable>
                    </View>
                  </View>
                </View>
                <View className="px-8 pt-4 mt-4 border-t">
                  <Text className="block mb-2 mt-10 text-sm font-medium text-gray-900">
                    Choose a Payment Method
                  </Text>
                  <Picker
                    selectedValue={paymentType}
                    onValueChange={(itemValue, itemIndex) =>
                      setPaymentType(itemValue)
                    }
                  >
                    <Picker.Item label="Stripe" value="Stripe" />
                    <Picker.Item label="Crypto" value="Crypto" />
                  </Picker>
                </View>
                <View className="px-8 pt-4 mt-4 border-t">
                  <View className="flex items-end justify-between">
                    <Text className="font-semibold">Amount in (USD)</Text>
                    <Text className="font-semibold">${value}</Text>
                  </View>
                  <Text className="mt-2 text-xs text-gray-500">
                    Payment goes to ABC Networks 24
                  </Text>
                </View>
                <View className="flex items-center px-8 mt-8">
                  {/* <CheckBox
                  // value={isSelected}
                  // onValueChange={setSelection}
                  /> */}
                  <Text className="ml-2 text-xs text-gray-500">
                    I agree to the terms and conditions.
                  </Text>
                </View>
                <View className="flex flex-col px-8 pt-4">
                  <TouchableOpacity
                    className="flex items-center justify-center w-full h-10 text-sm font-medium bg-blue-600 rounded text-blue-50 hover:bg-blue-700"
                    onPress={SubscribeNow}
                  >
                    {spinner === false ? (
                      <Text className="text-white">Subscribe</Text>
                    ) : (
                      <ActivityIndicator color={"white"} size="small" />
                    )}
                  </TouchableOpacity>
                  <Text className="mt-3 text-xs text-blue-500 underline">
                    Thank you!
                  </Text>
                </View>
              </View>
            </View>
          </View>
       
      </SafeAreaView>
   
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: 200, // Adjust as needed
  },
  closeButton: {
    marginTop: 10,
    alignSelf: "flex-end",
  },
  closeButtonText: {
    color: "blue",
  },
});

export default Modalscreen