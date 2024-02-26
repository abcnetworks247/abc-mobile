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
import { useNavigation } from "@react-navigation/native";
import Typography from "../Typography";
import { useCustomFonts } from "../../context/FontContext";
import AppLoading from "expo-app-loading";


const LayerFour = ({ data, loading }) => {
  const { fontsLoaded, fontStyles } = useCustomFonts();
  const navigation = useNavigation();

  const capitalizeWithAcronym = (str) => {
    return str
      .split(" ") // Split the string into words
      .map((word) => {
        // Check if the word is an acronym (all capital letters)
        if (word === word.toUpperCase()) {
          return word; // Maintain the acronym as is
        }
        // Capitalize the word except for the acronym
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" "); // Join the words back together
  };
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
      <View className="flex flex-col ">
        {loading ? (
          Array.from({ length: 1 }).map((_, index) => (
            <View className=" flex flex-col p-1 gap-2" key={index}>
              <View className=" w-full flex flex-col gap-1">
                <View className="h-5 w-full rounded-md bg-gray-300 animate-pulse" />
              </View>
              <View className="flex rounded w-full h-52 animate-pulse bg-gray-300" />
              <View className="flex-row flex justify-between gap-2 w-fit p-1">
                <View className=" w-2/3 flex flex-col gap-1">
                  <View className="h-5 w-full rounded-md bg-gray-300 animate-pulse" />
                  <View className="h-5 w-2/3 rounded-md bg-gray-300 animate-pulse" />
                </View>
                <View className="w-24 h-20 rounded animate-pulse bg-gray-300" />
              </View>
            </View>
          ))
        ) : data.length === 0 ? (
          <Text></Text>
        ) : (
          <Pressable>
            <View className="flex flex-col flex-1 p-1">
              <View className="border-b-gray-300 border-b mt-3 mb-3" />
              <Text
                style={{ fontFamily: "PublicSans_600SemiBold" }}
                className="flex-1 py-2 capitalize"
              >
                {data[0].title}
              </Text>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={handlePress(data[0])}
                className="flex-row flex justify-between gap-2 w-fit p-1 "
              >
                <Image
                  alt=""
                  className="object-cover w-full h-52 object-top rounded-t border"
                  source={{ uri: data[0].blogimage }}
                  resizeMode="cover"
                  resizeMethod="resize"
                />
              </TouchableOpacity>
            </View>
            <View className="border-b-gray-300 border-b mt-2 mb-2" />
            {data &&
              data.slice(1, 6).map((item) => (
                <View
                  className="flex flex-col flex-1  w-full  rounded gap-y-[0px]"
                  key={item._id}
                >
                  <View className="">
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={handlePress(item)}
                      className="flex-row flex justify-between gap-2 w-fit p-1 "
                    >
                      <Text
                        className="w-2/3 capitalize"
                        style={{
                          fontFamily: "PublicSans_600SemiBold",
                          fontSize: 16,
                        }}
                      >
                        {item.title}
                      </Text>
                      <Image
                        alt=""
                        className="object-cover w-24 h-20 object-top rounded-t border"
                        source={{ uri: item.blogimage }}
                        resizeMode="cover"
                        resizeMethod="resize"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default LayerFour;
