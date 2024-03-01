import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Card, Button } from "react-native-paper";
import { useState } from "react";

const DonationCard = ({ data }) => {
  const {
    email,
    name,
    amount,
    currency,
    donation_Date,
    donation_Time,
    payment_status,
    payment_method_types,
    hosted_invoice_url,
    transaction_Id,
  } = data;

  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Transaction ID:</Text>
          <Text style={styles.value}>{transaction_Id}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Amount Donated:</Text>
          <Text style={styles.value}>${amount}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Donation Date:</Text>
          <Text style={styles.value}>{donation_Date}</Text>
        </View>
        <Button mode="contained" style={styles.viewMoreButton}>
          View More
        </Button>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 5,
    elevation: 3, // for Android
    shadowColor: "#000", // for iOS
    shadowOffset: { width: 0, height: 2 }, // for iOS
    shadowOpacity: 0.25, // for iOS
    shadowRadius: 3.84, // for iOS
    backgroundColor: "#fff",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
    color: "#555",
  },
  viewMoreButton: {
    marginTop: 15,
    backgroundColor: "#007bff", // Blue color
  },
});

export default DonationCard;
