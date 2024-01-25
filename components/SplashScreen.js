// CustomSplashScreen.js

import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomSplashScreen = () => {
    const navigation = useNavigation();
  useEffect(() => {
    // Add any necessary initialization logic here

    // Navigate to the main screen after a certain duration
    setTimeout(() => {
      navigation.replace('Main'); // Replace 'Main' with your main app screen name
    }, 2000); // Adjust the duration as needed
  }, []);

  return (
    <View style={styles.container}>
      {/* Your custom splash screen content */}
      <Text>Custom Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomSplashScreen;
