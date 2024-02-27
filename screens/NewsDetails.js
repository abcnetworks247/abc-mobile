
import React from "react";
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
import { RefreshControl } from "react-native";
const NewsDetails = () => {
   const { fontsLoaded, fontStyles } = useCustomFonts();
  const {width}= useWindowDimensions()
  const route = useRoute();
  //get data from params
  const { id, category, type, image, title, desc } = route.params;
  console.log("my description", desc)

    const tagsStyles = {
      p: {
        fontFamily: "PublicSans_400Regular",
        color: "#506172",
        fontSize: 16,
        lineHeight: 30,
        marginBottom: 15,
      },
    };

  
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    
    }, 2000);
  }, []);

 if (!fontsLoaded) {
   return <AppLoading />;
 }

  return (
    <SafeAreaView style={globalstyels.droidSafeArea}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <ScrollView
        className="py-2"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View className="container p-3 space-y-8">
          <View className="space-y-2 text-center">
            <Text
              className="capitalize"
              style={{ fontFamily: "PublicSans_600SemiBold", fontSize: 20 }}
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
                  style={{ fontFamily: "PublicSans_400Regular" }}
                  className=" text-blue-600  tracki hover:underline mb-2"
                >
                  {category}
                </Text>
                <HTML
                  source={{ html: desc }}
                  contentWidth={width}
                  tagsStyles={tagsStyles}
                />
                <View className="flex flex-wrap justify-between pt-3 ">
                  <Text style={{ fontFamily: "PublicSans_500Medium" }}>
                    June 1, 2020
                  </Text>
                  <Text style={{ fontFamily: "PublicSans_500Medium" }}>
                    2.1K views
                  </Text>
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
