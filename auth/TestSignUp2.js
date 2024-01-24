import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Logo from "../assets/AbcstudioNo.png";
import { Pressable } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { UseProductProvider } from "../context/ProductProvider";
import { useNavigation } from "@react-navigation/native";

const TestSignUp = () => {
  const navigation= useNavigation()
  const { handleSubmit, setIsSignInVisible, setIsSignUpVisible } =
    UseProductProvider();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        backgroundColor: "#F2F2F2",
      }}
    >
      <View style={{ marginBottom: 6, width: "100%" }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            source={Logo}
            style={{ width: 40, height: 20 }}
            resizeMode="cover"
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#1E40AF",
              marginBottom: 2,
              textAlign: "center",
            }}
          >
            Register
          </Text>
          <Text style={{ fontSize: 14, color: "#718096" }}>
            Hey, enter your details to create your account
          </Text>
        </View>

        <View style={{ marginTop: 2 }}>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              placeholder="Enter your name"
              style={{
                flex: 1,
                paddingHorizontal: 5,
                paddingVertical: 3,
                borderRadius: 5,
                marginVertical: 3,
                backgroundColor: "#EDF2F7",
                borderWidth: 1,
                borderColor: "#E2E8F0",
                fontSize: 14,
              }}
            />
            {/* <Text style={{ color: 'red', marginVertical: 1, fontSize: 13 }}>Name Error</Text> */}
          </View>

          <View>
            <TextInput
              placeholder="Enter your email"
              style={{
                flex: 1,
                paddingHorizontal: 5,
                paddingVertical: 3,
                borderRadius: 5,
                marginVertical: 3,
                backgroundColor: "#EDF2F7",
                borderWidth: 1,
                borderColor: "#E2E8F0",
                fontSize: 14,
              }}
              keyboardType="email-address"
            />
            <Text style={{ color: "red", marginVertical: 1, fontSize: 13 }}>
              Email Error
            </Text>
          </View>

          <View>
            <TextInput
              placeholder="Enter password"
              secureTextEntry={true}
              style={{
                flex: 1,
                paddingHorizontal: 5,
                paddingVertical: 3,
                borderRadius: 5,
                marginVertical: 3,
                backgroundColor: "#EDF2F7",
                borderWidth: 1,
                borderColor: "#E2E8F0",
                fontSize: 14,
              }}
            />
            <Text style={{ color: "red", marginVertical: 1, fontSize: 13 }}>
              Password Error
            </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            title=""
            style={{
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              backgroundColor: "#1E40AF",
              color: "#fff",
              padding: 10,
              borderRadius: 5,
              marginVertical: 5,
            }}
            onPress={() =>navigation.navigate("Login")}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginRight: 5 }}
              >
                <Path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <Circle cx="8.5" cy="7" r="4" />
                <Path d="M20 8v6M23 11h-6" />
              </Svg>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                Sign Up
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          <Text style={{ color: "#718096", textAlign: "center" }}>
            Already have an account?{" "}
          </Text>
          <Pressable
            style={{ color: "#1E40AF" }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ color: "#1E40AF", fontWeight: "bold" }}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default TestSignUp;
