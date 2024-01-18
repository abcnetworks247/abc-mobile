import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Home, News, Store, Cart, Profile, ProductDetails } from "../screens";
import { IconButton } from "react-native-paper";


const Stack = createStackNavigator();


const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

function StoreStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Store"
        component={Store}
        options={{
          headerLeft: () => (
            <IconButton
              icon="arrow-left" 
              color="white"
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
      <Stack.Screen name="Details" component={ProductDetails} />
    </Stack.Navigator>
  );
}

const NewStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="News" component={News} />
    </Stack.Navigator>
  );
};

const CartStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};



export {
  StoreStackNavigator,
  NewStackNavigator,
  ProfileStackNavigator,
  HomeStackNavigator,
  CartStackNavigator,
};
