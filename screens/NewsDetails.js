import { View, Text, Image, StatusBar } from "react-native";
import React, {useState, useEffect} from "react";
import { ScrollView, SafeAreaView } from "react-native";
// import Link from react native
import axios from "axios";
import globalstyels from "../styles/globalstyels";
import { useRoute } from "@react-navigation/native";



const NewsDetails = () => {
    const route = useRoute();
  //get data from params
  const { id, category, type, image, title } = route.params;
  // log id to console
  console.log(id, category, type, image);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [news, setNews] = useState([]);
  const baseURL = process.env.EXPO_PUBLIC_SERVER_URL;

  // get news by id
  const getNews = async () => {
    try {
      const response = await axios.get(`${baseURL}admin/blog/${id}`);
      const data = response.data.blogdata;
      setNews(data);
      console.log("----",data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  // load for 2 seconds and then set loading to false
  useEffect(() => {
  getNews();
  }, []);


 

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <SafeAreaView style={globalstyels.droidSafeArea}>       
        <ScrollView className="py-2">
          {
           loading && loading ? (
              <View className="flex-1 justify-center items-center">
                <Text className="text-2xl font-bold">Loading...</Text>
              </View>
            ) : (
              <View className="container p-3 space-y-8">
              <View className="space-y-2 text-center">
                <Text className="text-3xl font-bold">
                  {title}
                </Text>
              </View>
              <View className=" grid grid-cols-1 gap-y-8 ">
                <View className="flex flex-col ">
                  <Image
                    alt=""
                    className="object-cover w-full h-52 object-top rounded-t"
                    source={{ uri: image}}
                    resizeMode="contain"
                    resizeMethod="resize"
                  />
                  <View className="flex flex-col flex-1 p-1">
                    <Text
                      
                      className="text-xs tracki uppercase hover:underline text-blue-600"
                    >
                      {category}
                    </Text>
                    <Text className="flex-1 py-2 text-lg font-semibold w-full">
                      {news.longdescription}
                    </Text>
                    <View className="flex flex-wrap justify-between pt-3 text-xs ">
                      <Text>June 1, 2020</Text>
                      <Text>2.1K views</Text>
                    </View>
                  </View>
                </View>
                
              </View>
            </View>
            )
          }
         
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default NewsDetails;
