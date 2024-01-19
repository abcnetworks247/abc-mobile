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
        <ScrollView className="my-2 space-y-8 mx-3"
            // remove scrollbar
            showsVerticalScrollIndicator={false}
        >
          {/* trending news */}
          <View className=" ">
            <Text className="py-1 text-xl font-bold h-fit uppercase">
              {name}
            </Text>
            <TouchableOpacity onPress={handlePress}>
              <View className=" ">
                {posts &&
                  posts.map((item, index) => (
                    <TouchableHighlight key={index}>
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
                            <Text className="text-xs w-fit  uppercase hover:underline text-blue-600">
                              {item.category}
                            </Text>

                            <Text className="flex-1 py-2 text-lg font-semibold ">
                              {item.title}
                            </Text>
                          </View>
                        </Pressable>
                      </View>
                    </TouchableHighlight>
                  ))}
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default TypeDetails;
