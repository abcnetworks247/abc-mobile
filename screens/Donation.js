import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Pressable
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { UseUserContext } from "../context/UserContext";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { loadStripe } from "@stripe/stripe-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCustomFonts } from "../context/FontContext";
import AppLoading from "expo-app-loading";
import CheckBox from "@react-native-community/checkbox";



const Donation = () => {
  const { UserData, setIsSignUpVisible } = UseUserContext()
  const { fontsLoaded, fontStyles } = useCustomFonts();
  const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
  const navigation=useNavigation()
  const [paymentType, setPaymentType] = useState("Stripe");
 const [spinner, setSpinner] = useState(false);
  const [amount, setAmount] = useState(1);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);


  const handleAdd = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const handleRemove = () => {
    if (amount > 1) {
      setAmount((prevAmount) => prevAmount - 1);
    }
  };

  const handleSubmit = async () => {
    console.log('stripe promise', stripe)
    console.log("my payment type in function", paymentType)
    console.log("my amount in function", amount)



    const AuthtokenString = await AsyncStorage.getItem('authToken')
    const Authtoken = JSON.parse(AuthtokenString);

    console.log("check authToken", Authtoken)
    
   if (!Authtoken) {
      setIsSignUpVisible(false);
       return; 
     }
  
  let data = {
      name: "Donation",
      amount: amount,
      note: "ABCDonatiom",
    };
    
    console.log(data)



  if (paymentType === "Stripe") {
    try {
      setSpinner(true);
      const session = await axios.post(
        `${process.env.EXPO_PUBLIC_SERVER_URL}admin/donation/stripe/create-checkout-session`,
        data,
        {
          headers: {
            Authorization: `Bearer ${Authtoken}`,
          },
          "Content-Type": "application/json",
        }
      );

      if (session.status === 200) {
       
        console.log(session.data.url)
    
        // const result = await stripe.redirectToCheckout({
        //   sessionId: session.data.url,
        // });
        navigation.navigate("Stripe", {
          stripe_url:session.data.url 
        })

       
        setTimeout(() => {
          setSpinner(false);
        }, 1500);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("Error in PayWithStripe:", error);
      setSpinner(false)
    }
  }
    
  };

    if (!fontsLoaded) {
      return <AppLoading />;
    }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView className="px-2 ">
        <View>
          <Image
            source={{
              uri: "https://res.cloudinary.com/db2b7vgg4/image/upload/v1707751594/UserDP/plgw3iwrk1zwvtsa3keq.jpg",
            }}
            style={{
              width: 400,
              height: 300,
              borderRadius: 8,
              marginTop: 12,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "PublicSans_600SemiBold",
            }}
          >
            Summary
          </Text>
          <View
            style={{
              padding: 16,
              backgroundColor: "#FFF",
              borderRadius: 8,
              marginTop: 12,
            }}
          >
            <View className="flex flex-row items-center justify-between">
              <Text
                style={{
                  fontFamily: "PublicSans_500Medium",
                }}
              >
                Donate
              </Text>

              <View className="flex flex-row items-center h-8">
                <Pressable
                  onPress={handleRemove}
                  className="bg-blue-600  font-bold h-full w-6 mr-2 flex flex-row items-center justify-center "
                >
                  <Text
                    className="text-white"
                    style={{ fontFamily: "PublicSans_700Bold" }}
                  >
                    -
                  </Text>
                </Pressable>

                <TextInput
                  value={amount.toString()}
                  onChangeText={(value) => setAmount(value)}
                  keyboardType="numeric"
                  style={{
                    borderWidth: 1,
                    borderColor: "#CCC",
                    padding: 8,
                    height: "100%",
                    width: 100,
                  }}
                />

                <Pressable
                  onPress={handleAdd}
                  className="bg-blue-600 font-bold h-full w-6 ml-2 flex flex-row items-center justify-center"
                >
                  <Text
                    className="text-white"
                    style={{ fontFamily: "PublicSans_700Bold" }}
                  >
                    +
                  </Text>
                </Pressable>
              </View>
            </View>

            <View style={{ marginTop: 12 }}>
              <Text>Choose a Payment Method</Text>
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 12,
              }}
            >
              <Text style={{ fontFamily: "PublicSans_500Medium" }}>
                Amount in (USD)
              </Text>
              <Text style={{ fontFamily: "PublicSans_400Regular" }}>
                ${amount}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              {/* <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              /> */}
              <Text
                style={{ marginLeft: 8, fontFamily: "PublicSans_400Regular" }}
              >
                I agree to the terms and conditions.
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#007BFF",
                padding: 12,
                borderRadius: 8,
                alignItems: "center",
                marginTop: 12,
              }}
              onPress={() => handleSubmit()}
            >
              <Text style={{ color: "#FFF" }}>
                {spinner ? (
                  <ActivityIndicator size="small" color="black" />
                ) : (
                  `Donate $${amount}`
                )}
              </Text>
            </TouchableOpacity>
            <View style={{ marginTop: 12 }}>
              <Text
                style={{
                  color: "#007BFF",
                  textDecorationLine: "underline",
                  fontFamily: "PublicSans_400Regular",
                }}
              >
                Thank you!
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Donation;
