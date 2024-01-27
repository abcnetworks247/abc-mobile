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

export default function NewsType() {
  const [result, setResult] = useState([]);
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
  return (
    <SafeAreaView style={globalstyels.droidSafeArea}>
      <ScrollView>
        <View className="px-4">
          {loading === true ? (
            <View className="justify-center h-[80vh] tems-center ">
              <View className="h-[40vh] bg-gray-500 rounded-t-lg ">
                <Image className="object-cover w-full h-full" source={img} />
              </View>
            </View>
          ) : (
            <ScrollView
              className="mt-4 mb-24"
              showsVerticalScrollIndicator={false}
            >
              <View className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-3">
                {result.map((item, index) => (
                  <View key={index}>
                    <TouchableOpacity
                      className="flex flex-col items-center justify-center border border-blue-200 p-4 space-y-2 bg-white rounded-lg "
                      onPress={() =>
                        navigation.navigate("TypeDetails", {
                          id: item._id,
                          name: item.name,
                        })
                      }
                    >
                      <Text className="text-lg font-semibold text-center text-gray-700 uppercase">
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
