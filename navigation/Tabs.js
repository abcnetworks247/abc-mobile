import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { ShopIcon } from "../components/svgs/Icons";
import { HomeIcon, AccountIcon, CartIcon, NewsIcon } from "../components/svgs/Icons";
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
            return <HomeIcon color={color} />;
          } else if (route.name === "Newstab") {
            return <NewsIcon color={color} />;
            } else if (route.name === "Storetab") {
            return <ShopIcon color={color} />
          } else if (route.name === "Carttab") {
             return <CartIcon color={color} />;
          } else if (route.name === "Profiletab") {
             return <AccountIcon color={color} />;
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
        options={{ headerShown: false, tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Newstab"
        component={NewStackNavigator}
        options={{ headerShown: false, tabBarLabel: "News" }}
      />
      <Tab.Screen
        name="Storetab"
        component={StoreStackNavigator}
        options={{ headerShown: false, tabBarLabel: "Store" }}
      />
      <Tab.Screen
        name="Carttab"
        component={CartStackNavigator}
        options={{ headerShown: false, tabBarLabel: "Cart" }}
      />
      <Tab.Screen
        name="Profiletab"
        component={ProfileStackNavigator}
        options={{ headerShown: false, tabBarLabel: "Profile" }}
      />
    </Tab.Navigator>
  );
};


export default Tabs
