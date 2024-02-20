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


export default function Profile() {
  const { setIsSignUpVisible, UserData } = UseUserContext();
  const { cartProducts } = UseProductProvider();
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [loading, setLoading]=useState(false)
  const navigation = useNavigation()
  const insets = useSafeAreaInsets();

  
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
        setIsSignUpVisible(true)
      }
    } catch (error) {
       console.error("Error checking authToken in async storage", error)
    } finally {
       setLoading(false)
    }
  }
  
  
  
  

  // const checkAuthTokenInAsyncStorage = async () => {
  //   try {
  //     // Retrieve the authToken from AsyncStorage
  //     const authToken = await AsyncStorage.getItem("authToken");
  //     const storedToken = JSON.parse(await AsyncStorage.getItem("authToken"));
  //     console.log("stored token that has been parse", storedToken)

  //     // Check if authToken exists in AsyncStorage
  //     if (authToken) {
  //       console.log("Auth token found in AsyncStorage:", authToken);
  //       // Do something if authToken is found
  //     } else {
  //       console.log("Auth token not found in AsyncStorage");
  //       // Do something if authToken is not found
  //     }
  //   } catch (error) {
  //     console.error("Error checking authToken in AsyncStorage:", error);
  //   }
  // };

  const checkCart = () => {
    console.log("my cart product", cartProducts)
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
        <View className="flex flex-row gap-2 items-center mx-2 mt-2">
          <Image
            className="rounded-full"
            style={{ height: 70, width: 70 }}
            source={{
              uri: `${UserData.userdp}`,
            }}
            resizeMode="contain"
          />

          <View className="flex flex-col">
            <Text className="font-bold">{UserData && UserData.fullname}</Text>
            <Text className="text-gray-400">{UserData && UserData.email}</Text>
          </View>
        </View>

        <View className="mx-2 mt-4">
          <View className="flex flex-row w-full mb-2 gap-2 ">
            <TouchableOpacity
              className="bg-white flex-1 flex flex-row items-center px-2 py-2 shadow-md"
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
              <Text className="mx-2">Orders</Text>
            </TouchableOpacity>
            <Pressable
              className="bg-white flex-1 flex flex-row items-center px-2  shadow-md "
              onPress={() => navigation.navigate("Paymentsuccess")}
            >
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
              <Text className="mx-2">Wishlist</Text>
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
          <TouchableOpacity
            className="flex flex-row items-center justify-between pb-4 border-b border-b-gray-200 mt-2"
            onPress={() => navigation.navigate("EditProfile")}
          >
            <View className="flex flex-row items-center">
              <EditIcon />
              <Text className="mx-2">Edit profile</Text>
            </View>
            <AngleIcon />
          </TouchableOpacity>
          <TouchableOpacity
            className="flex flex-row items-center justify-between pb-4 border-b border-b-gray-200 mt-2"
            onPress={() => navigation.navigate("Changepassword")}
          >
            <View className="flex flex-row items-center">
              <ResetPasswordIcon />
              <Text className="mx-2">Change Password</Text>
            </View>
            <AngleIcon />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex flex-row items-center justify-between pb-4 border-b border-b-gray-200 mt-2"
            onPress={() => navigation.navigate("Closeaccount")}
          >
            <View className="flex flex-row items-center ">
              <CloseAccountIcon />
              <Text className="mx-2">Close Account</Text>
            </View>
            <AngleIcon />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex flex-row items-center justify-between pb-4 border-b border-b-gray-200 mt-2"
            onPress={() => confirmLogout()}
          >
            <View className="flex flex-row items-center">
              <LogOutIcon />
              <Text className="mx-2">Log out</Text>
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
