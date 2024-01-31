import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar
} from "react-native";
import React from "react";
import Svg, { Path, G } from "react-native-svg";
import * as ImagePicker from "expo-image-picker";
import globalstyels from "../styles/globalstyels";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import { Toast } from "toastify-react-native";
import ToastManager from "toastify-react-native";
import Container from "toastify-react-native"
import { UseUserContext } from "../context/UserContext";


const Editprofile = () => {
  const { UserData } = UseUserContext();
  const SelectImagePicker = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
      if (!result.canceled) {
      }
    } catch (error) { }
  };
const handleSubmit = async () => {
  Toast.success("Promise if Resolved");
};

  return (
    <SafeAreaView style={globalstyels.droidSafeArea}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <ScrollView>
        <View>
          <View className="px-4 w-full">
            <View className="mt-6">
              <View className="mb-6">
                <Text className="block mb-2 text-sm font-medium dark:text-gray-400">
                  Mobile Number
                </Text>
                <TextInput
                  name="phone "
                  type="text"
                  keyboardType="phone-pad"
                  placeholder="Type your mobile number"
                  className="w-full px-4 d py-2.5 text-base text-gray-900 bg-white font-normal border border-gray-200"
                  data-gramm="false"
                  wt-ignore-input="true"
                />
              </View>
              <View className="mb-6">
                <Text className="block mb-2 text-sm font-medium dark:text-gray-400">
                  Full Name
                </Text>
                <TextInput
                  name="fullname"
                  type="text"
                  placeholder="Type your name"
                  className="w-full px-4 d py-2.5 text-base text-gray-900 font-normal border border-gray-200 bg-white"
                  data-gramm="false"
                  wt-ignore-input="true"
                  value={UserData.fullname}
                />
              </View>
              <View className="mb-6">
                <Text className="block mb-2 text-sm font-medium dark:text-gray-400">
                  Shipping Address
                </Text>
                <TextInput
                  name="shippingaddress"
                  type="text"
                  placeholder="Type your location"
                  className="w-full px-4 d py-2.5 text-base text-gray-900 font-normal border border-gray-200 bg-white"
                  data-gramm="false"
                  wt-ignore-input="true"
                  value={UserData && UserData.shippingaddress}
                />
              </View>
              <View className="mb-6">
                <Text className="block mb-2 text-sm font-medium dark:text-gray-400">
                  Email
                </Text>
                <TextInput
                  name="email"
                  type="email"
                  placeholder="Enter your shipping address..."
                  className="w-full px-4 py-2.5 text-base text-gray-900 font-normal border border-gray-200 bg-white"
                  data-gramm="false"
                  wt-ignore-input="true"
                  value={UserData.email}
                />
              </View>
            
             
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Editprofile;
