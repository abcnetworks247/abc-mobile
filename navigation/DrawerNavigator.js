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
  LiveStackNavigator
} from "./StackNavigator";

import { AuthStackNavigatior } from "./StackNavigator";
import Tabs from "./Tabs";
import { CloseAccountIcon, } from "../components/svgs/Icons";
import { HeartIcon } from "../components/svgs/Icons";
import CustomDrawer from "../screens/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useCustomFonts } from "../context/FontContext";
import AppLoading from "expo-app-loading";

const Drawer = createDrawerNavigator();



export default function DrawerNavigator() {
  const { fontsLoaded, fontStyles } = useCustomFonts();

   if (!fontsLoaded) {
     return <AppLoading />;
   }
    
  
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
            drawerLabelStyle: { fontFamily: "PublicSans_500Medium" },
            drawerInactiveTintColor: "black",
            drawerIcon: ({ color }) => (
              <Foundation name="home" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="LiveStack"
          component={LiveStackNavigator}
          options={{
            drawerLabel: "Live",
            drawerLabelStyle: { fontFamily: "PublicSans_500Medium" },
            drawerInactiveTintColor: "black",
            drawerIcon: ({ color }) => (
              <MaterialIcons name="live-tv" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="MembershipStack"
          component={MembershipStackNavigator}
          options={{
            drawerLabel: "Membership",
            drawerLabelStyle: { fontFamily: "PublicSans_500Medium" },
            drawerInactiveTintColor: "black",
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="wallet-membership"
                size={22}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Donation"
          component={DonateStackNavigator}
          options={{
            drawerLabel: "Donate",
            drawerLabelStyle: { fontFamily: "PublicSans_500Medium" },
            drawerIcon: ({ color }) => (
              <FontAwesome5 name="donate" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="AboutStack"
          component={AboutStackNavigator}
          options={{
            drawerLabel: "About",
            drawerLabelStyle: { fontFamily: "PublicSans_500Medium" },
            drawerIcon: ({ color }) => (
              <Entypo name="info-with-circle" color={color} size={22} />
            ),
          }}
        />
        <Drawer.Screen
          name="ContactStack"
          component={ContactStackNavigator}
          options={{
            drawerLabel: "Contact",
            drawerLabelStyle: { fontFamily: "PublicSans_500Medium" },
            drawerIcon: ({ color }) => (
              <MaterialIcons name="contact-support" size={25} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="WishStack"
          component={WishStackNavigator}
          options={{
            drawerLabel: "Wishlist",
            drawerLabelStyle: { fontFamily: "PublicSans_500Medium" },
            drawerIcon: ({ color }) => (
              <Entypo name="heart" color={color} size={22} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profiletab"
          component={ProfileStackNavigator}
          options={{
            drawerLabel: "Profile",
            drawerLabelStyle: { fontFamily: "PublicSans_500Medium" },
            drawerIcon: ({ color }) => (
              <MaterialIcons name="person" size={24} color={color} />
            ),
            title: "Profile",
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
