import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Searchbar from "react-native-paper";

import {
  Home,
  News,
  Store,
  Cart,
  Profile,
  ProductDetails,
  NewsDetails,
  TypeDetails,
  Wishlist,
  Editprofile,
  SignUp,
  Changepassword,
  Closeaccount,
  Orders,
  Searchpage,
  Productresult,
} from "../screens";

import { IconButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ChangePasswordIcon, HamburgerIcon } from "../components/svgs/Icons";
import { Pressable } from "react-native";
import { SearchIcon } from "../components/svgs/Icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { ChevronLeftIcon } from "../components/svgs/Icons";
import { MenuIcon } from "../components/svgs/Icons";
import Profileheader from "../components/Profileheader";
import Productheader from "../components/products/Productheader";








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
            <Pressable onPress={() => navigation.goBack()}>
              <HamburgerIcon />
            </Pressable>
          ),
          title: "Store",

          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Searchpage")}>
              <SearchIcon />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="Details" component={ProductDetails} />
      <Stack.Screen
        name="Searchpage"
        component={Searchpage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Productresult"
        component={Productresult}
        options={{
          headerShown: false,
        }}
      />
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
  const navigation= useNavigation()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <ChevronLeftIcon />
            </Pressable>
          ),
          title: "Cart",

          // headerRight: () => (
          //   <Pressable>
          //     <MenuIcon />
          //   </Pressable>
          // ),
        }}
      />
    </Stack.Navigator>
  );
};


// const AuthStackNavigatior = function () {
//   return(
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name="SignUp" component={SignUp} />
//     </Stack.Navigator>
//   )
// }

const ProfileStackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <ChevronLeftIcon />
            </Pressable>
          ),
          title: 'Profile',
  
          headerRight: () => (
            <Pressable>
              <MenuIcon />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="EditProfile" component={Editprofile}  />
      <Stack.Screen
        name="Changepassword"
        component={Changepassword}
        options={{
          headerTitle: "Reset password",
        }}
      />
      <Stack.Screen name="Closeaccount" component={Closeaccount} />
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <Pressable >
              <HamburgerIcon />
            </Pressable>
          ),
        

        
        }}
      />
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
