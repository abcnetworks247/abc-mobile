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

const SubscriptionCard = ({ data }) => {
  const {
    email,
    name,
    stripe_customer_id,
    amount,
    currency,
    country,
    subscription_period_start,
    subscription_period_end,
    subscription_id,
    plan_id,
    plan_type,
    quantity,
    subscription_status,
    hosted_invoice_url,
    subscription_name,
  } = data;

  const openInvoice = () => {
    if (hosted_invoice_url) {
      Linking.openURL(hosted_invoice_url);
    }
  };

  return (
    <Pressable style={styles.container}>
      <Text style={styles.title}>Subscription Information</Text>
      <View style={styles.row}>
        <Ionicons name="person-circle-outline" size={24} color="black" />
        <Text style={styles.label}>{name}</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="mail-outline" size={24} color="black" />
        <Text style={styles.label}>{email}</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="cash-outline" size={24} color="black" />
        <Text style={styles.label}>
          {amount} {currency}
        </Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="calendar-outline" size={24} color="black" />
        <Text style={styles.label}>
          {subscription_period_start} - {subscription_period_end}
        </Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="location-outline" size={24} color="black" />
        <Text style={styles.label}>{country}</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="cash-outline" size={24} color="black" />
        <Text style={styles.label}>Subscription ID: {subscription_id}</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="cash-outline" size={24} color="black" />
        <Text style={styles.label}>Plan ID: {plan_id}</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="cash-outline" size={24} color="black" />
        <Text style={styles.label}>Plan Type: {plan_type}</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="cash-outline" size={24} color="black" />
        <Text style={styles.label}>Quantity: {quantity}</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="flag-outline" size={24} color="black" />
        <Text style={styles.label}>Status: {subscription_status}</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="receipt-outline" size={24} color="black" />
        <Text style={styles.label}>Subscription Name: {subscription_name}</Text>
      </View>
      {hosted_invoice_url && (
        <View style={styles.row}>
          <TouchableOpacity onPress={openInvoice}>
            <Text style={styles.invoiceLink}>View Invoice</Text>
          </TouchableOpacity>
        </View>
      )}
    </Pressable>
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    marginLeft: 8,
  },
  invoiceLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default SubscriptionCard;
