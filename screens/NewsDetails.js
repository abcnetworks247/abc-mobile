/**
 * Renders the details of a news item.
 * @returns {JSX.Element} The rendered news details component.
 */
import { View, Text, Image, StatusBar } from "react-native";
import { ScrollView, SafeAreaView } from "react-native";
import globalstyels from "../styles/globalstyels";
import { useRoute } from "@react-navigation/native";

const NewsDetails = () => {
  const route = useRoute();
  //get data from params
  const { id, category, type, image, title, desc } = route.params;

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <SafeAreaView style={globalstyels.droidSafeArea}>
        <ScrollView className="py-2">
          <View className="container p-3 space-y-8">
            <View className="space-y-2 text-center">
              <Text className="text-3xl font-bold">{title}</Text>
            </View>
            <View className=" grid grid-cols-1 gap-y-8 ">
              <View className="flex flex-col ">
                <Image
                  alt=""
                  className="object-cover w-full h-52 object-top rounded-t"
                  source={{ uri: image }}
                  resizeMode="contain"
                  resizeMethod="resize"
                />
                <View className="flex flex-col flex-1 p-1">
                  <Text className="text-xs tracki uppercase hover:underline text-blue-600">
                    {category}
                  </Text>
                  <Text className="flex-1 py-2 text-lg font-semibold w-full">
                    {desc}
                  </Text>
                  <View className="flex flex-wrap justify-between pt-3 text-xs ">
                    <Text>June 1, 2020</Text>
                    <Text>2.1K views</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default NewsDetails;
