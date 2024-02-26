/**
 * Renders the details of a news item.
 * @returns {JSX.Element} The rendered news details component.
 */
import { View, Text, Image, StatusBar } from "react-native";
import { ScrollView, SafeAreaView } from "react-native";
import globalstyels from "../styles/globalstyels";
import { useRoute } from "@react-navigation/native";
import HTML from "react-native-render-html";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import Typography from "../components/Typography";
import { useWindowDimensions } from "react-native";
import { useCustomFonts } from "../context/FontContext";
import AppLoading from "expo-app-loading";

const NewsDetails = () => {
   const { fontsLoaded, fontStyles } = useCustomFonts();
  const {width}= useWindowDimensions()
  const route = useRoute();
  //get data from params
  const { id, category, type, image, title, desc } = route.params;

 if (!fontsLoaded) {
   return <AppLoading />;
 }

  return (
    <SafeAreaView style={globalstyels.droidSafeArea}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <ScrollView className="py-2">
        <View className="container p-3 space-y-8">
          <View className="space-y-2 text-center">
            <Text
              style={{ fontFamily: "PublicSans_600SemiBold", fontSize: 16 }}
            >
              {title}
            </Text>
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
                <Text
                  style={{ fontFamily:"PublicSans_400Regular" }}
                  className=" text-blue-600  tracki hover:underline mb-2"
                >
                  {category}
                </Text>

                <HTML source={{ html: desc }} contentWidth={width} />
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
  );
};

export default NewsDetails;
