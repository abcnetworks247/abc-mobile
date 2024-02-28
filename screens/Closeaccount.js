import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import { UseUserContext } from "../context/UserContext";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { UseProductProvider } from "../context/ProductProvider";
import axios from "axios";
import { useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";

const Closeaccount = () => {

   const inputRef = useRef(null)

  const {showToast}= UseProductProvider()
  const navigation=useNavigation()
    const {authToken , setUserData} = UseUserContext();
  const [formData, setFormData] = useState({
    email: "", 
    password: "",
   });

  const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
  
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  

   const confirmDeletion = () =>
     Alert.alert(
       "Are you sure you want to delete your account?",
       "Deleting your account is permanent and irreversible. You will lose access to all your data, including saved preferences and purchase history.",
       [
         {
           text: "Cancel",
           onPress: () => console.log("Cancel Pressed"),
           style: "cancel",
         },
         { text: "OK", onPress: () => handleSubmit() },
       ]
    );
  
   const deleteSuccess = (message) => {
     ToastAndroid.showWithGravityAndOffset(
       message,
       ToastAndroid.LONG,
       ToastAndroid.TOP,
       25,
       50
     );
     navigation.navigate('Home')
     setUserData(null);

   };

  
  

  const handleSubmit = async () => {
    const authTokenString = await AsyncStorage.getItem('authToken')
    const authToken= JSON.parse(authTokenString)
    const config = {
      data: {
        email: formData.email,
        password: formData.password,
      }, // Include data in the config object
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      
    };
    try {
      console.log(config.data)
      setLoading(true);
      
      const response= await axios.delete(
         `${process.env.EXPO_PUBLIC_SERVER_URL}client/auth/account`,
           config
      );

      if (response.status == 200) {
        await AsyncStorage.removeItem('authToken')
        deleteSuccess("Your account has been deleted successfully");
      }
     
      
      setLoading(false);
   
      
      
    } catch (error) {
       setLoading(false);
      // console.error("Error deleting account:", error.response.data);
        deleteSuccess(error.response.data.error);
      
    }
  };

  return (
    <SafeAreaView>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <ScrollView>
        <View>
          <View className="px-4 w-full">
            <View className="mt-6">
              <View className="mb-6">
                <Text className="block mb-2 text-sm font-medium dark:text-gray-400">
                  Email
                </Text>
                <TextInput
                  inputRef
                  name="email"
                  type="email"
                  placeholder="Type your email"
                  className="w-full px-4 d py-2.5 text-base text-gray-900 bg-white font-normal border border-gray-200"
                  data-gramm="false"
                  wt-ignore-input="true"
                  onChangeText={(text) => handleInputChange("email", text)}
                />
              </View>
              <View className="mb-6">
                <Text className="block mb-2 text-sm font-medium dark:text-gray-400">
                  Password
                </Text>
                <View className="flex flex-row items-center justify-between bg-white  border border-gray-200">
                  <TextInput
                    inputRef
                    name="password"
                    secureTextEntry={!passwordVisible}
                    placeholder="Type your password"
                    value={formData.password}
                    className="px-4 d py-2.5 text-base text-gray-900 font-normal "
                    data-gramm="false"
                    wt-ignore-input="true"
                    onChangeText={(text) => handleInputChange("password", text)}
                  />
                  <TouchableOpacity
                    onPress={togglePasswordVisibility}
                    className="mr-2"
                  >
                    {passwordVisible ? (
                      <Ionicons name="eye-off-sharp" size={23} />
                    ) : (
                      <Ionicons name="eye-sharp" size={23} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                onPress={confirmDeletion}
                className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {loading ? (
                  // Show loading indicator while loading
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  // Show "Proceed" text when not loading
                  <Text className="text-white text-center text-lg">
                    Proceed
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Closeaccount;
