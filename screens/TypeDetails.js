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
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import globalstyels from "../styles/globalstyels";
import { useCustomFonts } from "../context/FontContext";
import AppLoading from "expo-app-loading";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import { useWindowDimensions } from "react-native";

const TypeDetails = () => {
  const { fontsLoaded, fontStyles } = useCustomFonts();
  const {width}=useWindowDimensions()
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const baseURL = process.env.EXPO_PUBLIC_SERVER_URL;
  const route = useRoute();

   if (!fontsLoaded) {
     return <AppLoading />;
   }


  //get data from params
  const { id, name } = route.params;
  //fetch data from api
  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${baseURL}admin/blog/news/${id}`);
      const data = res.data.data;
      setPosts(data);
     
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
  if (loading === true) {
    return <Text>Loading...</Text>;
  }

   const styles = StyleSheet.create({
     container: {
       maxHeight: 40, // 2 lines x 20 (lineHeight)
       overflow: "hidden",
     },
     text: {
       lineHeight: 20, // Default line height, adjust as needed
     },
   });

  return (
    <SafeAreaView className="flex-1">
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <ScrollView className="px-2" showsVerticalScrollIndicator={false}>
          <View className={`flex flex-row flex-wrap justify-evenly mt-4 pt-2 `}>
              {posts &&
                posts.map((item, index) => (
                  <View
                    key={index}
                    className="mb-6 "
                    style={{
                      width: width > 500 ? "48%" : "100%",
                    }}
                  >
                    <Pressable onPress={handlePress(item)}>
                      <Image
                        alt=""
                        className="object-cover w-full  h-52  rounded-md"
                        source={{ uri: item.blogimage }}
                        resizeMethod="resize"
                      />

                      <View className="flex flex-col p-1">
                        <Text
                          style={{ fontFamily: "PublicSans_400Regular" }}
                          className="w-fit hover:underline text-blue-600"
                        >
                          {item.category}
                        </Text>

                        <View>
                          <Text
                            className="capitalize"
                            style={[
                              styles.text,
                              {
                                fontFamily: "PublicSans_600SemiBold",
                                fontSize: 16,
                                lineHeight: 20, // Adjust line height as needed
                              },
                            ]}
                            numberOfLines={2}
                            ellipsizeMode="tail"
                          >
                            {item.title}
                          </Text>
                        </View>
                      </View>
                    </Pressable>
                  </View>
                ))}
          </View>
       </ScrollView>
    </SafeAreaView>
  );

 
};

export default TypeDetails;
