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

NativeWindStyleSheet.setOutput({
  default: "native",
});

function AppContent() {
  const { isSignUpVisible, isSignInVisible } = UseProductProvider();

  return (
    <>
      {isSignUpVisible ? (
        <TestSignUp />
      ) : (
        isSignInVisible ?
          <Login />
          :
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
      )}
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(false);
  return (
    <ProductProvider>
      {
        loading ?
          <Text>App</Text>
          :
          <AppContent />
      }
    </ProductProvider>
  );
}