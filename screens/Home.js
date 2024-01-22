import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import HomeNews from "../components/News/allNews";
import { useNavigation } from "expo-router";
import { Link } from "expo-router";


export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView className="p-2">
        <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
          <Text>Signup</Text>
          </TouchableOpacity> 
        <HomeNews />
      </ScrollView>
    </View>
  );
}
