import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import FocusAwareStatusBar from "../components/FocusAwareStatusBar";

const Closeaccount = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
   });

  const [passwordVisible, setPasswordVisible] = useState(false);
  
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  
  

  const handleSubmit = () => {
    // Access form data in formData.email and formData.password
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);

    // Add your logic here to handle the form submission
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
                onPress={handleSubmit}
                className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <Text className="text-white text-center text-lg">Proceed</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Closeaccount;
