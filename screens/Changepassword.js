import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import Svg, { Path, G } from "react-native-svg";
import * as ImagePicker from "expo-image-picker";

const Changepassword = () => {
  const SelectImagePicker = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
      if (!result.canceled) {
      }
    } catch (error) {}
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View className="px-4 w-full">
            <View className="mt-6">
              <View className="mb-6">
                <Text className="block mb-2 text-sm font-medium dark:text-gray-400">
                   Current Password
                </Text>
                <TextInput
                  name="currentPassword"
                  type="password"
                  placeholder="......."
                  className="w-full px-4 d py-2.5 text-base text-gray-900 bg-white font-normal border border-gray-200"
                  data-gramm="false"
                  wt-ignore-input="true"
                />
              </View>
              <View className="mb-6">
                <Text className="block mb-2 text-sm font-medium dark:text-gray-400">
                   New password
                </Text>
                <TextInput
                  name="newPassword"
                  type="password"
                  placeholder="Type your name"
                  className="w-full px-4 d py-2.5 text-base text-gray-900 font-normal border border-gray-200 bg-white"
                  data-gramm="false"
                  wt-ignore-input="true"
                />
              </View>
              <View className="mb-6">
                <Text className="block mb-2 text-sm font-medium dark:text-gray-400">
                   Confirm password
                </Text>
                <TextInput
                  name="confirmPassword"
                  type="password"
                  placeholder="Type your location"
                  className="w-full px-4 d py-2.5 text-base text-gray-900 font-normal border border-gray-200 bg-white"
                  data-gramm="false"
                  wt-ignore-input="true"
                />
              </View>
             
             
              <TouchableOpacity
                type="submit"
                className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <Text className="text-white text-center text-lg">
                   Change Password
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Changepassword;