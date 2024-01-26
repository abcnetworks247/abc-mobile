import { StyleSheet, Text, View, Button, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { HamburgerIcon } from './svgs/Icons'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';



export default function Navbar() {
    const navigation=useNavigation()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    // set a timeout to change the state of the user then after some time set it to null




    return (
      <View className="flex flex-row gap-3 items-center h-[65px] px-2 bg-[#00308F]">
        <Pressable
          className="flex-1 flex flex-row items-center boder"
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu-sharp" size={22} color={"white"} />
        </Pressable>
        {user ? (
          <View className="flex-1 flex flex-row items-center justify-center">
            <Text
              onPress={() => setUser(null)}
              className="text-base uppercase underline font-semibold text-blue-600"
            >
              Hello, {user.name} user
            </Text>
          </View>
        ) : (
          <View className="flex-1 flex flex-row items-center justify-end">
            <View className="flex flex-row gap-1 items-center justify-center p-1 rounded">
              {/* <Button color="black" title='Sign Up' touchSoundDisabled={false}/> */}
              {/* <TouchableOpacity onPress={() => setUser({ name: "john" })} activeOpacity={0.5} className="border p-1 bg-black rounded">
                                <Text className="text-base font-semibold text-white">Sign Up</Text>
                            </TouchableOpacity> */}
              <TouchableOpacity
                onPress={() => setUser({ name: "john" })}
                activeOpacity={0.5}
                className="border p-1 rounded"
              >
                <Text className="px-[2px] text-base font-semibold text-white">
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
}
