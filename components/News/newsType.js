import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import img from "../../assets/events-search.jpg";

import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import globalstyels from "../../styles/globalstyels";
import { useCustomFonts } from "../../context/FontContext";
import AppLoading from "expo-app-loading";
import { StyleSheet } from "react-native";

export default function NewsType() {
    const { fontsLoaded, fontStyles } = useCustomFonts();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  const baseUrl = process.env.EXPO_PUBLIC_SERVER_URL;
  const navigation = useNavigation();

  //fetch data from api
  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${baseUrl}admin/category/news/type`);
      setResult(res.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      padding: 16,
    },
    item: {
      width: "48%",
      marginBottom: 16,
      padding: 8,
      backgroundColor: "#fff",
      borderRadius: 8,
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      elevation: 2,
    },
    skeleton: {
      backgroundColor: "#f0f0f0",
      height: 12,
      marginBottom: 8,
      borderRadius: 4,
    },
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={globalstyels.droidSafeArea}>
      <ScrollView>
        <View className="px-4">
          {loading ? (
            <View style={styles.container}>
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <View key={index} style={styles.item}>
                  <View style={styles.skeleton}></View>
                  <View style={[styles.skeleton, { width: "80%" }]}></View>
                  <View style={[styles.skeleton, { width: "60%" }]}></View>
                </View>
              ))}
            </View>
          ) : !result ? (
            <Text>Empty</Text>
          ) : (
            <ScrollView
              className="mt-4 mb-24"
              showsVerticalScrollIndicator={false}
            >
              <View className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-3">
                {result.map((item, index) => (
                  <View key={index}>
                    <TouchableOpacity
                      className="flex flex-row items-center border border-blue-200 p-4 space-y-2 bg-white rounded-lg "
                      onPress={() =>
                        navigation.navigate("TypeDetails", {
                          id: item._id,
                          name: item.name,
                        })
                      }
                    >
                      <Text
                        className="text-gray-700 "
                        style={{
                          fontFamily: "PublicSans_600SemiBold",
                          fontSize: 16,
                        }}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </ScrollView>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
