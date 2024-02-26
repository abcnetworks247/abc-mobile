import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

const OfflineNoticeScreen = () => {
  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={styles.icon}
      >
        📵
      </Animatable.Text>
      <Text style={styles.text}>You are offline</Text>
      <Text style={styles.subText}>Please check your internet connection</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  icon: {
    fontSize: 60,
    marginBottom: 20,
    color: "#333",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subText: {
    fontSize: 16,
    color: "#666",
    marginTop: 10,
  },
});

export default OfflineNoticeScreen;
