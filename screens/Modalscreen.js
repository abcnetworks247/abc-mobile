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

const Modalscreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const {spinnerId}=route.params
    //  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
     const [spinner, setSpinner] = useState(false);
     const [amount, setAmount] = useState(spinnerId.range1);
     const [paymentType, setPaymentType] = useState("Stripe");
      
  // console.log("stripe key", process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

 
  

     const Add = () => {
       if (amount < spinnerId.range2) {
         setAmount((prevAmount) => prevAmount + 1);
       }

       console.log("data", spinnerId);
     };

     const Remove = () => {
       if (amount > spinnerId.range1) {
         setAmount((prevAmount) => prevAmount - 1);
       }
    };
     const handleChange = (text) => {
       // Ensure the entered value is within the specified range
       const parsedValue = parseInt(text, 10);
       const minValue = spinnerId?.range1 || 0;
       const maxValue = spinnerId?.range2 || 100;
       const newValue = Math.min(Math.max(parsedValue, minValue), maxValue);
       setAmount(newValue.toString());
     };

     const SubscribeNow = async () => {
     
       
  
      console.log("hit subscribe")
       
         const AuthtokenString = await AsyncStorage.getItem('authToken')
         const Authtoken = JSON.parse(AuthtokenString);

       const update = {
         ...spinnerId,
         price: amount,
         type: spinnerId.type,
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


             setSpinner(false);
           } else {
             console.log("res3", response);
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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex items-center justify-center w-full h-full px-2 overflow-hidden bg-gray-900 bg-opacity-60">
        <View className="relative w-full bg-white rounded-md shadow-xl md:max-w-md md:mx-auto">
          <View className="flex justify-end p-2">
            <Pressable
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onPress={() => navigation.goBack()}
            >
              <Svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                height={32}
                width={32}
              >
                <Path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              </Svg>
            </Pressable>
          </View>
          <View>
            <Text className="ml-8 text-sm font-medium">
              {spinnerId?.name} - {spinnerId?.type} plan
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
                        onPress={Remove}
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
                        value={amount}
                        onChangeText={handleChange}
                        keyboardType="numeric"
                        editable={false} // Make the input read-only
                        className="font-bold font-mono w-[80px] py-1.5 px-2 mx-1.5 block border border-gray-300 rounded-md text-sm shadow-sm  placeholder-gray-400"
                      />
                      <Pressable
                        onPress={Add}
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
                    <Text className="font-semibold">${amount}</Text>
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
                      <Text className='text-white'>Subscribe</Text>
                    ) : (
                     <ActivityIndicator color={'white'} size='small'/>
                    )}
                  </TouchableOpacity>
                  <Text className="mt-3 text-xs text-blue-500 underline">
                    Thank you!
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Modalscreen