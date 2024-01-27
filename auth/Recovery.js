import { SafeAreaView, Text } from 'react-native'
import React from 'react';
import {WebView} from 'react-native-webview';

const Recovery = () => {
  return (
    <SafeAreaView>
    <WebView originWhitelist={["https://abcstudio-nine.vercel.app/recovery"]} source={{uri:"https://abcstudio-nine.vercel.app/recovery"}}/>
      
    </SafeAreaView>
  )
}

export default Recovery