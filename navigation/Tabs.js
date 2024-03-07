import { View, Text, TouchableOpacity } from "react-native";
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
  AuthStackNavigator,
} from "./StackNavigator";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Editprofile } from "../screens";
import { UseProductProvider } from "../context/ProductProvider";
import { UseUserContext } from "../context/UserContext";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import { StyleSheet } from "react-native";
import { useCustomFonts } from "../context/FontContext";
import AppLoading from "expo-app-loading";
import TabButton from "../components/TabButton";


const Tab = createMaterialBottomTabNavigator();


const Tabs = () => {
  const { fontsLoaded, fontStyles } = useCustomFonts();
 
      
  const { width, height } = useWindowDimensions();
  
  const isPortrait = height > width;
  const { cartProducts } = UseProductProvider()
  const { UserData, setIsSignUpVisible } = UseUserContext()
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }
 
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#2c3e50"
      barStyle={{
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <Tab.Screen
        name="Hometab"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: (
            <Text style={{ fontFamily: "PublicSans_500Medium" }}>Home</Text>
          ),
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Newstab"
        component={NewStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: (
            <Text style={{ fontFamily: "PublicSans_500Medium" }}>News</Text>
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="newspaper-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Storetab"
        component={StoreStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: (
            <Text style={{ fontFamily: "PublicSans_500Medium" }}>Store</Text>
          ),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="storefront-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Carttab"
        component={CartStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: (
            <Text style={{ fontFamily: "PublicSans_500Medium" }}>Cart</Text>
          ),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              size={24}
              color={color}
            />
          ),
          tabBarBadge: cartProducts!=='undefined'  && cartProducts && cartProducts.length > 0 && cartProducts.length,
        }}
      />

      {UserData &&
        <Tab.Screen
          name="Profiletab"
          component={ProfileStackNavigator}
          options={({ route }) => ({
            headerShown: false,
            tabBarLabel: (
      
              <Text style={{ fontFamily: "PublicSans_500Medium" }}>
                Profile
              </Text>
            ),
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="person-outline" size={24} color={color} />
            ),
          })}
        />
      }
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarPortrait: {
    height: 60,
  },
  tabBarLandscape: {
    height: 40,
  },
});



export default Tabs
