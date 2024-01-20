import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import HomeNews from "../components/News/allNews";


export default function Home() {
  return (
    <View>
      <ScrollView className="p-2">
        <HomeNews />
      </ScrollView>
    </View>
  );
}
