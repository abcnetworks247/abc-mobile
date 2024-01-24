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


const LayerFour = ({ data, loading }) => {
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

  return (
    <View>
      <View className="flex flex-col ">
        {
          loading ? (
            Array.from({ length: 1 }).map((_) => (
              <View className=" flex flex-col p-1 gap-2">
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
          ) : (
            <Pressable>
              <View className="flex flex-col flex-1 p-1">
                <View className="border-b-gray-300 border-b mt-3 mb-3" />
                <Text className="flex-1 py-2 text-xl font-bold ">
                  {data[0].title}
                </Text>
                <TouchableOpacity activeOpacity={0.5} onPress={handlePress(data[0])} className="flex-row flex justify-between gap-2 w-fit p-1 ">
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
              {
                data.slice(1, 6).map((item) => (
                  <View className="flex flex-col flex-1  w-full  rounded gap-y-[0px]" key={item._id}>
                    <View className="">
                      <TouchableOpacity activeOpacity={0.5} onPress={handlePress(item)} className="flex-row flex justify-between gap-2 w-fit p-1 ">
                        <Text className="text-base font-bold text-gray-700 w-2/3">
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
                ))
              }

            </Pressable>
          )
        }

      </View>
    </View>
  );
};

export default LayerFour;