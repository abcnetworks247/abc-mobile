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
  Button,
} from "react-native";
import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
// import {  TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import globalstyels from "../styles/globalstyels";

const TypeDetails = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const baseURL = process.env.EXPO_PUBLIC_SERVER_URL;
  const route = useRoute();

  //get data from params
  const { id, name } = route.params;
  //fetch data from api
  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${baseURL}admin/blog/news/${id}`);
      const data = res.data.data;
      setPosts(data);
      // console.log(res.data);
      console.log(data);

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const navigation = useNavigation();

  if (loading === true) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <SafeAreaView style={globalstyels.droidSafeArea}>
        <ScrollView className="my-2 space-y-8 mx-3">
          {/* trending news */}
          <View className=" ">
            <Text className="py-1 text-xl font-bold h-fit uppercase">{name}</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("NewsDetails", {
                  id: "60e8f5d3d4b5e40015a5d5d6",
                });
              }}
            >
              <View className="flex flex-col items-center justify-center border border-blue-200 p-4 space-y-2 bg-white rounded-lg ">
                <Text>{name}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="border-b-gray-300 border-b mt-5 mb-5" />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default TypeDetails;
