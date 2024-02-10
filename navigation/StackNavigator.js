import React from "react";
import { TouchableOpacity} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Searchbar from "react-native-paper";
import TestSignUp from "../auth/TestSignUp";
import Updatepassword from "../auth/Updatepassword";
import Recovery from "../auth/Recovery";
import Login from "../auth/Login";
import { Ionicons } from "@expo/vector-icons";
import { UseProductProvider } from "../context/ProductProvider";
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
  EditInfo,
  Loadingscreen,
} from "../screens";

import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { ChangePasswordIcon, HamburgerIcon } from "../components/svgs/Icons";
import { Pressable, TouchableHighlight, View , Text} from "react-native";
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
const { wishlist } = UseProductProvider();
    

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
          title: "Store",
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="menu-sharp" size={30} color={"white"} />
            </Pressable>
          ),

          headerRight: () => (
            <View className="flex flex-row items-center gap-4">
              <View className="relative">
                <Ionicons name="heart-sharp" size={30} color={"white"} />
                {wishlist && wishlist.length > 0 && (
                  <View className="absolute flex flex-row items-center justify-center  h-5 w-5 rounded-full bg-red-500 left-[-7px] top-[-2px]">
                    <Text className="text-white text-sm m-0 p-0">{wishlist.length}</Text>
                  </View>
                )}
              </View>
              <Pressable
                onPress={() => navigation.navigate("Searchpage")}
                style={{ marginRight: 10 }}
              >
                <Ionicons name="search-sharp" size={30} color={"white"} />
              </Pressable>
            </View>
          ),
          headerStyle: {
            shadowColor: "#000",
            elevation: 25,
            backgroundColor: "#2c3e50",
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
  const { wishlist } = UseProductProvider();
  const navigation=useNavigation()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
            >
              <HamburgerIcon />
            </Pressable>
          ),
          headerTintColor: "white",
          headerTitle: "Wishlist",
       

          headerRight: () => (
            <View className="flex flex-row items-center gap-4 mr-2">
              <View className="relative">
                <Ionicons name="heart-sharp" size={30} color={"white"} />
                {wishlist && wishlist.length > 0 && (
                  <View className="absolute flex flex-row items-center justify-center  h-5 w-5 rounded-full bg-red-500 left-[-7px] top-[-2px]">
                    <Text className="text-white text-sm m-0 p-0">
                      {wishlist.length}
                    </Text>
                  </View>
                )}
              </View>
            </View>
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
  
const { cartProducts } = UseProductProvider();
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
          headerTintColor: "white",

          headerRight: () => (
            <Pressable style={{ marginRight: 50 }}>
              <Text className="text-white">{cartProducts && cartProducts.length} items</Text>
            </Pressable>
          ),

          headerStyle: {
            backgroundColor: "#2c3e50",
          },
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
          title: "Profile",
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
            >
              <HamburgerIcon />
            </Pressable>
          ),
          headerTintColor: "white",

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
          headerRight: () => (
            <TouchableOpacity
              className="mr-2"
              onPress={() => navigation.navigate("EditInfo")}
            >
              <Ionicons name="pencil-sharp" size={30} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="EditInfo"
        component={EditInfo}
        options={{
          headerTitle: "Edit Information",
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
          title: "Membership",
          headerTintColor: "white",
        
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
            >
              <HamburgerIcon />
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
          title: "contact",
          headerTintColor:"white",
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
            >
              <HamburgerIcon />
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
          title: "About",
          headerTintColor:"white",
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
            >
              <HamburgerIcon />
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
const LoadingStackNavigator = () => {
  
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Loading"
        component={Loadingscreen}
      />
    </Stack.Navigator>
  );
};


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
  LoadingStackNavigator,
};
