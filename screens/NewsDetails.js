/**
 * Renders the details of a news item.
 * @returns {JSX.Element} The rendered news details component.
 */
import { View, Text, Image, StatusBar } from "react-native";
import { ScrollView, SafeAreaView } from "react-native";
import globalstyels from "../styles/globalstyels";
import { useRoute } from "@react-navigation/native";
import HTML from "react-native-render-html";

const NewsDetails = () => {
  const route = useRoute();
  //get data from params
  const { id, category, type, image, title, desc } = route.params;

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#111827" />
      <SafeAreaView style={globalstyels.droidSafeArea}>
        <ScrollView className="py-2">
          <View className="container p-3 space-y-8">
            <View className="space-y-2 text-center">
              <Text className="text-3xl font-bold">{title}</Text>
            </View>
            <View className="grid grid-cols-1 gap-y-8">
              <View className="flex flex-col ">
                <Image
                  alt=""
                  className="object-cover object-top w-full rounded-t h-52"
                  source={{ uri: image }}
                  resizeMode="contain"
                  resizeMethod="resize"
                />
                <View className="flex flex-col flex-1 p-1">
                  <Text className="text-xs text-blue-600 font-bold uppercase tracki hover:underline mb-2">
                    {category}
                  </Text>

                  <HTML source={{ html: desc }} />
                  <View className="flex flex-wrap justify-between pt-3 text-lg ">
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
