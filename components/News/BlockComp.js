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
  import { useNavigation } from "@react-navigation/native";
  import globalstyels from "../../styles/globalstyels";
  globalstyels;
import Api from "../../utils/Api";
  import { useCustomFonts } from "../../context/FontContext";
  import AppLoading from "expo-app-loading";

const BlockComp = ({ data, loading, titleHeader }) => {
  const { fontsLoaded, fontStyles } = useCustomFonts();
  // const [socioCultural, setSocioCultural] = useState([]);
  // const [archivesAndAnalysis, setArchivesAndAnalysis] = useState([]);
  // const [sportsNews, setSportsNews] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const colors = ["#00876c", "#f44336", "#ff9800", "#2196f3", "#9c27b0"];


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
    return null;
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
   
    
      
    <View
          className="my-2 space-y-8 `"
        
        >
          {/* trending news */}

          {/* popular news */}

          <View className=" mb-5">
        <Text className="py-1 text-xl font-bold mb-3 ">{titleHeader}</Text>
        {
          data && data.map((item, index) => (
            <TouchableOpacity activeOpacity={0.5} key={index}>
              <View className="flex flex-col  " key={index}>
                <Pressable onPress={handlePress(item)}>
                  <Image
                    alt=""
                    className="object-cover w-full h-52 rounded-md"
                    source={{ uri: item.blogimage }}
                    resizeMethod="resize"
                  />

                  <View className="flex flex-col p-1">
                    <Text
                      className="w-fit hover:underline text-blue-600"
                      style={{ fontFamily: "PublicSans_400Regular" }}
                    >
                      {item.category}
                    </Text>
                    <Text
                      className="py-2 capitalize"
                      style={{
                        fontFamily: "PublicSans_600SemiBold",
                        fontSize: 16,
                      }}
                    >
                      {item.title}
                    </Text>
                    <View className="flex flex-wrap justify-between pt-3 text-xs ">
                      {/* <Text className="w-full">{item.shortdescription}</Text> */}
                      {/* <Text className="w-full">{item.longdescription}</Text> */}
                    </View>
                  </View>
                </Pressable>
              </View>
            </TouchableOpacity>
          ))
        }
          </View>
        </View>
      
 
  );
};
  
  export default BlockComp;
  