import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Home, News, Store, Cart, Profile, ProductDetails, NewsDetails, TypeDetails, Wishlist  } from "../screens";

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
    <Stack.Navigator>
      <Stack.Screen
        name="Store"
        component={Store}
        options={{
         
          headerShown: false,
        
        }}
      />
      <Stack.Screen name="Details" component={ProductDetails} />
    </Stack.Navigator>
  );
}
const WishStackNavigator=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          headerShown: false
          
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
      <Stack.Screen name="TypeDetails" component={TypeDetails} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
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
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
      <Stack.Screen name="News" component={News} />      
    </Stack.Navigator>
  );
};
const TypeDetailsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TypeDetails" component={TypeDetails} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
    </Stack.Navigator>
  );
};

// const StackNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>
//       <Stack.Screen name="Home" component={HomeStackNavigator} />
//       <Stack.Screen name="News" component={NewStackNavigator} />
//       <Stack.Screen name="Store" component={StoreStackNavigator} />
//       <Stack.Screen name="Cart" component={CartStackNavigator} />
//       <Stack.Screen name="Profile" component={ProfileStackNavigator} />
//     </Stack.Navigator>
//   );
// }


export {
  StoreStackNavigator,
  NewStackNavigator,
  ProfileStackNavigator,
  HomeStackNavigator,
  CartStackNavigator,
  TypeDetailsStackNavigator,
  WishStackNavigator,
};
