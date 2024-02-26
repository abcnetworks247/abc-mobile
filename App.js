
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
import { useState, useEffect } from "react" 
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

function AppContent() {
  const { isSignUpVisible, genLoading, UserData } = UseUserContext();
  

  return (
    <>
      <NavigationContainer>
        {isSignUpVisible   ? 
          <AuthStackNavigator />
        :
          genLoading?
           <LoadingStackNavigator/>
            :
           <DrawerNavigator />
        }
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