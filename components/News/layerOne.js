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
import { useNavigation } from "@react-navigation/native";
import { useCustomFonts } from "../../context/FontContext";
import AppLoading from "expo-app-loading";


const LayerOne = ({ data, loading }) => {

  const { fontsLoaded, fontStyles } = useCustomFonts();
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
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      {loading ? (
        Array.from({ length: 1 }).map((_, index) => (
          <View className=" flex flex-row gap-2" key={index}>
            <View className="flex rounded w-28 h-24 animate-pulse bg-gray-300"></View>
            <View className="flex rounded w-28 h-24 animate-pulse bg-gray-300"></View>
            <View className="flex rounded w-28 h-24 animate-pulse bg-gray-300"></View>
          </View>
        ))
      ) : (
        <>
          <Text style={{ fontFamily: "PublicSans_600SemiBold" }}>
            Here are the world {data[0].type} News you don't want to miss..{" "}
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-2"
          >
            <View className=" flex flex-row gap-2">
              {data.slice(0, 5).map((item, index) => (
                <View className="flex rounded w-28 h-24" key={index}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={handlePress(item)}
                    className="w-full"
                  >
                    <Image
                      alt=""
                      className="object-cover w-full h-full object-top rounded"
                      source={{ uri: item.blogimage }}
                      resizeMode="cover"
                      resizeMethod="resize"
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default LayerOne;
