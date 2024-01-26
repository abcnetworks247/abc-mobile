import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Logo from "../assets/AbcstudioNo.png";
import { Pressable } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
<<<<<<< HEAD:screens/TestSignUp.js
import { useState, useEffect } from 'react';


const TestSignUp = () => {
    const { handleSubmit, setIsSignInVisible, setIsSignUpVisible } =UseProductProvider();

    const [form, setForm] = useState({
      name: "",
      email: "",
      password: "",
    })
     
    const HandleInputChange = async (e) => {
      const { name, value } = e.target.id;
      // Update form data state based on the input field name and value
      setForm({
        ...form,
        [name]: value,
      });

    } 


    const HandleSubmit =()=>{
   
      console.log(form)
      handleSubmit(form)

    } 
=======
import { UseProductProvider } from "../context/ProductProvider";
import { useNavigation } from "@react-navigation/native";

const Updatepassword = () => {
  const navigation = useNavigation()
  const { handleSubmit, setIsSignInVisible, setIsSignUpVisible } =
    UseProductProvider();
>>>>>>> 6b97a1214818b3c8105dc16b435c7a90efe7aadd:auth/Updatepassword.js
  return (
    <View className="flex items-center justify-center m-auto w-full px-6">
      <View className="gap-4 w-full">
        <View className=" flex items-center justify-center ">
          <Image source={Logo} className="w-40 h-20" resizeMode="cover" />
          <Text className="text-3xl font-extrabold text-blue-900 mb-2 text-center">
            Update Password
          </Text>
          <Text className="text-[14px] text-gray-500">
            Enter your New Password
          </Text>
        </View>

<<<<<<< HEAD:screens/TestSignUp.js
        <View className="gap-2">
          <View className="flex ">
            <TextInput
              placeholder="Enter your name"
              onChange={(e)=>HandleInputChange(e)}
              
              id='name'
              className="w-auto px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
            />
            {/* <Text className="text-red-500 my-1 text-[13px]">{errors.name}</Text> */}
          </View>
          <View>
            <TextInput
              placeholder="Enter your email"
              className="w-auto px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white "
              //   onChange={handleChange("email")}
              //   onBlur={handleBlur("email")}
              //   value={values.email}
              onChange={(e)=>HandleInputChange(e)}
              id='email'
              keyboardType="email-address"
            />
            <Text className="text-red-500 my-1 text-[13px]">Email Error</Text>
          </View>

=======
        <View>
>>>>>>> 6b97a1214818b3c8105dc16b435c7a90efe7aadd:auth/Updatepassword.js
          <View>
            <TextInput
              placeholder="Enter password"
              secureTextEntry={true}
              onChange={(e)=>HandleInputChange(e)}
              id='password'
              className="w-auto px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
              // onChange={handleChange("password")}
              // onBlur={handleBlur("password")}
              // value={values.password}
            />
            <Text className="text-red-500 my-1 text-[13px]">error</Text>
          </View>
        </View>
        <View>
          <View>
            <TextInput
              placeholder="Confirm password"
              secureTextEntry={true}
              className="w-auto px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
              // onChange={handleChange("confirmpassword")}
              // onBlur={handleBlur("confirmpassword")}
              // value={values.confirmpassword}
            />
            <Text className="text-red-500 my-1 text-[13px]">error</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            title=""
            className=" items-center justify-center tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out  focus:shadow-outline focus:outline-none"
<<<<<<< HEAD:screens/TestSignUp.js
            onPress={() => HandleSubmit()}
=======
>>>>>>> 6b97a1214818b3c8105dc16b435c7a90efe7aadd:auth/Updatepassword.js
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
              <Text className="text-white text-center">Update password</Text>
            </View>
          </TouchableOpacity>
        </View>
<<<<<<< HEAD:screens/TestSignUp.js
        <View>

        <View className="flex flex-row items-center">
          <Text className="text-center text-gray-500">
            Already have an account?{" "}
          </Text>
          <Pressable
            className="text-center text-gray-500"
            onPress={() => {
               setIsSignUpVisible(false)
              setIsSignInVisible(true)
            }}
          >
            <Text className="text-blue-900 font-semibold">Login</Text>
          </Pressable>
=======
        <View className="flex flex-row items-center justify-between">
          <Text  className="text-center text-gray-500">  Remeber your password?{" "}</Text>
            <Pressable
              className="text-blue-900 font-semibold"
              onPress={() => navigation.navigate("Login")}
            >
              <Text>Login</Text>
            </Pressable>
          
>>>>>>> 6b97a1214818b3c8105dc16b435c7a90efe7aadd:auth/Updatepassword.js
        </View>
        </View>
      </View>
    </View>
  );
};

export default Updatepassword;
