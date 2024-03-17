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
  const subscriptionhistory = UserData.subscriptionhistory


  // const trac = [
  //   {
  //     __v: 0,
  //     _id: "65e1b4a0ea690af41ccbfcc8",
  //     amount: 10,
  //     country: "NG",
  //     currency: "usd",
  //     email: "mijanigoni@gmail.com",
  //     hosted_invoice_url:
  //       "https://invoice.stripe.com/i/acct_1OSkAALEvvTkpvAd/test_YWNjdF8xT1NrQUFMRXZ2VGtwdkFkLF9QZW5OMkJsTDVKaHJkU2VwSW13cVVsUjlQTDZBUkRPLDk5ODMxNDU20200xye1uNnk?s=ap",
  //     name: "Mijan",
  //     plan_id: "price_1OpTl5LEvvTkpvAdLjUluyjp",
  //     plan_type: "month",
  //     quantity: 1,
  //     subscription_id: "sub_1OpTmTLEvvTkpvAdN87lCym2",
  //     subscription_name: "1 × General - Copper Donor (at $10.00 / month)",
  //     subscription_period_end: "2024-04-01T10:57:33.000Z",
  //     subscription_period_start: "2024-03-01T10:57:33.000Z",
  //     subscription_status: "active",
  //   },
  // ];
  

  const renderContent = () => {
    switch (activeTab) {
      case "Donation":
        return donationhistory.map((donate,index) => (
          <DonationCard
            key={index}
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
        return subscriptionhistory.map((subscription, index) => (
          <SubscriptionCard
            key={index}
            data={{
              amount: subscription.amount,
              country: subscription.country,
              currency: subscription.currency,
              email: subscription.email,
              hosted_invoice_url: subscription.hosted_invoice_url,
              name: subscription.name,
              plan_id: subscription.plan_id,
              plan_type: subscription.plan_type,
              quantity: subscription.quantity,
              subscription_id: subscription.subscription_id,
              subscription_name: subscription.subscription_name,
              subscription_period_end: subscription.subscription_period_end,
              subscription_period_start: subscription.subscription_period_start,
              subscription_status: subscription.subscription_status,
            }}
          />
        ));
      case "Purchase":
        return <OrderCard orderhistory={orderhistory}/>;
      default:
        return null;
    }
    };
    
     if (!fontsLoaded) {
        return <AppLoading />;
      }


  return (
    <View style={{ flex: 1 }}>
      <View className="flex flex-row justify-around mb-[8px] bg-white">
        <TouchableOpacity
          onPress={() => setActiveTab("Donation")}
          className={`p-4 ${
            activeTab === "Donation" ? "border-b-2 border-[#00308F]" : ""
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
            activeTab === "Subscription" ? "border-b-2 border-[#00308F]" : ""
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
          onPress={() => setActiveTab("Purchase")}
          className={`p-4 ${
            activeTab === "Order" ? "border-b-2 border-[#00308F]" : ""
          }`}
        >
          <Text
            style={{
              fontFamily:
                activeTab === "Purchase"
                  ? "PublicSans_600SemiBold"
                  : "PublicSans_400Regular",
            }}
          >
            Purchase
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>{renderContent()}</ScrollView>
    </View>
  );
};

export default Transaction
