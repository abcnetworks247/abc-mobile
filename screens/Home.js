import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import HomeNews from "../components/News/allNews";
import New from "../components/News/new";

// import { Link } from "expo-router";
import { useNavigation } from "expo-router";
import { useRouter } from "expo-router";
import { Link } from "@react-navigation/native";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";

export default function Home() {
  const navigation = useRouter();

  const HandleNavigate = () => {
    navigation.push("/signup");
  };
  
  return (
    <View>
      <ScrollView className="p-2" showsVerticalScrollIndicator={false}>
        <FocusAwareStatusBar
          barStyle="light-content"
          backgroundColor="#2c3e50"
        />
        <New />
        <HomeNews />
        <Link to={"/Home/signup"}>
          <TouchableOpacity>
            <Text>
         
            </Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </View>
  );
}
