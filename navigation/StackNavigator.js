import React from "react";
import { TouchableOpacity, Image,} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Searchbar from "react-native-paper";
import TestSignUp from "../auth/TestSignUp";
import Updatepassword from "../auth/Updatepassword";
import Recovery from "../auth/Recovery";
import Login from "../auth/Login";
import { Ionicons } from "@expo/vector-icons";
import { UseProductProvider } from "../context/ProductProvider";
import { useIsFocused } from "@react-navigation/native";
import { useCustomFonts } from "../context/FontContext";
import AppLoading from "expo-app-loading";
import * as Animatable from 'react-native-animatable'; // Import Animatable library
import DonationModal from "../components/Transaction/DonationModal";
import Live from "../screens/Live";



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
  Donation,
  Stripescreen,
  Stripeproduct,
  Paymentsuccess,
  Modalscreen,
  Stripesub,
  Transaction,
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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { UseUserContext } from "../context/UserContext";









const Stack = createStackNavigator();


const getCommon = (Stack) => {
  const { UserData, setIsSignUpVisible } = UseUserContext();
  const navigation = useNavigation();

  const { fontsLoaded, fontStyles } = useCustomFonts();
  if (!fontsLoaded) {
    return <AppLoading />;
  }
    return <Stack.Screen
         name="Home"
         component={Home}
        options={{
          title: "Feed",
          headerTitleStyle: {
            fontFamily: "PublicSans_600SemiBold",
            fontSize: 20,
          },
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
            >
              <HamburgerIcon />
            </Pressable>
          ),

          headerRight: () => (
            <View className="mr-3">
              {UserData ? (
                <TouchableOpacity>
                  <Image
                    source={{
                      uri: `${UserData.userdp}`,
                    }}
                    className="w-10 h-10  rounded-full border-2 border-[#f5f5f5]"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setIsSignUpVisible(true)}
                  activeOpacity={0.5}
                  className=" p-1 rounded"
                >
                  <Text className="px-[2px] text-base font-semibold text-white text-md">
                    Login / signup
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          ),
          headerTintColor: "white",

          headerStyle: {
            shadowColor: "#000",
            elevation: 25,
            backgroundColor: "#2c3e50",
          },
        }}
      />
     
  
};


const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

// store stack
function StoreStackNavigator() {
  const { wishlist } = UseProductProvider();
  const { fontsLoaded, fontStyles } = useCustomFonts();
 

  const navigation = useNavigation();

  const handleDrawerOpen = () => {
    navigation.openDrawer();
  };

   if (!fontsLoaded) {
     return <AppLoading />;
   }
    
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
          headerTitleStyle: {
            fontFamily: "PublicSans_600SemiBold",
            fontSize: 20,
          },
          headerTintColor: "white",

          headerRight: () => (
            <View className="flex flex-row items-center gap-4">
              <View className="relative">
                <Ionicons name="heart-sharp" size={30} color={"white"} />
                {!wishlist || wishlist === "undefined" ? (
                  ""
                ) : (
                  <View className="absolute flex flex-row items-center justify-center  h-5 w-5 rounded-full bg-red-500 left-[-7px] top-[-2px]">
                    <Text className="text-white text-sm m-0 p-0">
                      {wishlist.length}
                    </Text>
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
      <Stack.Screen
        name="Details"
        component={ProductDetails}
        options={{
          headerTitle: "Product Details",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "PublicSans_600SemiBold",
            fontSize: 20,
          },
        }}
      />
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

// wish stack
const WishStackNavigator = () => {
  const { wishlist } = UseProductProvider();
  const navigation = useNavigation()
  const { fontsLoaded, fontStyles } = useCustomFonts();
  if (!fontsLoaded) {
    return <AppLoading />;
  }
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
          headerTitleStyle: {
            fontFamily: "PublicSans_600SemiBold",
            fontSize: 20,
          },
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

// news stack
const NewStackNavigator = () => {
  const { fontsLoaded, fontStyles } = useCustomFonts();
  const { UserData, setIsSignUpVisible } = UseUserContext();
  const navigation = useNavigation();

    if (!fontsLoaded) {
      return <AppLoading />;
    }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="News"
        component={News}
        options={{
          title: "News Category",
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
            >
              <HamburgerIcon />
            </Pressable>
          ),
          headerTitleStyle: {
            fontFamily: "PublicSans_600SemiBold",
            fontSize: 20,
          },

          headerRight: () => (
            <View className="mr-3">
              {UserData ? (
                <TouchableOpacity>
                  <Image
                    source={{
                      uri: `${UserData.userdp}`,
                    }}
                    className="w-10 h-10  rounded-full border-2 border-[#f5f5f5]"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setIsSignUpVisible(true)}
                  activeOpacity={0.5}
                  className=" p-1 rounded"
                >
                  <Text className="px-[2px] text-base font-semibold text-white text-md">
                    Login / signup
                  </Text>
                </TouchableOpacity>
              )}
            </View>
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
        name="TypeDetails"
        component={TypeDetails}
        options={({ route }) => ({
          headerTitle: route.params.name || "TypeDetails", // Set the header title dynamically
          headerStyle: {
            shadowColor: "#000",
            elevation: 25,
            backgroundColor: "#2c3e50",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: "PublicSans_700Bold_Italic",
            fontSize: 20,
          },
        })}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{
          headerTitle: "Details",
          headerStyle: {
            shadowColor: "#000",
            elevation: 25,
            backgroundColor: "#2c3e50",
          },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
};


// cart stack

const CartStackNavigator = () => {
   const { fontsLoaded, fontStyles } = useCustomFonts();
  const isFocused = useIsFocused();
  
const { cartProducts } = UseProductProvider();
  const navigation = useNavigation()

   if (!fontsLoaded) {
     return <AppLoading />;
   }
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
          headerTitleStyle: {
            fontFamily: "PublicSans_600SemiBold",
            fontSize: 20,
          },

          headerRight: () => (
            <Pressable style={{ marginRight: 50 }}>
              {cartProducts !=='undefined' &&
                cartProducts &&
                cartProducts.length > 0 && (
                  <Text className="text-white">
                    {cartProducts.length} items
                  </Text>
                )}
            </Pressable>
          ),

          headerStyle: {
            backgroundColor: "#2c3e50",
          },
          tabBarVisible: !isFocused, // Hide the tab bar when screen is focused
          tabBarStyle: { display: isFocused ? "none" : "flex" }, // Hide the tab bar when screen is focused
        }}
      />
      <Stack.Screen
        name="Stripeproduct"
        component={Stripeproduct}
        options={{
          title: "Stripe",
        }}
      />
    </Stack.Navigator>
  );
};


//profile stack
const ProfileStackNavigator = () => {
  const navigation = useNavigation();
  const { fontsLoaded, fontStyles } = useCustomFonts();

  const common = getCommon(Stack);
  if (!fontsLoaded) {
    return <AppLoading />;
  }
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
          headerTitleStyle: {
            fontFamily: "PublicSans_600SemiBold",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={Editprofile}
        options={{
          headerTitle: "Profile Information",
          headerRight: () => (
            <TouchableOpacity
              className="mr-2"
              onPress={() => navigation.navigate("EditInfo")}
            >
              <Animatable.View
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite"
              >
                <MaterialCommunityIcons name="account-edit" size={30} />
              </Animatable.View>
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            fontFamily: "PublicSans_600SemiBold",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="EditInfo"
        component={EditInfo}
        options={{
          headerTitle: "Edit Information",
          headerTitleStyle: {
            fontFamily: "PublicSans_600SemiBold",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="Changepassword"
        component={Changepassword}
        options={{
          headerTitle: "Reset password",
          headerTitleStyle: {
            fontFamily: "PublicSans_600SemiBold",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="History"
        component={Transaction}
        options={{
          headerTitle: "Transaction History",
          headerTitleStyle: {
            fontFamily: "PublicSans_600SemiBold",
            fontSize: 20,
          },
        }}
      />
     {common}
      <Stack.Screen
        name="Closeaccount"
        component={Closeaccount}
        options={{
          headerTitle: "Close account",
          headerTitleStyle: {
            fontFamily: "PublicSans_600SemiBold",
            fontSize: 20,
          },
        }}
      />
      <Stack.Group
        screenOptions={{ presentation: "modal", headerShown: false }}
      >
        <Stack.Screen name="DonationModal" component={DonationModal} />
      </Stack.Group>

      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Paymentsuccess" component={Paymentsuccess} />
    </Stack.Navigator>
  );
};

// home stack
const HomeStackNavigator = () => {
  const { UserData, setIsSignUpVisible } = UseUserContext();
  const navigation = useNavigation();
  
const { fontsLoaded, fontStyles } = useCustomFonts();
if (!fontsLoaded) {
  return <AppLoading />;
}
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Feed",
          headerTitleStyle: {
            fontFamily: "PublicSans_600SemiBold",
            fontSize: 20,
          },
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
            >
              <HamburgerIcon />
            </Pressable>
          ),

          headerRight: () => (
            <View className="mr-3">
              {UserData ? (
                <TouchableOpacity>
                  <Image
                    source={{
                      uri: `${UserData.userdp}`,
                    }}
                    className="w-10 h-10  rounded-full border-2 border-[#f5f5f5]"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setIsSignUpVisible(true)}
                  activeOpacity={0.5}
                  className=" p-1 rounded"
                >
                  <Text className="px-[2px] text-base font-semibold text-white text-md">
                    Login / signup
                  </Text>
                </TouchableOpacity>
              )}
            </View>
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
        name="NewsDetails"
        component={NewsDetails}
        options={{
          headerTitle: "Details",
          headerStyle: {
            shadowColor: "#000",
            elevation: 25,
            backgroundColor: "#2c3e50",
          },
          headerTintColor: "white",

          headerTitleStyle: {
            fontFamily: "PublicSans_600SemiBold",
            fontSize: 20,
          },
        }}
      />

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
  const navigation = useNavigation()
  const { fontsLoaded, fontStyles } = useCustomFonts();
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Membership"
        component={Membership}
        options={{
          title: "Membership",
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: "PublicSans_600SemiBold",
            fontSize: 20,
          },

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
      <Stack.Screen
        name="Stripesub"
        component={Stripesub}
        options={{
          headerTitle: "Stripe",
          headerTitleStyle: {
            fontFamily: "PublicSans_600SemiBold",
            fontSize: 20,
          },
        }}
      />

      <Stack.Screen
        name="MyModal"
        component={Modalscreen}
        options={{
          headerTitle: "Details",
          headerTitleStyle: {
            fontFamily: "PublicSans_600SemiBold",
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
};

// contact
const ContactStackNavigator = () => {
  const navigation = useNavigation()
  const { fontsLoaded, fontStyles } = useCustomFonts();
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          title: "contact",
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: "PublicSans_600SemiBold",
            fontSize: 20,
          },
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

// about
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

// live
const LiveStackNavigator = () => {
  const navigation=useNavigation()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Live"
        component={Live}
        options={{
          title: "Live",
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

// loading
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

// Donation
const DonateStackNavigator = () => {
  const navigation = useNavigation()
  
const { fontsLoaded, fontStyles } = useCustomFonts();
if (!fontsLoaded) {
  return <AppLoading />;
}
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Donate"
        component={Donation}
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
          headerTitleStyle: {
            fontFamily: "PublicSans_600SemiBold",
            fontSize: 20,
          },
          headerStyle: {
            shadowColor: "#000",
            elevation: 25,
            backgroundColor: "#2c3e50",
          },
        }}
      />
      <Stack.Screen name="Stripe" component={Stripescreen} />
    </Stack.Navigator>
  );
};


export {
  LiveStackNavigator,
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
  DonateStackNavigator
};
