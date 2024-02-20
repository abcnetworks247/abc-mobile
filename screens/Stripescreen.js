import React from 'react'
import WebView from 'react-native-webview'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'

const Stripescreen = () => {
    const route = useRoute()
  const { stripe_url } = route.params;

 const injectedJavaScript = `document.querySelector('.topnav').style.display = 'none'`;
  console.log("strip in web view", stripe_url)
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
          source={{ uri: `${stripe_url}` }}
          javaScriptEnabled={true}
          injectedJavaScript={injectedJavaScript}
        />
      </SafeAreaView>
    );
}

export default Stripescreen