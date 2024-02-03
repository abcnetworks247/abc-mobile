import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { UseUserContext } from "../context/UserContext";
import { HamburgerIcon } from "./svgs/Icons";

export default function Navbar() {
  const navigation = useNavigation();
  const { UserData } = UseUserContext();
  const [loading, setLoading] = useState(false);
  const { setIsSignUpVisible } = UseUserContext();

  // set a timeout to change the state of the user then after some time set it to null
  // const token = JSON.parse(await AsyncStorage.getItem("authToken"))

  return (
    <SafeAreaView className="flex flex-row gap-3 items-center h-[80px] px-2 bg-[#2c3e50]">
      <Pressable
        className="flex-1 flex flex-row items-center boder"
        onPress={() => navigation.openDrawer()}
      >
        <HamburgerIcon />
      </Pressable>
      {/* {user ? (
          <View className="flex-1 flex flex-row items-center justify-center">
            <Text
              onPress={() => setUser(null)}
              className="text-base uppercase underline font-semibold text-blue-600"
            >
              Hello, {user.name} user
            </Text>
          </View>
        ) : ( */}
      <View className="flex-1 flex flex-row items-center justify-end">
        <View className="flex flex-row gap-1 items-center justify-center p-1 rounded">
          {UserData ? (
            <TouchableOpacity>
              <Image
                source={{
                  uri: `${UserData.userdp}`,
                }}
                className="w-10 h-10  rounded-full border-2 border-[#f5f5f5]"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setIsSignUpVisible(true)}
              activeOpacity={0.5}
              className=" p-1 rounded"
            >
              <Text className="px-[2px] text-base font-semibold text-white text-md">
                Login / signup
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
