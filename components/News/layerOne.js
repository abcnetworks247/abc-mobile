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


const LayerOne = ({ data, loading }) => {
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
    <View >
      {
        loading ? (
          
          Array.from({ length: 1 }).map((_, index) => (
            <View className=" flex flex-row gap-2" key={index}>

            <View className="flex rounded w-28 h-24 animate-pulse bg-gray-300">
            </View>
            <View className="flex rounded w-28 h-24 animate-pulse bg-gray-300">
            </View>
            <View className="flex rounded w-28 h-24 animate-pulse bg-gray-300">
            </View>
            </View>
          ))
        ) : (
         !data ? <Text>No data available</Text>:
          <>
            <Text className="text-xl font-bold">Here are the world {data[0].type} News you don't want to miss.. </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2">
              <View className=" flex flex-row gap-2">
             
                {
                   data.slice(0, 5).map((item) => (
                    <View className="flex rounded w-28 h-24">
                      <TouchableOpacity activeOpacity={0.5} onPress={handlePress(item)} className="w-full">

                        <Image
                          alt=""
                          className="object-cover w-full h-full object-top rounded"
                          source={{ uri: item.blogimage }}
                          resizeMode="cover"
                          resizeMethod="resize"
                        />
                      </TouchableOpacity>
                    </View>
                  ))
                }
              </View>
            </ScrollView>
          </>
        )
      }
    </View>
  );
};

export default LayerOne;
