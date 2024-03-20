import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  RefreshControl,
  Pressable,
} from "react-native";
import { ScrollView, SafeAreaView } from "react-native";
import Api from "../../utils/Api";
import { useCustomFonts } from "../../context/FontContext";
import AppLoading from "expo-app-loading";
import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import globalstyels from "../../styles/globalstyels";
import BlockComp from "./BlockComp";

const HomeNews = () => {
  const { width } = useWindowDimensions();
  const { fontsLoaded } = useCustomFonts();

  const [breakingNews, setBreakingNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await Api.get(`admin/blog`);
      const data = res.data;
      setBreakingNews(data[5]["Breaking News"]);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
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

  if (loading) {
    return null;
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <SafeAreaView style={globalstyels.droidSafeArea}>
        <ScrollView
          style={{ paddingHorizontal: 12 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
        >
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                fontFamily: "PublicSans_700Bold",
                fontSize:width > 500 ? 25: 20,
                marginBottom: 10,
              }}
            >
              Breaking News
            </Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {breakingNews.map((item, index) => (
                <Pressable
                  key={index}
                  style={{
                    width: width > 500 ? "48%" : "100%",
                    marginBottom: 16,
                  }}
                  onPress={handlePress(item)}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: 208,
                      borderRadius: 8,
                      marginBottom: 8,
                    }}
                    source={{ uri: item.blogimage }}
                    resizeMode="cover"
                  />
                  <Text
                    style={{
                      fontFamily: "PublicSans_400Regular",
                      color: "#555",
                      marginBottom: 4,
                    }}
                  >
                    {item.category}
                  </Text>
                  <Text
                    className="capitalize"
                    style={{
                      fontFamily: "PublicSans_600SemiBold",
                      fontSize: width > 500 ? 20 : 16,
                    }}
                  >
                    {item.title}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeNews;
