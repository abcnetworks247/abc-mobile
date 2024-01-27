import React from "react";
import { TouchableOpacity} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Searchbar from "react-native-paper";
import TestSignUp from "../auth/TestSignUp";
import Updatepassword from "../auth/Updatepassword";
import Recovery from "../auth/Recovery";
import Login from "../auth/Login";
import { Ionicons } from "@expo/vector-icons";
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
  Membership,
  Contact,
  About,
} from "../screens";

import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { ChangePasswordIcon, HamburgerIcon } from "../components/svgs/Icons";
import { Pressable, TouchableHighlight, View } from "react-native";
import { SearchIcon } from "../components/svgs/Icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { ChevronLeftIcon } from "../components/svgs/Icons";
import { MenuIcon } from "../components/svgs/Icons";
import Profileheader from "../components/Profileheader";
import Productheader from "../components/products/Productheader";
import Navbar from "../components/Navbar";









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
          title: '',
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="menu-sharp" size={23} />
            </Pressable>
          ),

          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Searchpage")}
              style={{ marginRight: 10 }}
            >
              <Ionicons name="search-sharp" size={23} />
            </Pressable>
          ),
          headerStyle: {
            shadowColor: "#000",
            elevation: 25,
          },
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
const WishStackNavigator = () => {
  const navigation=useNavigation()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          title: "",
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="menu-sharp" size={23} color={"white"} />
            </Pressable>
          ),

          headerStyle: {
            shadowColor: "#000",
            elevation: 25,
            backgroundColor: "#2c3e50",
          },
        }}
      />
      <Stack.Screen name="Details" component={ProductDetails} />
    </Stack.Navigator>
  );
}

const NewStackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="News" component={News}
      options={{
        header: () => <Navbar />
      }}
      />
      <Stack.Screen name="TypeDetails" component={TypeDetails} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
    </Stack.Navigator>
  );
};

const CartStackNavigator = () => {
  const navigation = useNavigation()
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
          title: "",
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="menu-sharp" size={23} color={"white"} />
            </Pressable>
          ),

          headerStyle: {
            shadowColor: "#000",
            elevation: 25,
            backgroundColor: "#2c3e50",
          },
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={Editprofile}
        options={{
          headerTitle: "Edit profile",
        }}
      />
      <Stack.Screen
        name="Changepassword"
        component={Changepassword}
        options={{
          headerTitle: "Reset password",
        }}
      />
      <Stack.Screen
        name="Closeaccount"
        component={Closeaccount}
        options={{
          headerTitle: "Close account",
        }}
      />
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

// home stack
const HomeStackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <Navbar />
 
        }}
      />
      <Stack.Screen name="NewsDetails" component={NewsDetails}/>
      
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


const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TestSignUp"
        component={TestSignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Recovery"
        component={Recovery}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Updatepassword"
        component={Updatepassword}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const MembershipStackNavigator = () => {
  const navigation=useNavigation()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Membership"
        component={Membership}
        options={{
          title: "",
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="menu-sharp" size={23} color={"white"} />
            </Pressable>
          ),

          headerStyle: {
            shadowColor: "#000",
            elevation: 25,
            backgroundColor: "#2c3e50",
          },
        }}
      />
    </Stack.Navigator>
  );
};
const ContactStackNavigator = () => {
  const navigation=useNavigation()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          title: "",
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="menu-sharp" size={23} color={"white"} />
            </Pressable>
          ),

          headerStyle: {
            shadowColor: "#000",
            elevation: 25,
            backgroundColor: "#2c3e50",
          },
        }}
      />
    </Stack.Navigator>
  );
};
const AboutStackNavigator = () => {
  const navigation=useNavigation()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: "",
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="menu-sharp" size={23} color={"white"} />
            </Pressable>
          ),

          headerStyle: {
            shadowColor: "#000",
            elevation: 25,
            backgroundColor: "#00308F",
          },
        }}
      />
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
  AuthStackNavigator,
  MembershipStackNavigator,
  ContactStackNavigator,
  AboutStackNavigator,
};
