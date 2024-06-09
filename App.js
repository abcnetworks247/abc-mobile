
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignUp from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import ProductProvider from "./context/ProductProvider";
import DrawerNavigator from "./navigation/DrawerNavigator";
 import { NativeWindStyleSheet } from "nativewind";
import { UseProductProvider } from "./context/ProductProvider";
import TestSignUp from "./auth/TestSignUp";
import Login from "./auth/Login";
import React, { useCallback, useEffect, useState } from "react";

import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import Recovery from "./auth/Recovery"

import Updatepassword from "./auth/Updatepassword";
import { AuthStackNavigator } from "./navigation/StackNavigator";
import { UserContextProvider } from "./context/UserContext";
import { UseUserContext } from "./context/UserContext";
import Toast from "react-native-toast-message";
import { LoadingStackNavigator } from "./navigation/StackNavigator";
import FontProvider from "./context/FontContext";
import NetInfo from "@react-native-community/netinfo";
import OfflineNoticeScreen from "./screens/OfflineNotice";

NativeWindStyleSheet.setOutput({
  default: "native",
});


SplashScreen.preventAutoHideAsync();
function AppContent() {
  const [appIsReady, setAppIsReady] = useState(false);
  const { isSignUpVisible, genLoading, UserData } = UseUserContext();
  


  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        // Load any resources or data that we need prior to rendering the app
        await Font.loadAsync({
          // Load your custom fonts here
        });

        // Artificially delay for two seconds to simulate a slow loading experience.
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Everything is loaded, let's hide the splash screen
        setAppIsReady(true);
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This will hide the splash screen
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <View
        
     
        onLayout={onLayoutRootView}
      >
    
      </View>
      <NavigationContainer>
        {isSignUpVisible ? (
          <AuthStackNavigator />
        ) : genLoading ? (
          <LoadingStackNavigator />
        ) : (
          <DrawerNavigator />
        )}
      </NavigationContainer>
    </>
  );
}

export default function App() {
  const [isConnected, setIsConnected] = useState(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    // Check initial status
    NetInfo.fetch().then((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  
  return (
    <UserContextProvider>
      <ProductProvider>
        <FontProvider>
          {isConnected ? (
            <AppContent />
          ) : (
           <OfflineNoticeScreen/>
          )}
        </FontProvider>
      </ProductProvider>
    </UserContextProvider>
  );
}