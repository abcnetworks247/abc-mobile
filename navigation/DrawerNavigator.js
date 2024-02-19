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
  MembershipStackNavigator,
  ContactStackNavigator,
  AboutStackNavigator,
  DonateStackNavigator,
} from "./StackNavigator";

import { AuthStackNavigatior } from "./StackNavigator";
import Tabs from "./Tabs";
import { CloseAccountIcon, InfoIcon } from "../components/svgs/Icons";
import { HeartIcon } from "../components/svgs/Icons";
import CustomDrawer from "../screens/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const Drawer = createDrawerNavigator();



export default function DrawerNavigator() {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "white",
          },
          drawerLabelStyle: { marginLeft: -25 },
          drawerActiveBackgroundColor: "#2c3e50",
          drawerActiveTintColor: "white",
          headerShown: false,
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={Tabs}
          options={{
            drawerLabel: "Home",
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="MembershipStack"
          component={MembershipStackNavigator}
          options={{
            drawerLabel: "Membership",
            drawerIcon: ({ color }) => (
              <Ionicons name="medal-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Donation"
          component={DonateStackNavigator}
          options={{
            drawerLabel:"Donate",
            drawerIcon: ({ color }) => (
              <Ionicons name="medal-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="AboutStack"
          component={AboutStackNavigator}
          options={{
            drawerLabel: "About",
            drawerIcon: ({ color }) => <InfoIcon color={color} />,
          }}
        />
        <Drawer.Screen
          name="ContactStack"
          component={ContactStackNavigator}
          options={{
            drawerLabel: "Contact",
            drawerIcon: ({ color }) => (
              <Ionicons name="call-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="WishStack"
          component={WishStackNavigator}
          options={{
            drawerLabel: "Wishlist",
            drawerIcon: ({ color }) => (
              <Ionicons name="heart-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profiletab"
          component={ProfileStackNavigator}
          options={{
            drawerLabel: "Profile",
            drawerIcon: ({ color }) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
            title: "Profile",
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
