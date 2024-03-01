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
import { useNavigation } from "@react-navigation/native";
import { useCustomFonts } from "../../context/FontContext";


const SubscriptionCard = ({ data }) => {
  const {
    amount,
    country,
    currency,
    email,
    hosted_invoice_url,
    name,
    plan_id,
    plan_type,
    quantity,
    subscription_id,
    subscription_name,
    subscription_period_end,
    subscription_period_start,
    subscription_status,
  } = data;

  const openInvoice = () => {
    if (hosted_invoice_url) {
      Linking.openURL(hosted_invoice_url);
    }
  };

  const [visible, setVisible] = useState(false)

  const seeMoreOrLess = () => {
    setVisible(prev =>!prev)
  }
  


  return (
    <Card style={styles.card}>
     
        <View style={styles.infoContainer}>
          <Text className="text-center text-md  font-bold">${subscription_name}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}> Name:</Text>
          <Text style={styles.value}>{name}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Plan type:</Text>
          <Text style={styles.value}>{plan_type}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Amount:</Text>
          <Text
            style={styles.value}
          >{`${amount} ${currency.toUpperCase()}`}</Text>
        </View>
        {!visible && (
          <Button
            mode="contained"
            style={styles.viewMoreButton}
            onPress={() => seeMoreOrLess()}
          >
            See More
          </Button>
        )}

        {visible && (
          <>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>{email}</Text>
            </View>
            <View >
              <Text style={styles.label}> Subscription id:</Text>
              <Text style={styles.value}>{subscription_id}</Text>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.label}>Starts on:</Text>
              <Text style={styles.value}>{subscription_period_start}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Ends on:</Text>
              <Text style={styles.value}>{subscription_period_end}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Status:</Text>
              <Text style={styles.value}>{subscription_status}</Text>
            </View>
            <Button
              mode="contained"
              style={styles.viewMoreButton}
              onPress={() => seeMoreOrLess()}
            >
              See less
            </Button>
          </>
        )}
     
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
    gap:10,
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

export default SubscriptionCard;
