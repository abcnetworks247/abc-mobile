import React from "react";
import WebView from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";

const Paymentsuccess = () => {
    const injectedJavaScript =
    ` document.getElementById('footer').style.display = 'none';
     document.getElementById('nav1').style.display = 'none';
     document.getElementById('mainnav').style.display = 'none';
     `;
    
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://www.abcnetworks24.com/donate" }}
        javaScriptEnabled={true}
        injectedJavaScript={injectedJavaScript}
       
      />
    </SafeAreaView>
  );
};

export default Paymentsuccess;
