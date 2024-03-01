import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import DonationCard from "../components/Transaction/DonationCard";
import SubscriptionCard from "../components/Transaction/SubscriptionCard";
import OrderCard from "../components/Transaction/OrderCard";
import { useCustomFonts } from "../context/FontContext";
import AppLoading from "expo-app-loading";
import { UseUserContext } from "../context/UserContext";

const Transaction = () => {
  const {UserData}= UseUserContext()
    const [activeTab, setActiveTab] = useState("Donation");
  const { fontsLoaded, fontStyles } = useCustomFonts();
  const donationhistory = UserData.donationhistory
  const orderhistory = UserData.orderhistory
  

  const renderContent = () => {
    switch (activeTab) {
      case "Donation":
        return donationhistory.map((donate,index) => (
          <DonationCard
            data={{
              email: donate.email,
              name: donate.name,
              amount: donate.amount,
              currency: donate.currency,
              donation_Date: donate.donation_Date,
              donation_Time: donate.donation_Time,
              payment_status: donate.payment_status,
              payment_method_types: donate.payment_method_types,
              transaction_Id: donate.transaction_Id,
              
            }}
          />
        ));
      case "Subscription":
        return (
          <SubscriptionCard
            data={{
              email: "example@example.com",
              name: "John Doe",
              stripe_customer_id: "stripe_customer_id_here",
              amount: 9.99,
              currency: "USD",
              country: "USA",
              subscription_period_start: "2024-03-01",
              subscription_period_end: "2025-03-01",
              subscription_id: "subscription_id_here",
              plan_id: "plan_id_here",
              plan_type: "Monthly",
              quantity: 1,
              subscription_status: "Active",
              hosted_invoice_url: "https://example.com/invoice",
              subscription_name: "Subscription Name Here",
            }}
          />
        );
      case "Order":
        return <OrderCard data="Demo Order Data" />;
      default:
        return null;
    }
    };
    
     if (!fontsLoaded) {
        return <AppLoading />;
      }


  return (
    <View style={{ flex: 1 }}>
      <View className="flex flex-row justify-around mb-[16px] bg-white">
        <TouchableOpacity
          onPress={() => setActiveTab("Donation")}
          className={`p-4 ${
            activeTab === "Donation" ? "border-b-2 border-blue-700" : ""
          }`}
        >
          <Text
            style={{
              fontFamily:
                activeTab === "Donation"
                  ? "PublicSans_600SemiBold"
                  : "PublicSans_400Regular",
            }}
          >
            Donation
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab("Subscription")}
          className={`p-4 ${
            activeTab === "Subscription" ? "border-b-2 border-blue-700" : ""
          }`}
        >
          <Text
            style={{
              fontFamily:
                activeTab === "Subscription"
                  ? "PublicSans_600SemiBold"
                  : "PublicSans_400Regular",
            }}
          >
            Subscription
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab("Order")}
          className={`p-4 ${
            activeTab === "Order" ? "border-b-2 border-blue-700" : ""
          }`}
        >
          <Text
            style={{
              fontFamily:
                activeTab === "Order"
                  ? "PublicSans_600SemiBold"
                  : "PublicSans_400Regular",
            }}
          >
            Order
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>{renderContent()}</ScrollView>
    </View>
  );
};

export default Transaction
