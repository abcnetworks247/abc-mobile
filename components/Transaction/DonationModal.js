import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import Svg, { Rect, Path, Defs, ClipPath } from "react-native-svg";
import { Picker } from "@react-native-picker/picker";
import CheckBox from "@react-native-community/checkbox";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loadStripe } from "@stripe/stripe-js";
import { Modal } from "react-native";
import { PanResponder } from "react-native";
import { Animated } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
const DonationModal = () => {
  const navigation = useNavigation();
  const route = useRoute();
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
} = route.params;
 

 
  const pan = React.useRef(new Animated.ValueXY()).current;
  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dy: pan.y,
          },
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) {
          // If dragged down more than 50, close the modal
          closeModal();
        } else {
          // Otherwise, reset the position
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;
 
  const closeModal = () => {
    navigation.goBack(); // Close the modal
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true} // Since it's a modal, it's always visible when navigated to
      onRequestClose={closeModal}
    >
     
        <Animated.View
          style={[styles.modalContainer, { transform: [{ translateY: pan.y }] }]}
          {...panResponder.panHandlers}
        >
          <View style={styles.modalContent}>
            <ScrollView>
              <Text style={styles.heading}>Donation Details</Text>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{email}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.value}>{name}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Amount Donated:</Text>
                <Text style={styles.value}>${amount}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Currency:</Text>
                <Text style={styles.value}>{currency}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Donation Date:</Text>
                <Text style={styles.value}>{donation_Date}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Donation Time:</Text>
                <Text style={styles.value}>{donation_Time}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Payment Status:</Text>
                <Text style={styles.value}>{payment_status}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Payment Method Types:</Text>
                <Text style={styles.value}>{payment_method_types}</Text>
              </View>
              <View>
                <Text style={styles.label}>Transaction ID:</Text>
                <Text style={styles.value}>{transaction_Id}</Text>
              </View>
              {/* <View style={styles.detailRow}>
                <Text style={styles.label}>Hosted Invoice URL:</Text>
                <Pressable
                  onPress={() => Linking.openURL(hosted_invoice_url)}
                  style={styles.link}
                >
                  <Text style={styles.value}>{hosted_invoice_url}</Text>
                </Pressable>
              </View> */}
            </ScrollView>
            <Pressable onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>

          {/* Close button */}
          {/* <Pressable onPress={closeModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable> */}
        </Animated.View>
     
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: 400,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    flex: 1,
    marginLeft: 10,
  },
  link: {
    flex: 1,
    alignItems: "flex-end",
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});


export default DonationModal;
