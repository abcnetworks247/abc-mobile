import React from 'react'
import { Pressable, Text } from 'react-native';
import { MenuIcon } from './svgs/Icons';
import { ChevronLeftIcon } from './svgs/Icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';


const Profileheader = () => {
const navigation = useNavigation()
  return (
    
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
        onPress={() => navigation.goBack()}
      >
        <ChevronLeftIcon />
        <Text className="font-semibold">Profile</Text>
        <Pressable onPress={() => {}}>
          <MenuIcon />
        </Pressable>
      </Pressable>
  
  );
};

export default Profileheader
