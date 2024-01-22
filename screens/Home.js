import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import HomeNews from "../components/News/allNews";
import New from "../components/News/new";

export default function Home() {
  return (
    <View>
      <ScrollView className="p-2" showsVerticalScrollIndicator={false}>
        <New />
        <HomeNews />
      </ScrollView>
    </View>
  );
}
