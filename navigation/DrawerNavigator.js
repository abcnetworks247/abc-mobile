import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
//import stausbar
import { StatusBar } from "expo-status-bar";
import {
  StoreStackNavigator,
  NewStackNavigator,
  ProfileStackNavigator,
  HomeStackNavigator,
  CartStackNavigator,
  WishStackNavigator,
} from "./StackNavigator";
import { AuthStackNavigatior } from "./StackNavigator";
import Tabs from "./Tabs";
import { CloseAccountIcon } from "../components/svgs/Icons";
import { HeartIcon } from "../components/svgs/Icons";


const Drawer = createDrawerNavigator();


export default function DrawerNavigator() {
  return (
    <>

    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: "blue", // Set the background color to blue
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Tabs}
        options={{
          drawerLabel: "Hometablet",
          drawerIcon: ({ color, size }) => (
            <CloseAccountIcon width={size} height={size} fill={color} />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Profiletab"
        component={ProfileStackNavigator}
        options={{
          drawerLabel: "Profile",
          drawerIcon: ({ color, size }) => (
            <CloseAccountIcon width={size} height={size} fill={color} />
          ),
          title: "Profile",
        }}
      />
      <Drawer.Screen
        name="WishlistTab"
        component={WishStackNavigator}
        options={{
          drawerLabel: "Wishlist",
          drawerIcon: ({ color, size }) => (
            <HeartIcon width={size} height={size} fill={color} />
          ),
          title: "Wish List",
        }}
      />
      
    </Drawer.Navigator>
    </>
  );
}
