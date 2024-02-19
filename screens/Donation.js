import { SafeAreaView, Text } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";





const Donation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri:"https://abcstudio-nine.vercel.app/donate" }}
    />
    </SafeAreaView>
  );
};

export default Donation;
