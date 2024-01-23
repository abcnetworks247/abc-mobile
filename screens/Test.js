import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  DatePickerIOS,
  Pressable,
} from "react-native";
import React, { useState } from "react";

import { StyleSheet } from "react-native";
import Svg, { G, Path } from "react-native-svg";
import { CloseAccountIcon } from "../components/svgs/Icons";
import { AngleIcon } from "../components/svgs/Icons";
import { LogOutIcon } from "../components/svgs/Icons";
import { EditIcon } from "../components/svgs/Icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useIsFocused } from "@react-navigation/native";

export default function Editprofile() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const isFocused = useIsFocused();

  const handleSaveDetails = () => {
    // Implement your logic to save details
    // For now, just navigate back
    navigation.goBack();
  };

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>User name</Text>
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveDetails}>
        <Text style={styles.saveButtonText}>Save details</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  inputContainer: {
    width: "90%",
    marginBottom: 10,
    alignSelf: "center",
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
  saveButton: {
    backgroundColor: "black",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
  },
});
