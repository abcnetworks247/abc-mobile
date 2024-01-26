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
import { toast } from "react-toastify";

const Login = () => {
  const navigation = useNavigation();
  const { handleSignIn, setIsSignUpVisible, setRecoverVisible } =
    UseProductProvider();
  const [universalError, setUniversalError] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);

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
     setlogInFormData({
       ...logInFormData,
       [name]: value,
     });

     if (name === "email") {
       signUpValidate(name, EMAIL_REGEX, value, "Invalid email format");
     } else if (name === "password") {
       signUpValidate(name, PASSWORD_REGEX, value, "Password is too weak");
     }
   };

  // Define Variable for allfield valid

  const allFieldsValid = Object.keys(errorMessages).every(
    (field) => !errorMessages[field]
  );

 

  const [data, setdata] = useState([]);
  console.log("data", data);

  const handleSubmit = () => {
    console.log("submitted")
  }

  // const handleSubmit = async () => {
    

  //   console.log(logInFormData);
  //   setIsValidData(allFieldsValid);

  //   if (!allFieldsValid) {
  //     toast.error("please fill in all the fields correctly", {
  //       position: toast.POSITION.TOP_LEFT,
  //     });
  //     return;
  //   }
  //   const id = toast.loading("loging in..", {
  //     position: toast.POSITION.TOP_LEFT,
  //   });
  //   try {
  //     // perform an asyncronous request to sigin in the user
  //     console.log(logInFormData, "response data");
  //     const data = await Api.post("client/auth/signin", logInFormData, {
  //       withCredentials: true,
  //     });

  //     const value = data.data;
  //     // log the response data
  //     console.log("errorr", value.error);
  //     // check the staus of the request to see if the request was successful or not
  //     if (data.status === 200) {
  //       console.log(value?.message, "success message");
  //       AsyncStorage.setItem("authToken", data.authToken);
  //       navigation.navigate("Home");

  //       setTimeout(() => {
  //         toast.dismiss(id);
  //       }, 1000);
  //       toast.update(id, {
  //         render: `${data.data.message}`,
  //         type: "success",
  //         isLoading: false,
  //       });
  //       router.push("/");

  //       setdata(value);
  //     }
  //   } catch (error) {
  //     const suberrormsg = toast.update(id, {
  //       render: `${error.response.data.error}`,
  //       type: "error",
  //       isLoading: false,
  //     });
  //     setTimeout(() => {
  //       toast.dismiss(suberrormsg);
  //     }, 2000);

  //     console.error(error);
  //   }
  // };
  return (
    <View className="flex items-center justify-center m-auto w-full px-6">
      <View className="gap-4 w-full">
        <View className=" flex items-center justify-center ">
          <Image source={Logo} className="w-40 h-20" resizeMode="cover" />
          <Text className="text-3xl font-extrabold text-blue-900 mb-2 text-center">
            Login
          </Text>
          <Text className="text-[14px] text-gray-500">
            Hey enter your details to create your account
          </Text>
        </View>

        <View className="mb-2">
          <View className="mb-2">
            <TextInput
              placeholder="Enter your email"
              className="w-auto px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white "
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
            <TextInput
              placeholder="Enter password"
              secureTextEntry={true}
              className="w-auto px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
              value={logInFormData.password}
              onChangeText={(value) => handleInputChange("password", value)}
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
              <Text className="text-white text-center">SignIn</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex items-center justify-between flex-row">

          <View className="flex flex-row items-center">
            <Text className="mr-2">
              New?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("TestSignUp")}>
              <Text className="font-semibold text-blue-900">Register</Text>
            </TouchableOpacity>
          </View>

         
            <TouchableOpacity
              className="font-semibold text-blue-900"
              onPress={() => navigation.navigate("Recovery")}
            >
              <Text className="text-sm text-center text-gray-600">
                Forgot Password?
              </Text>
            </TouchableOpacity>
        
        </View>
      </View>
    </View>
  );
};

export default Login;
