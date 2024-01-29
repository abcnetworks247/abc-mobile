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

const Login = () => {
  const navigation = useNavigation();
  const {setIsSignUpVisible} = UseUserContext()
  // const { handleSignIn, setRecoverVisible } = UseProductProvider();
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

    // if (!allFieldsValid) {
    //   toast.error("please fill in all the fields correctly", {
    //     position: toast.POSITION.TOP_LEFT,
    //   });
    //   return;
    // }
    // const id = toast.loading("loging in..", {
    //   position: toast.POSITION.TOP_LEFT,
    // });
    try {
      // perform an asyncronous request to sigin in the user
      // console.log(logInFormData, "response data");
      const data = await Api.post("client/auth/signin", logInFormData, {
        withCredentials: true,
      });

   
      // log the response data
      // console.log("errorr", value.error);
      // check the staus of the request to see if the request was successful or not
      if (data.status === 200) {
        if(data && data.data && data.data.authToken){
        // console.log(value?.message, "success message"); 
        // console.log(data.data, "data");
        console.log(data.data.authToken, "token");
        const token = data.data.authToken
          await  AsyncStorage.setItem("authToken", JSON.stringify(token) );
     
        };
        setIsSignUpVisible(false)

        // setTimeout(() => {
        //   toast.dismiss(id);
        // }, 1000);
        // toast.update(id, {
        //   render: `${data.data.message}`,
        //   type: "success",
        //   isLoading: false,
        // });
        // router.push("/");

        // setdata(value);
      }
    } catch (error) {
      // const suberrormsg = toast.update(id, {
      //   render: `${error.response.data.error}`,
      //   type: "error",
      //   isLoading: false,
      // });
      // setTimeout(() => {
      //   toast.dismiss(suberrormsg);
      // }, 2000);

      console.error(error);
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
              className="w-auto px-5 py-3 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:bg-white "
              
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
            <TextInput
              placeholder="Enter password"
              secureTextEntry={true}
              
              className="w-auto px-5 py-3 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:bg-white"
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
          <Text>{data}</Text>
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
            <Pressable onPress={()=>setIsSignUpVisible(false)}>
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
