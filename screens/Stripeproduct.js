import React from "react";
import WebView from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

const Stripeproduct = () => {
     const route = useRoute();
     const { stripe_url } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: `${stripe_url}` }}

      />
    </SafeAreaView>
  );
};

export default Stripeproduct;
