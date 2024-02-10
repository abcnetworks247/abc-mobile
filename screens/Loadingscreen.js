import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";

const Loadingscreen = () => {
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#111827" />
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827", // Blue background color
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for spinner
    borderRadius: 10,
    padding: 20,
  },
});

export default Loadingscreen;
