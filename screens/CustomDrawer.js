import React from 'react'
import { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity , ImageBackground} from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Api from '../utils/Api';
import { Link } from 'expo-router';
import { useCustomFonts } from '../context/FontContext';
import AppLoading from 'expo-app-loading';


const CustomDrawer = (props) => {
    const { fontsLoaded, fontStyles } = useCustomFonts();
 

 const [type, setType] = useState([]);
 const [focus, setFocus]=useState('1')
  const [nestedDrawerItem, setNestedDrawerItem] = useState(false)
  
  const toggleDrawerItem = () => {
    setNestedDrawerItem(prev=>!prev)
  }

  
  const fetchData = async () => {
    try {
      const response = await Api.get("admin/category/news/type");

      if (response.status === 200) {
        console.log("data2", response.data.data);
        setType(response.data.data);
      }
    } catch (error) {
      // console.log(" Error------------->>", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

    if (!fontsLoaded) {
      return <AppLoading />;
    }

    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={require("../assets/abcbackground.jpg")}>
          <Image
            source={require("../assets/AbcstudioNo.png")}
            style={{
              height: 200,
              width: 200,
            }}
            resizeMode="contain"
          />
        </ImageBackground>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{ backgroundColor: "#2c3e50" }}
        >
          <View style={{ paddingTop: 10, backgroundColor: "white" }}>
            <DrawerItem
        
              label={({ focused, color }) => (
                <View className="flex flex-row items-center justify-between">
                  <View className="flex flex-row items-center gap-2">
                    <Entypo name="news" size={22} color={color} />
                    <Text style={{ color, fontFamily: "PublicSans_500Medium" }}>
                      News
                    </Text>
                  </View>
                  {nestedDrawerItem ? (
                    <Entypo name="chevron-down" size={22} color={color} />
                  ) : (
                    <Entypo name="chevron-right" size={22} color={color} />
                  )}
                </View>
              )}
              onPress={() => {
                setFocus(1);
                toggleDrawerItem();
              }}
            />
            {nestedDrawerItem &&
              type &&
              type.map((item, index) => (
                <DrawerItem
                  key={index}
                  icon={({ color, size, focused }) => (
                    <Entypo name="chevron-right" size={22} color={color} />
                  )}
                  label={({ focused, color }) => <Text>{item.name}</Text>}
                />
              ))}
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
        <View className="p-4 border border-gray-200 ">
          <TouchableOpacity style={{ paddingVertical: 10 }}>
            <View className="flex flex-row items-center">
              <Ionicons name="exit-outline" size={22} />
              <Text
                className="ml-2"
                style={{ fontFamily: "PublicSans_500Medium" }}
              >
                log out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default CustomDrawer