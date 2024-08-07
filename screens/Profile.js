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

import { StyleSheet } from "react-native";
import Svg, { G, Path } from "react-native-svg";
import { CloseAccountIcon } from "../components/svgs/Icons";
import { AngleIcon } from "../components/svgs/Icons";
import { LogOutIcon } from "../components/svgs/Icons";
import { EditIcon } from "../components/svgs/Icons";
import { useNavigation } from "@react-navigation/native"
import { ResetPasswordIcon } from "../components/svgs/Icons";
import { StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import globalstyels from "../styles/globalstyels";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import { UseUserContext } from "../context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UseProductProvider } from "../context/ProductProvider";
import { Alert } from "react-native";
import { ActivityIndicator } from "react-native";
import { useCustomFonts } from "../context/FontContext";
import AppLoading from "expo-app-loading";
import { AntDesign } from "@expo/vector-icons";


export default function Profile() {
   const { fontsLoaded, fontStyles } = useCustomFonts();

  const {
    setIsSignUpVisible,
    UserData,
    getUserData,
    setUserData,
    setCartProducts,
  } = UseUserContext();
  const { cartProducts } = UseProductProvider();
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [loading, setLoading]=useState(false)
  const navigation = useNavigation()
  const insets = useSafeAreaInsets();



    if (!UserData) {
      const handleLoginPress = () => {
        // Navigate to the login screen
        setIsSignUpVisible(true);
      };
      return (
        <View className="flex flex-1 items-center justify-center">
          <Text className="mb-[20px] text-md">You are not logged in!</Text>
          <Text style={{ marginBottom: 20 }}>
            Please log in to view your wishlist
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
            <Text className="text-white text-[16px]">Log In</Text>
          </TouchableOpacity>
        </View>
      );
    }
  
  
   const confirmLogout = () =>
     Alert.alert(
       "Logging out","You are about to log out" ,

       [
         {
           text: "Cancel",
           onPress: () => console.log("Cancel Pressed"),
           style: "cancel",
         },
         { text: "OK", onPress: () => handleLogout() },
       ]
    );
  
  const handleLogout = async () => {
    try {
      setLoading(true)
      await AsyncStorage.removeItem('authToken')
      const storedToken = await AsyncStorage.getItem("authToken")
  
      if (!storedToken) {
        navigation.navigate('Home')
        setUserData(null)
    

      } else {
        console.log("thank you")
      }
    } catch (error) {
       console.error("Error checking authToken in async storage", error)
    } finally {
       setLoading(false)
    }
  }
  
  
  
  

  const checkCart = () => {
  
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={globalstyels.droidSafeArea}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <ScrollView
        style={{
          backgroundColor: "#ecf0f1",
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <View className="flex flex-row gap-2 items-center mx-2 ">
          <Image
            className="rounded-full object-cover"
            style={{ height: 70, width: 70 }}
            source={{
              uri: `${UserData.userdp}`,
            }}
          />

          <View className="flex flex-col">
            <Text
              style={{ fontFamily: "PublicSans_700Bold" }}
              className="capitalize text-lg"
            >
              {UserData && UserData.fullname}
            </Text>
            <Text
              style={{ fontFamily: "PublicSans_300Light" }}
              className="text-base font-semibold"
            >
              {UserData && UserData.email}
            </Text>
            <Text
              style={{ fontFamily: "PublicSans_300Light" }}
              className="text-sm font-semibold"
            >
            Plan: {UserData && UserData?.userpackage}
            </Text>
          </View>
        </View>

        <View className="mx-2 mt-4">
          <View className="flex flex-row w-full mb-2 gap-2 ">
            <TouchableOpacity
              className="bg-white flex-1 flex flex-row items-center px-2 py-2 shadow-sm rounded-lg"
              onPress={() => navigation.navigate("Orders")}
            >
              <Svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <G
                  stroke="#737373"
                  strokeWidth={1.176}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <Path d="M20.387 7.157L12 12 3.61 7.15M12 12v9" />
                  <Path d="M11 2.577a2 2 0 012 0l6.66 3.846a2 2 0 011 1.732v7.69a2 2 0 01-1 1.732L13 21.423a2 2 0 01-2 0l-6.66-3.846a2 2 0 01-1-1.732v-7.69a2 2 0 011-1.732L11 2.577z" />
                </G>
              </Svg>
              <Text
                className="mx-2"
                style={{ fontFamily: "PublicSans_700Bold" }}
              >
                Orders
              </Text>
            </TouchableOpacity>
            <Pressable className="bg-white flex-1 flex flex-row items-center px-2  shadow-sm rounded-lg ">
              <Svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#737373"
              >
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 6c-1.8-2.097-4.806-2.745-7.06-.825-2.255 1.92-2.573 5.131-.802 7.402 1.472 1.888 5.927 5.87 7.387 7.16.163.144.245.216.34.245a.456.456 0 00.258 0c.095-.029.176-.1.34-.245 1.46-1.29 5.915-5.272 7.387-7.16 1.77-2.27 1.492-5.502-.802-7.402C16.755 3.275 13.8 3.903 12 6z"
                  strokeWidth={1.176}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <Text
                className="mx-2"
                style={{ fontFamily: "PublicSans_700Bold" }}
              >
                Wishlist
              </Text>
            </Pressable>
          </View>
        </View>

        <View
          style={{ borderBottomWidth: 1, borderBottomColor: "#D3D3D3" }}
          className="mt-2"
        />

        <Text className="mt-4 mx-2 font-bold">Account Settings</Text>

        {/* general settins container */}
        <View className="mx-4 mt-2">
          {/* Edit profile */}
          <TouchableOpacity
            className="flex flex-row items-center justify-between pb-4 border-b border-b-gray-200 mt-2"
            onPress={() => navigation.navigate("EditProfile")}
          >
            <View className="flex flex-row items-center">
              <EditIcon />
              <Text
                className="mx-2"
                style={{ fontFamily: "PublicSans_500Medium" }}
              >
                Edit profile
              </Text>
            </View>
            <AngleIcon />
          </TouchableOpacity>

          {/* Transaction history*/}
          <TouchableOpacity
            className="flex flex-row items-center justify-between pb-4 border-b border-b-gray-200 mt-2"
            onPress={() => navigation.navigate("History")}
          >
            <View className="flex flex-row items-center">
              <AntDesign size={24} name="creditcard" color="#737373" />
              <Text
                className="mx-2"
                style={{ fontFamily: "PublicSans_500Medium" }}
              >
                Transaction History
              </Text>
            </View>
            <AngleIcon />
          </TouchableOpacity>

          {/* change password */}
          <TouchableOpacity
            className="flex flex-row items-center justify-between pb-4 border-b border-b-gray-200 mt-2"
            onPress={() => navigation.navigate("Changepassword")}
          >
            <View className="flex flex-row items-center">
              <ResetPasswordIcon />
              <Text
                className="mx-2"
                style={{ fontFamily: "PublicSans_500Medium" }}
              >
                Change Password
              </Text>
            </View>
            <AngleIcon />
          </TouchableOpacity>

          {/* close accoutn */}
          <TouchableOpacity
            className="flex flex-row items-center justify-between pb-4 border-b border-b-gray-200 mt-2"
            onPress={() => navigation.navigate("Closeaccount")}
          >
            <View className="flex flex-row items-center ">
              <CloseAccountIcon />
              <Text
                className="mx-2"
                style={{ fontFamily: "PublicSans_500Medium" }}
              >
                Close Account
              </Text>
            </View>
            <AngleIcon />
          </TouchableOpacity>

          {/* log out */}
          <TouchableOpacity
            className="flex flex-row items-center justify-between pb-4 border-b border-b-gray-200 mt-2"
            onPress={() => confirmLogout()}
          >
            <View className="flex flex-row items-center">
              <LogOutIcon />
              <Text
                className="mx-2"
                style={{ fontFamily: "PublicSans_500Medium" }}
              >
                Log out
              </Text>
            </View>
            {loading ? (
              <ActivityIndicator size="small" color="#727272" />
            ) : (
              <AngleIcon />
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
