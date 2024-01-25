import React from 'react'
import { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity} from "react-native";
import Logo from "../assets/AbcstudioNo.png";
import { Pressable } from 'react-native';
import Svg, { Circle, Path } from "react-native-svg";
import { UseProductProvider } from '../context/ProductProvider';
import { useNavigation } from '@react-navigation/native';
import { NAME_REGEX, PASSWORD_REGEX, EMAIL_REGEX } from '../utils/regex';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import Api from '../utils/Api';




const TestSignUp = () => {
  const navigation = useNavigation()
  const {  setIsSignInVisible, setIsSignUpVisible } = UseProductProvider();
     const [universalError, setUniversalError] = useState("");

     const [passwordVisible, setPasswordVisible] = useState(false);

     // Define initial validation state
     const [isValidData, setIsValidData] = useState(true);
     // Define the initial loginform data

     const [signUpFormData, setSignUpFormData] = useState({
       fullname: "",
       email: "",
       password: "",
     });

     const [errorMessages, setErrorMessages] = useState({
       email: "",
       fullname: "",
       password: "",
     });

     const togglePasswordVisibility = () => {
       setPasswordVisible((prevVisible) => !prevVisible);
     };

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
       setSignUpFormData({
         ...signUpFormData,
         [name]: value,
       });

       if (name === "email") {
         signUpValidate(name, EMAIL_REGEX, value, "Invalid email format");
       } else if (name === "password") {
         signUpValidate(name, PASSWORD_REGEX, value, "Password is too weak");
       } else if (name === "fullname") {
         signUpValidate(name, NAME_REGEX, value, "Invalid name");
       } 
     };

     // Define Variable for allfield valid

     const allFieldsValid = Object.keys(errorMessages).every(
       (field) => !errorMessages[field]
     );

     const [data, setdata] = useState([]);
     console.log("data", data);

     const handleSubmit = async () => {
     

       console.log("sign up data", signUpFormData);
       setIsValidData(allFieldsValid);

       if (!allFieldsValid) {
        toast("Please fill in all the fields correctly", {
          type: "error",
          position: "top",
        });
         return;
       }
      
       try {
         // perform an asyncronous request to sigin in the user
         console.log(logInFormData, "response data");
         const data = await Api.post("client/auth/signup", signUpFormData);

         const value = data.data;
         // log the response data
         console.log("errorr", value.error);
          if (data.status === 201) {
            console.log("post successful", data.data.message);
            toast("Registration successful", {
              type: "success",
              position: "top",
            });
            navigation.navigate("Login");
          } else if (data.status === 500) {
            toast("User email or name already exists", {
              type: "error",
              position: "top",
            });
          } else {
            toast("Error while creating account", {
              type: "error",
              position: "top",
            });
          }
       } catch (error) {
          toast(error.response.data.error, {
            type: "error",
            position: "top",
          });
       }
     };

  
  return (
    <View className="flex items-center justify-center m-auto w-full px-6 bg-[#F2F2F2]">
      <View className="gap-6 w-full">
        <View className="flex items-center justify-center ">
          <Image source={Logo} className="w-40 h-20" resizeMode="cover" />
          <Text className="text-3xl font-extrabold text-blue-900 mb-2 text-center">
            Register
          </Text>
          <Text className="text-[14px] text-gray-500">
            Hey enter your details to create your account
          </Text>
        </View>

        <View className="gap-2">
          <View className="flex ">
            <TextInput
              placeholder="Enter your name"
              className="w-auto px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
              value={signUpFormData.fullname}
              onChangeText={(value) => {
                handleInputChange("fullname", value);
              }}
            />
            {errorMessages.fullname && (
              <Text className="text-red-500 my-1 text-[13px]">
                {errorMessages.fullname}
              </Text>
            )}
          </View>
          <View>
            <TextInput
              placeholder="Enter your email"
              className="w-auto px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white "
              keyboardType="email-address"
              value={signUpFormData.email}
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
            <TextInput
              placeholder="Enter password"
              secureTextEntry={true}
              className="w-auto px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
              value={signUpFormData.password}
              onChangeText={(value) => {
                handleInputChange("password", value);
              }}
            />
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
            className=" items-center justify-center tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out  focus:shadow-outline focus:outline-none"
            onPress={() => handleSubmit()}
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
              <Text className="text-white text-center">Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row items-center">
          <Text className="text-center text-gray-500">
            Already have an account?{" "}
          </Text>
          <Pressable
            className="text-center text-gray-500"
            onPress={() => navigation.navigate("Login")}
          >
            <Text className="text-blue-900 font-semibold">Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default TestSignUp