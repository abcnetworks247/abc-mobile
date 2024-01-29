import { StyleSheet, Text, View, Button, TouchableOpacity, Pressable,Image } from 'react-native'
import React, { useState } from 'react'
import { HamburgerIcon } from './svgs/Icons'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { UseUserContext } from '../context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default  function Navbar() {
    const navigation=useNavigation()
    const {UserData} = UseUserContext()
  const [loading, setLoading] = useState(false);
  const {setIsSignUpVisible}= UseUserContext()

    // set a timeout to change the state of the user then after some time set it to null
// const token = JSON.parse(await AsyncStorage.getItem("authToken"))



    return (
      <View className="flex flex-row gap-3 items-center h-[65px] px-2 bg-[#2c3e50]">
        <Pressable
          className="flex-1 flex flex-row items-center boder"
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu-sharp" size={22} color={"white"} />
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
              <TouchableOpacity
                onPress={() => setIsSignUpVisible(true)}
                activeOpacity={0.5}
                className=" p-1 rounded"
              >
              {UserData === null ?  <Text className="px-[2px] text-base font-semibold text-white text-sm">

                  Login / signup
                </Text> 
                
                :
                <TouchableOpacity  >
   
                <Image source={UserData.userdp} className="w-10 h-10 rounded-full border-2 border-[#f5f5f5]"  />
                </TouchableOpacity>}
              </TouchableOpacity>
              
            </View>
          </View>
        
      </View>
    );
}
