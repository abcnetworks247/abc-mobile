import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Home, News, Store, Cart, Profile, ProductDetails, NewsDetails, TypeDetails, Wishlist, Editprofile, SignUp  } from "../screens";

import { IconButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { HamburgerIcon } from "../components/svgs/Icons";
import { Pressable } from "react-native";
import { SearchIcon } from "../components/svgs/Icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";




const Stack = createStackNavigator();


const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

function StoreStackNavigator() {

  const navigation = useNavigation();

  const handleDrawerOpen = () => {
    navigation.openDrawer();
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Store"
        component={Store}
        options={{
          headerLeft: () => (
            <Pressable onPress={handleDrawerOpen} className="ml-10">
              <HamburgerIcon />
            </Pressable>
          ),
          headerTitle: "Store",
          headerRight: () => (
            <Pressable onPress={handleDrawerOpen}>
              <SearchIcon />
            </Pressable>
          ),
          headerStyle: {
            backgroundColor: "white",
      
           
          },
          headerTintColor: "white",
          headerBackTitle: "Back",
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


const AuthStackNavigatior = function () {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
      
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="EditProfile" component={Editprofile} />
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
  AuthStackNavigatior,
};
