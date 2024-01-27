import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { UseProductProvider } from '../context/ProductProvider'
import Logo from "../assets/AbcstudioNo.png";
import { Pressable } from 'react-native';
import Svg, { Circle, Path } from "react-native-svg";
import { useState, useEffect } from 'react';


const TestSignUp = () => {
    const { handleSubmit, setIsSignInVisible, setIsSignUpVisible } =UseProductProvider();

    const [form, setForm] = useState({
      name: "",
      email: "",
      password: "",
    })
     
    const HandleInputChange = (name, value) => {
      // Update form data state based on the input field name and value
      setForm({
        ...form,
        [name]: value,
      });
    };
    


    const HandleSubmit =(e)=>{
      // e.preventDefault();
      console.log(form)
     

    } 

  return (
    <View className="flex items-center justify-center m-auto w-full px-6 bg-[#F2F2F2] h-full">
      <View className="gap-6 w-full">
        <View className=" flex items-center justify-center ">
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
              onChangeText={(text) => HandleInputChange('name', text)}

              
              
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
              onChangeText={(text) => HandleInputChange('email', text)}
              id='email'
              keyboardType="email-address"
            />
            <Text className="text-red-500 my-1 text-[13px]">Email Error</Text>
          </View>

          <View>
            <TextInput
              placeholder="Enter password"
              secureTextEntry={true}
              onChangeText={(text) => HandleInputChange('password', text)}
              id='password'
              className="w-auto px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
            />
            <Text className="text-red-500 my-1 text-[13px]">Errors here</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            title=""
            className=" items-center justify-center tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out  focus:shadow-outline focus:outline-none"
            onPress={() => HandleSubmit()}
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
            onPress={() => {
              //  setIsSignUpVisible(false)
              // setIsSignInVisible(true)
              HandleSubmit()
            }}
          >
            <Text className="text-blue-900 font-semibold">Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default TestSignUp