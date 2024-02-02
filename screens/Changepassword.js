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
import AsyncStorage from "@react-native-async-storage/async-storage";


const Closeaccount = () => {
  const navigation = useNavigation();
  const { getUserData } = UseUserContext();
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  

const handleSubmit = async () => {


  try {
    setLoading(true);
  
    const authToken = await AsyncStorage.getItem("authToken");
   

    console.log("my authToken", authToken)
    console.log("my string", authToken)
    const response = await fetch(
      `${process.env.EXPO_PUBLIC_SERVER_URL}client/auth/account/activeUserUpdatePassword`,
      {
        method: "PATCH",
        headers: {
          headers: {
            Authorization: `Bearer ${String(authToken)}`,
            "Content-Type": "application/json",
          },
        },
        body: JSON.stringify(formData),
      }
    );

     const {message} = await response.json()

  
      //  await getUserData();
       Alert.alert(message);
      // navigation.navigate("Profile");
   

    setLoading(false);

  } catch (error) {
    setLoading(false);
    console.error("Error updating password:", error);
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
                  Old password
                </Text>
                <View className="flex flex-row items-center justify-between bg-white  border border-gray-200">
                  <TextInput
                    name="oldPassword"
                    secureTextEntry={!passwordVisible}
                    placeholder="Type your password"
                    value={formData.oldPassword}
                    className="px-4 d py-2.5 text-base text-gray-900 font-normal "
                    data-gramm="false"
                    wt-ignore-input="true"
                    onChangeText={(text) =>
                      handleInputChange("oldPassword", text)
                    }
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

              <View className="mb-6">
                <Text className="block mb-2 text-sm font-medium dark:text-gray-400">
                  New Password
                </Text>
                <View className="flex flex-row items-center justify-between bg-white  border border-gray-200">
                  <TextInput
                    name="newPassword"
                    secureTextEntry={!passwordVisible}
                    placeholder="Type your password"
                    value={formData.newPassword}
                    className="px-4 d py-2.5 text-base text-gray-900 font-normal "
                    data-gramm="false"
                    wt-ignore-input="true"
                    onChangeText={(text) =>
                      handleInputChange("newPassword", text)
                    }
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

              <View className="mb-6">
                <Text className="block mb-2 text-sm font-medium dark:text-gray-400">
                  Confirm Password
                </Text>
                <View className="flex flex-row items-center justify-between bg-white  border border-gray-200">
                  <TextInput
                    name="confirmNewPassword"
                    secureTextEntry={!passwordVisible}
                    placeholder="Type your password"
                    value={formData.confirmNewPassword}
                    className="px-4 d py-2.5 text-base text-gray-900 font-normal "
                    data-gramm="false"
                    wt-ignore-input="true"
                    onChangeText={(text) =>
                      handleInputChange("confirmNewPassword", text)
                    }
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
                onPress={handleSubmit}
                className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {loading ? (
                  // Show loading indicator while loading
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  // Show "Proceed" text when not loading
                  <Text className="text-white text-center text-lg">
                    Change password
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
