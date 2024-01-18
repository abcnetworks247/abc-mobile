import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StoreStackNavigator,
  NewStackNavigator,
  ProfileStackNavigator,
  HomeStackNavigator,
  CartStackNavigator,
} from "./StackNavigator";



const Tab = createBottomTabNavigator();










const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Hometab" component={HomeStackNavigator} />
      <Tab.Screen name="Newstab" component={NewStackNavigator} />
      <Tab.Screen name="Storetab" component={StoreStackNavigator} />
      <Tab.Screen name="Carttab" component={CartStackNavigator} />
      <Tab.Screen name="Profiletab" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};


export default Tabs
