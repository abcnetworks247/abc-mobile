import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
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
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Hometab") {
            iconName = "home";
          } else if (route.name === "Newstab") {
            iconName = "newspaper";
          // } else if (route.name === "Storetab") {
          //   iconName = "storefront";
          } else if (route.name === "Carttab") {
            iconName = "cart";
          } else if (route.name === "Profiletab") {
            iconName = "person";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "blue", // Change this to set the color of the active tab icon
        inactiveTintColor: "gray", // Change this to set the color of inactive tab icons
        style: {
          backgroundColor: "white", // Change this to set the background color of the bottom tab bar
        },
      }}
    >
      <Tab.Screen
        name="Hometab"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Newstab"
        component={NewStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Storetab"
        component={StoreStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Carttab"
        component={CartStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profiletab"
        component={ProfileStackNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};


export default Tabs
