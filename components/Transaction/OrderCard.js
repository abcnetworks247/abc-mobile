// DonationCard.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrderCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Donation History</Text>
      {/* Render donation data */}
      <Text>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default OrderCard;
