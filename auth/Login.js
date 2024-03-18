import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Logo from "../assets/AbcstudioNo.png";
import { Pressable } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { UseProductProvider } from "../context/ProductProvider";
import { useNavigation } from "@react-navigation/native";
import { NAME_REGEX, PASSWORD_REGEX, EMAIL_REGEX } from "../utils/regex";
import Api from "../utils/Api";
import { Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UseUserContext } from "../context/UserContext";
import { ToastAndroid } from "react-native";
import axios from "axios";
import { useCustomFonts } from "../context/FontContext";
import AppLoading from "expo-app-loading";
import { Link } from "expo-router";

const Login = () => {
  const { fontsLoaded, fontStyles } = useCustomFonts();
  const navigation = useNavigation();
  const { setIsSignInVisible, setIsSignUpVisible, UserData, getUserData } =
    UseUserContext();
  const [universalError, setUniversalError] = useState("");

  const showToast = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      25,
      50
    );
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  // Define initial validation state
  const [isValidData, setIsValidData] = useState(true);
  // Define the initial loginform data

  const [signUpFormData, setSignUpFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
  });

  function signUpValidate(fieldName, regex, value, errorMessage) {
    if (!regex.test(value)) {
      setUniversalError("");
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [fieldName]: errorMessage,
      }));
      setIsValidData(false);
    } else {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [fieldName]: "",
      }));
      setIsValidData(true);

      setUniversalError("");
    }
  }

  const handleInputChange = (name, value, id) => {
    setSignUpFormData({
      ...signUpFormData,
      [name]: value,
    });

    if (name === "email") {
      signUpValidate(name, EMAIL_REGEX, value, "Invalid email format");
    } else if (name === "password") {
      signUpValidate(
        name,
        PASSWORD_REGEX,
        value,
        "Password must be 6-20 characters and include at least one numeric digit, one uppercase, and one lowercase letter"
      );
    }
  };

  // Define Variable for allfield valid

  const allFieldsValid = Object.keys(errorMessages).every(
    (field) => !errorMessages[field]
  );

  
 

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_SERVER_URL}client/auth/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: signUpFormData.email,
            password: signUpFormData.password,
          }),
        }
      );

      "my response", response;

      const responseData = await response.json();
      "my response data", responseData;
      "my status", response.status;
      if (response.status == 200) {
        await AsyncStorage.setItem(
          "authToken",
          JSON.stringify(responseData.authToken)
        );
        getUserData();
        showToast(responseData.message);
        setIsSignUpVisible(false);
      } else {
        showToast(responseData.error)
      }
    } catch (error) {
      error;
    }
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View className="flex items-center justify-center m-auto w-full px-6 bg-[#F2F2F2]">
      <View className="gap-6 w-full">
        <View className="flex items-center justify-center ">
          <Image source={Logo} className="w-40 h-20" resizeMode="cover" />
          <Text
            style={{ fontFamily: "PublicSans_600SemiBold", fontSize: 20 }}
            className=" text-blue-900 mb-2 text-center"
          >
            Log in
          </Text>
          <Text
            className="text-center"
            style={{ fontFamily: "PublicSans_500Medium", fontSize: 16 }}
          >
            Hey, enter your details to login
          </Text>
        </View>

        <View className="gap-2">
          <View>
            <TextInput
              style={{ fontFamily: "PublicSans_400Regular", fontSize: 16 }}
              placeholder="Enter your email"
              className="w-auto px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none  focus:bg-white "
              keyboardType="email-address"
              value={signUpFormData.email}
              onChangeText={(value) => {
                handleInputChange("email", value);
              }}
            />
            {errorMessages.email && (
              <Text
                style={{ fontFamily: "PublicSans_500Medium", fontSize: 12 }}
                className="text-red-500 my-1"
              >
                {errorMessages.email}
              </Text>
            )}
          </View>

          <View>
            <View className="flex flex-row items-center justify-between border border-gray-200 rounded-lg">
              <TextInput
                style={{ fontFamily: "PublicSans_400Regular", fontSize: 16 }}
                placeholder="Enter password"
                secureTextEntry={!passwordVisible}
                className="px-4 d py-2.5 text-gray-900  bg-gray-100 focus:bg-white flex-grow rounded-l-lg"
                value={signUpFormData.password}
                onChangeText={(value) => {
                  handleInputChange("password", value);
                }}
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                className="h-full flex flex-row items-center justify-center px-2 rounded-r-lg bg-white"
              >
                {passwordVisible ? (
                  <Ionicons name="eye-off-sharp" size={23} />
                ) : (
                  <Ionicons name="eye-sharp" size={23} />
                )}
              </TouchableOpacity>
            </View>

            {errorMessages.password && (
              <Text
                style={{ fontFamily: "PublicSans_500Medium", fontSize: 12 }}
                className="text-red-500 my-1"
              >
                {errorMessages.password}
              </Text>
            )}
          </View>
        </View>
        <View>
          <TouchableOpacity
            title=""
            className={` items-center justify-center tracking-wide font-semibold ${
              !allFieldsValid ? "bg-blue-600/30" : "bg-blue-900"
            }  text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out  focus:shadow-outline focus:outline-none`}
            onPress={() => handleSubmit()}
            disabled={!allFieldsValid}
          >
            <View className="flex flex-row gap-2 items-center">
              <Svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginRight: 5 }}
              >
                <Path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <Circle cx="8.5" cy="7" r="4" />
                <Path d="M20 8v6M23 11h-6" />
              </Svg>
              <Text
                style={{ fontFamily: "PublicSans_600SemiBold" }}
                className="text-white text-center"
              >
                Log in
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-2">
            <Text
              style={{ fontFamily: "PublicSans_500Medium_Italic" }}
              className="text-center text-gray-500"
            >
              New?
            </Text>
            <Pressable
              className="text-center text-gray-500"
              onPress={() => navigation.navigate("TestSignUp")}
            >
              <Text
                style={{ fontFamily: "PublicSans_600SemiBold" }}
                className="text-blue-900 font-semibold"
              >
                Register
              </Text>
            </Pressable>
          </View>
          <Link href="https://abcstudio-nine.vercel.app/recovery">
            <Text
              className="text-blue-900"
              style={{ fontFamily: "PublicSans_500Medium", fontSize: 12 }}
            >
              Forgot password
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Login;
