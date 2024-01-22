import {
  View,
  Text,
  Image,
  StatusBar,
  RefreshControl,
  TouchableHighlight,
  TouchableOpacity,
  Linking,
  Pressable,
} from "react-native";
import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
// import {  TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import globalstyels from "../../styles/globalstyels";

import { useFocusEffect } from "@react-navigation/native";

const LayerOne = () => {
  const navigation = useNavigation();
  const handlePress = (item) => () => {
    navigation.navigate("NewsDetails", {
      id: item._id,
      title: item.title,
      category: item.category,
      image: item.blogimage,
      type: item.type,
      desc: item.longdescription,
    });
  };

  return (
    <View>
      <Text>Layer One</Text>
      <View className="flex-row w-full gap-2">
        <View className="flex-1 border rounded ">
          <Text className="text-xl font-bold text-gray-700 mb-2">
            Trending
          </Text>
        </View>
        <View className="flex-1 border rounded">
          <Text className="text-right text-gray-700 mb-2">View All</Text>
        </View>
        <View className="flex-1 border rounded">
          <Text className="text-right text-gray-700 mb-2">View All</Text>
        </View>
        <View className="flex-1 border rounded">
          <Text className="text-right text-gray-700 mb-2">View All</Text>
        </View>
      </View>
    </View>
  );
};

export default LayerOne;
