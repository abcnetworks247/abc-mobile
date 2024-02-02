import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Logo from "../assets/AbcstudioNo.png";
import { Pressable } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { UseProductProvider } from "../context/ProductProvider";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from "../utils/Api";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../utils/regex";
import { useState, useEffect } from "react";
import { Link } from "expo-router";
import { UseUserContext } from "../context/UserContext";
import { Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";
import axios from "axios";

const Login = () => {
  const navigation = useNavigation();
  const { setIsSignUpVisible } = UseUserContext();
  // const { handleSignIn, setRecoverVisible } = UseProductProvider();
  const [universalError, setUniversalError] = useState("");

 const [passwordVisible, setPasswordVisible] = useState(false);


 const togglePasswordVisibility = () => {
   setPasswordVisible((prevVisible) => !prevVisible);
 };

  // Define initial validation state
  const [isValidData, setIsValidData] = useState(true);
  // Define the initial loginform data

  const [logInFormData, setlogInFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    email: "",
    fullname: "",
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

  const handleInputChange = (name, value) => {
    setlogInFormData({
      ...logInFormData,
      [name]: value,
    });

    if (name === "email") {
      signUpValidate(name, EMAIL_REGEX, value, "Invalid email format");
    } else if (name === "password") {
      signUpValidate(name, PASSWORD_REGEX, value, "Password is too weak");
    }

    if (!value.trim()) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [name]: "This field is required",
      }));
      setIsValidData(false);
    } else {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
      setIsValidData(true);

      setUniversalError("");
    }
  };

  // Define Variable for allfield valid

  const allFieldsValid = Object.keys(errorMessages).every(
    (field) => !errorMessages[field]
  );

  const handleSubmit = async () => {
    // console.log(logInFormData);
    setIsValidData(allFieldsValid);

    try {
      console.log(logInFormData)
      // const res = await Api.post(
      //   "client/auth/signin",
      //   {
      //     email: logInFormData.email,
      //     password: logInFormData.password,
      //   },
      //   {
      //     withCredentials: true,
      //   }
      // );
       const config = {
         headers: {
           "Content-Type": "application/json",
         },
       };
      const response = await axios.post(`${process.env.EXPO_PUBLIC_SERVER_URL}client/auth/signin`,
        logInFormData, config
      
      );
    
      console.log("my current status", response.status)
      console.log("my cureent statusText", statusText)
        
        if (response.statusText === "OK") {
            const { authToken } = response.data;
           const token = authToken;
        console.log("my token", authToken)
          // const token = authToken;
          await AsyncStorage.setItem("authToken", JSON.stringify(token));
          setIsSignUpVisible(false);
        } else {
        
          // Handle other status codes or error messages
          console.error("Error signing in:");
      
        }

    } catch (error) {
      if (error.response) {
         console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  };
  return (
    <View className="flex items-center justify-center w-full px-6 m-auto">
      <View className="w-full gap-4">
        <View className="flex items-center justify-center ">
          <Image source={Logo} className="w-40 h-20" resizeMode="cover" />
          <Text className="mb-2 text-3xl font-extrabold text-center text-blue-900">
            Login
          </Text>
          <Text className="text-[14px] text-gray-500">
            Hey enter your details to create your account
          </Text>

          {/* <Text>{data && data?.value?.message}</Text> */}
        </View>

        <View className="mb-2">
          <View className="mb-2">
            <TextInput
              placeholder="Enter your email"
              // className="w-auto px-5 py-3 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:bg-white "

              className="w-auto px-5 py-3 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:bg-white "
              keyboardType="email-address"
              value={logInFormData.email}
              onChangeText={(value) => {
                handleInputChange("email", value);
              }}
            />

            {errorMessages.email && (
              <Text className="text-red-500 my-1 text-[13px]">
                {errorMessages.email}
              </Text>
            )}
          </View>

          <View>
            <View className="flex flex-row items-center justify-between border border-gray-200 rounded-lg">
              <TextInput
                placeholder="Enter password"
                secureTextEntry={!passwordVisible}
                className="px-4 d py-2.5 text-base text-gray-900 font-normal bg-gray-100 focus:bg-white flex-grow rounded-l-lg"
                value={logInFormData.password}
                onChangeText={(value) => handleInputChange("password", value)}
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                className=" h-full flex flex-row items-center justify-center px-2 rounded-r-lg bg-white"
              >
                {passwordVisible ? (
                  <Ionicons name="eye-off-sharp" size={23} />
                ) : (
                  <Ionicons name="eye-sharp" size={23} />
                )}
              </TouchableOpacity>
            </View>

            {errorMessages.password && (
              <Text className="text-red-500 my-1 text-[13px]">
                {errorMessages.password}
              </Text>
            )}
          </View>
        </View>
        <View>
          <TouchableOpacity
            title=""
            className="items-center justify-center w-full py-4 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-blue-900 rounded-lg hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
            onPress={() => handleSubmit()}
            disabled={!allFieldsValid}
          >
            <View className="flex flex-row items-center gap-2">
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
              <Text className="text-center text-white">SignIn</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center">
            <Pressable onPress={() => setIsSignUpVisible(false)}>
              <Text className="mr-2">New?</Text>
            </Pressable>

            <TouchableOpacity onPress={() => navigation.navigate("TestSignUp")}>
              <Text className="font-semibold text-blue-900">Register</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className="font-semibold text-blue-900"
            // onPress={() => navigation.navigate("Recovery")}
          >
            <Link href="https://abcstudio-nine.vercel.app/recovery">
              <Text className="text-sm text-center text-gray-600">
                Forgot Password?
              </Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
