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
import RNPickerSelect from "react-native-picker-select";
import { Button } from "react-native";


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
    const [phone, setPhone] = useState(UserData?.phone);
    const [shippingAddress, setShippingAddress] = useState(
      UserData?.shippingaddress
    );
    const [city, setCity] = useState("");
    const [postalcode, setPostalCode] = useState("");
    const [state, setState] = useState("");
   const [country, setCountry] = useState("");
  const [note, setNote] = useState("");
  


   const isSubmitDisabled =
     phone === "" ||
     shippingAddress === "" ||
     city === "" ||
     postalcode === "" ||
     state === "" ||
     country === "";
  

  
  const CheckOut = async () => {
    const formData = {
      product: cartProducts,
      phone,
      shippingAddress,
      city,
      postalcode,
      state,
      country,
      note,
    };
    
    console.log("form data before submission", formData)

    console.log("Ready to checkout", cartProducts);
    
    if (!isSubmitDisabled) {
       const AuthtokenString = await AsyncStorage.getItem("authToken");
       const Authtoken = JSON.parse(AuthtokenString);
       console.log("my auth", Authtoken);
       console.log("my payment type", paymentType);
       if (!Authtoken) {
         setIsSignUpVisible(false);
         return;
       }

     

       if (paymentType === "Stripe") {
         try {
           setSpinner(true);
           const session = await axios.post(
             `${process.env.EXPO_PUBLIC_SERVER_URL}admin/commerce/stripe/create-checkout-session`,
             formData,
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
    }
   
  };

   
  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
    },
    input: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
  });

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 4,
      color: "black",
      paddingRight: 30, // to ensure the text is never behind the icon
      marginBottom: 10,
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 8,
      color: "black",
      paddingRight: 30, // to ensure the text is never behind the icon
      marginBottom: 10,
    },
  });

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
         <View className="px-4 mt-2 bg-white">
           <Text>Choose a Payment Method</Text>
           <Picker
             selectedValue={paymentType}
             onValueChange={(itemValue, itemIndex) => setPaymentType(itemValue)}
           >
             <Picker.Item label="Stripe" value="Stripe" />
             <Picker.Item label="Crypto" value="Crypto" />
           </Picker>
         </View>

         {/* form begins */}
         <View style={styles.container}>
           <Text style={styles.label}>Phone Number</Text>
           <TextInput
             style={styles.input}
             value={phone}
             onChangeText={setPhone}
             keyboardType="phone-pad"
           />

           <Text style={styles.label}>Shipping Address</Text>
           <TextInput
             style={styles.input}
             value={shippingAddress}
             onChangeText={setShippingAddress}
           />

           <Text style={styles.label}>City</Text>
           <TextInput
             style={styles.input}
             value={city}
             onChangeText={setCity}
           />

           <Text style={styles.label}>Postal Code</Text>
           <TextInput
             style={styles.input}
             value={postalcode}
             onChangeText={setPostalCode}
             keyboardType="numeric"
           />

           <Text style={styles.label}>State</Text>
           <TextInput
             style={styles.input}
             value={state}
             onChangeText={setState}
           />

           <Text style={styles.label}>Country</Text>
           <RNPickerSelect
             style={pickerSelectStyles}
             onValueChange={(value) => setCountry(value)}
             items={[
               { label: "USA", value: "USA" },
               { label: "Canada", value: "Canada" },
               { label: "UK", value: "UK" },
               { label: "Australia", value: "Australia" },
               { label: "Nigeria", value: "Nigeria" },
               { label: "Ambazonia", value: "Ambazonia" },
               // Add more countries as needed
             ]}
             placeholder={{ label: "Select a country", value: null }}
           />

           <Text style={styles.label}>Note</Text>
           <TextInput
             style={[styles.input, { height: 80 }]} // Increase height for multiline
             value={note}
             onChangeText={setNote}
             multiline={true}
             numberOfLines={4} // You can adjust this based on your preference
           />

           <Button title="Submit" />
         </View>
         {/* form ends */}
       </ScrollView>

       {/* absolutely positioned element */}
       <View className="absolute bottom-0 right-0 left-0 z-10">
         <View className="flex flex-row items-center justify-between bg-white px-4 py-2 shadow-lg">
           <Text className="text-lg font-bold ">${grandTotal.toFixed(2)}</Text>
           <TouchableOpacity
             style={{ width: width / 2, opacity: isSubmitDisabled ? 0.5 : 1 }}
             className="bg-black flex flex-row justify-center items-center h-10 "
             onPress={CheckOut}
             disabled={isSubmitDisabled}
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

