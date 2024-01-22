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
import LayerOne from "./layerOne";
import LayerTwo from "./layerTwo";
import LayerThree from "./layerThree";
import LayerFour from "./layerFour";
const New = () => {
  const [posts, setPosts] = useState([]);
  const [highlight, setHighlight] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topNews, setTopNews] = useState([]);
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const baseURL = process.env.EXPO_PUBLIC_SERVER_URL;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const colors = ["#00876c", "#f44336", "#ff9800", "#2196f3", "#9c27b0"];

  //fetch data from api
  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${baseURL}admin/blog`);
      setPosts(res.data);
      setHighlight(res.data.highlight);
      // console.log(res.data.highlight);
      setTrending(res.data.trending);
      // console.log(res.data.trending);
      setTopNews(res.data.top);
      // console.log(res.data.topNews);
      setPopular(res.data.popular);
      // console.log(res.data.popular);
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
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <SafeAreaView style={globalstyels.droidSafeArea}>
        <ScrollView
          className="my-2 space-y-8`"
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              enabled={true}
              colors={colors}
              size={"large"}
            />
          }
          showsVerticalScrollIndicator={false}
        >
          {/* trending news */}
          <View className="w-full">
            <LayerOne/>
            <LayerTwo  data={highlight}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default New;
