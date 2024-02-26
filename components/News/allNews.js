import React from "react";
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
import { ScrollView, SafeAreaView } from "react-native";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import globalstyels from "../../styles/globalstyels";
globalstyels;
import Api from "../../utils/Api";
import { useCustomFonts } from "../../context/FontContext";
import AppLoading from "expo-app-loading";


const HomeNews = () => {
  const { fontsLoaded, fontStyles } = useCustomFonts();
 
  const [socioCultural, setSocioCultural] = useState([]);
  const [archivesAndAnalysis, setArchivesAndAnalysis] = useState([]);
  const [breakingNews, setBreakingNews] = useState([]);
  const [sportsNews, setSportsNews] = useState([]);  const [loading, setLoading] = useState(true);
 

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const colors = ["#00876c", "#f44336", "#ff9800", "#2196f3", "#9c27b0"];

  //fetch data from news api
  const fetchPosts = async () => {
    try {
      const res = await Api.get(`admin/blog`);
      const data = res.data;
      setSocioCultural(data[3]["Socio Cultural"]);
      setArchivesAndAnalysis(data[4]["Archives & Analysis"]);
      setBreakingNews(data[5]["Breaking News"]);
      setSportsNews(data[6]["Sports"]);

      setLoading(false);
    } catch (err) {
      console.log(err);
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
    return null;
  }
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <SafeAreaView style={globalstyels.droidSafeArea}>
        <ScrollView
          className="my-2 space-y-8`"
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
        >
          {/* trending news */}

          {/* popular news */}

          <View className=" mb-5">
            <Text
              className="py-1 "
              style={{ fontFamily: "PublicSans_700Bold", fontSize: 20 }}
            >
              Popular News
            </Text>
            {!breakingNews ? (
              <Text>No news yet</Text>
            ) : (
              breakingNews.map((item, index) => (
                <TouchableOpacity activeOpacity={0.5} key={index}>
                  <View className="flex flex-col " key={index}>
                    <Pressable onPress={handlePress(item)}>
                      <Image
                        alt=""
                        className="object-cover w-full h-52 object-top rounded-t"
                        source={{ uri: item.blogimage }}
                        resizeMode="contain"
                        resizeMethod="resize"
                      />

                      <View className="flex flex-col flex-1 p-1">
                        <Text
                          style={{ fontFamily: "PublicSans_400Regular" }}
                          className="w-fit hover:underline text-blue-600"
                        >
                          {item.category}
                        </Text>
                        <Text
                          className="flex-1 py-2 capitalize  "
                          style={{ fontFamily: "PublicSans_600SemiBold" }}
                        >
                          {item.title}
                        </Text>
                        <View className="flex flex-wrap justify-between pt-3 text-xs ">
                          {/* <Text className="w-full">{item.shortdescription}</Text> */}
                          {/* <Text className="w-full">{item.longdescription}</Text> */}
                        </View>
                      </View>
                    </Pressable>
                  </View>
                </TouchableOpacity>
              ))
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeNews;
