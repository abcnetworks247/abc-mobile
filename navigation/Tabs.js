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
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Editprofile } from "../screens";
import { UseProductProvider } from "../context/ProductProvider";


const Tab = createBottomTabNavigator();


const Tabs = () => {
  const {cartProducts}=UseProductProvider()
   const getTabBarVisibility = (route) => {
     const routeName = getFocusedRouteNameFromRoute(route);
     const hideOnScreens = [Editprofile]; // put here name of screen where you want to hide tabBar
     return hideOnScreens.indexOf(routeName) <= -1;
   };
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
            return <ShopIcon color={color} />;
          } else if (route.name === "Carttab") {
            
            return (
              <View className="relative">
                <CartIcon color={color} />
                {cartProducts && cartProducts.length > 0 && (
                  <View className="absolute flex flex-row items-center justify-center rounded-full h-5 w-5 bg-red-400">
                    <Text className="text-white text-sm">{cartProducts.length}</Text>
                  </View>
                )}
              </View>
            );
          } else if (route.name === "Profiletab") {
            return <AccountIcon color={color} />;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#00308F", // Change this to set the color of the active tab icon
        inactiveTintColor: "black", // Change this to set the color of inactive tab icons
        style: {
          backgroundColor: "white", // Change this to set the background color of the bottom tab bar
        },
      }}
    >
      <Tab.Screen
        name="Hometab"
        component={HomeStackNavigator}
        options={{ headerShown: false, tabBarLabel: "" }}
      />
      <Tab.Screen
        name="Newstab"
        component={NewStackNavigator}
        options={{ headerShown: false, tabBarLabel: "" }}
      />
      <Tab.Screen
        name="Storetab"
        component={StoreStackNavigator}
        options={{ headerShown: false, tabBarLabel: "" }}
      />
      <Tab.Screen
        name="Carttab"
        component={CartStackNavigator}
        options={{ headerShown: false, tabBarLabel: "" }}
      />
      {/* <Tab.Screen
        name="signup"
        component={AuthStackNavigatior}
        options={{ headerShown: false, tabBarLabel: "Cart",  }}
      /> */}
      <Tab.Screen
        name="Profiletab"
        component={ProfileStackNavigator}
        options={({ route }) => ({
          headerShown: false,
          tabBarLabel: "",
          tabBarVisible: getTabBarVisibility(route),
        })}
      />
    </Tab.Navigator>
  );
};


export default Tabs
