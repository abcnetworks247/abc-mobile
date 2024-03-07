import React, { useState, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
  ToastAndroid,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import { UseUserContext } from "../context/UserContext";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Closeaccount = () => {
  const inputRefs = {
    oldPassword: useRef(null),
    newPassword: useRef(null),
    confirmNewPassword: useRef(null),
  };

  const navigation = useNavigation();
  const { getUserData } = UseUserContext();

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [passwordVisible, setPasswordVisible] = useState({
    oldPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });

  const [loading, setLoading] = useState(false);

  const [errorMessages, setErrorMessages] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });

    // Reset error message when user starts typing
    setErrorMessages({ ...errorMessages, [name]: "" });
  };

  const togglePasswordVisibility = (fieldName) => {
    setPasswordVisible((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  const passwordSuccess = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      25,
      50
    );
  };

  const handleSubmit = async () => {
    setLoading(true);

    // Check if passwords match
    if (formData.newPassword !== formData.confirmNewPassword) {
      setErrorMessages({
        ...errorMessages,
        confirmNewPassword: "Passwords do not match",
      });
      setLoading(false);
      return;
    }

    // Validate password using regex
    if (!passwordRegex.test(formData.newPassword)) {
      setErrorMessages({
        ...errorMessages,
        newPassword:
          "Password must be 6-20 characters and include at least one numeric digit, one uppercase, and one lowercase letter",
      });
      setLoading(false);
      return;
    }

    try {
      const authTokenString = await AsyncStorage.getItem("authToken");
      const authToken = JSON.parse(authTokenString);

      const response = await fetch(
        `${process.env.EXPO_PUBLIC_SERVER_URL}client/auth/account/activeUserUpdatePassword`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const responseData = await response.json();

      if (response.status === 500) {
        Alert.alert(responseData.error);
      }

      if (response.status == 200) {
        passwordSuccess(responseData.message);
        navigation.goBack();
      }
    } catch (error) {
      console.error("Error updating password:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <ScrollView>
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Old password</Text>
            <View
              style={[
                styles.inputField,
                errorMessages.oldPassword && styles.errorInput,
              ]}
            >
              <TextInput
                ref={inputRefs.oldPassword}
                name="oldPassword"
                secureTextEntry={!passwordVisible.oldPassword}
                placeholder="Type your password"
                value={formData.oldPassword}
                style={styles.inputText}
                onChangeText={(text) => handleInputChange("oldPassword", text)}
              />
              <TouchableOpacity
                onPress={() => togglePasswordVisibility("oldPassword")}
                style={styles.togglePasswordButton}
              >
                {passwordVisible.oldPassword ? (
                  <Ionicons name="eye-off-sharp" size={23} />
                ) : (
                  <Ionicons name="eye-sharp" size={23} />
                )}
              </TouchableOpacity>
            </View>
            {errorMessages.oldPassword ? (
              <Text style={styles.errorMessage}>
                {errorMessages.oldPassword}
              </Text>
            ) : null}
          </View>

          {/* Similar setup for New Password and Confirm Password fields */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>New Password</Text>
            <View
              style={[
                styles.inputField,
                errorMessages.newPassword && styles.errorInput,
              ]}
            >
              <TextInput
                ref={inputRefs.newPassword}
                name="newPassword"
                secureTextEntry={!passwordVisible.newPassword}
                placeholder="Type your password"
                value={formData.newPassword}
                style={styles.inputText}
                onChangeText={(text) => handleInputChange("newPassword", text)}
              />
              <TouchableOpacity
                onPress={() => togglePasswordVisibility("newPassword")}
                style={styles.togglePasswordButton}
              >
                {passwordVisible.newPassword ? (
                  <Ionicons name="eye-off-sharp" size={23} />
                ) : (
                  <Ionicons name="eye-sharp" size={23} />
                )}
              </TouchableOpacity>
            </View>
            {errorMessages.newPassword ? (
              <Text style={styles.errorMessage}>
                {errorMessages.newPassword}
              </Text>
            ) : null}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <View
              style={[
                styles.inputField,
                errorMessages.confirmNewPassword && styles.errorInput,
              ]}
            >
              <TextInput
                ref={inputRefs.confirmNewPassword}
                name="confirmNewPassword"
                secureTextEntry={!passwordVisible.confirmNewPassword}
                placeholder="Type your password"
                value={formData.confirmNewPassword}
                style={styles.inputText}
                onChangeText={(text) =>
                  handleInputChange("confirmNewPassword", text)
                }
              />
              <TouchableOpacity
                onPress={() => togglePasswordVisibility("confirmNewPassword")}
                style={styles.togglePasswordButton}
              >
                {passwordVisible.confirmNewPassword ? (
                  <Ionicons name="eye-off-sharp" size={23} />
                ) : (
                  <Ionicons name="eye-sharp" size={23} />
                )}
              </TouchableOpacity>
            </View>
            {errorMessages.confirmNewPassword ? (
              <Text style={styles.errorMessage}>
                {errorMessages.confirmNewPassword}
              </Text>
            ) : null}
          </View>

          <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.submitButtonText}>Change password</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inputText: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  togglePasswordButton: {
    padding: 10,
  },
  errorMessage: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: "black",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorInput: {
    borderColor: "red",
  },
});

export default Closeaccount;
