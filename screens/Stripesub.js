import React, { useState } from "react";
import WebView from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

const Stripesub = () => {
  const route = useRoute();
  const { stripe_url } = route.params;
  const success_url = "https://www.abcnetworks24.com/paymentsuccess"; // Replace with your actual success URL
  const [currentUrl, setCurrentUrl] = useState(stripe_url);

  // Function to handle successful payment
  const handleSuccessfulPayment = () => {
    // Update the current URL to the success URL
    setCurrentUrl(success_url);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: currentUrl }}
        onNavigationStateChange={(navState) => {
          // Check if navigation is to the success URL
          if (navState.url === success_url) {
            handleSuccessfulPayment();
          }
        }}
      />
    </SafeAreaView>
  );
};

export default Stripesub;
