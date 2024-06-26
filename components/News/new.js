import {
  View,
  Text,
  Image,
  StatusBar,
  RefreshControl,
  TouchableHighlight,
  Linking,
  Pressable,
} from "react-native";
import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
// import {  Pressable } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import globalstyels from "../../styles/globalstyels";
import ScrollComp from "./ScrollComp";
import BlockComp from "./BlockComp";
import BlockAndFlex from "./BlockAndFlex";
import { useWindowDimensions } from "react-native";

const New = () => {
  const { width } = useWindowDimensions();
  const [posts, setPosts] = useState(null);
  const [africaNews, setAfricaNews] = useState(null);
  const [pressReleases, setPressReleases] = useState(null);
  const [officeOfThePresident, setOfficeOfThePresident] = useState(null);
  const [socioCultural, setSocioCultural] = useState(null);
  const [archivesAndAnalysis, setArchivesAndAnalysis] = useState(null);
  const [breakingNews, setBreakingNews] = useState(null);
  const [sportsNews, setSportsNews] = useState(null);
  const [worldNews, setWorldNews] = useState(null);
  const [interimGovernmentUpdates, setInterimGovernmentUpdates] =
    useState(null);
  const [businessNews, setBusinessNews] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const baseURL = "https://abc-server-nazd.onrender.com/api/v1/";

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const colors = ["#00876c", "#f44336", "#ff9800", "#2196f3", "#9c27b0"];

  //fetch data from api
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${baseURL}admin/blog`);
      const data = res.data;
      setAfricaNews(data[0]["Africa News Update"]);
      setPressReleases(data[1]["Secretary of State for Communications"]);
      setOfficeOfThePresident(data[2]["Office of the President"]);
      setSocioCultural(data[3]["Socio Cultural"]);
      setArchivesAndAnalysis(data[4]["Archives & Analysis"]);
      setBreakingNews(data[5]["Breaking News"]);
      setSportsNews(data[6]["Sports"]);
      setWorldNews(data[7]["World News"]);
      setInterimGovernmentUpdates(data[8]["Government Updates"]);
      setBusinessNews(data[9]["Business"]);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
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
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <SafeAreaView style={globalstyels.droidSafeArea}>
        <ScrollView
          className="space-y-8`"
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              enabled={true}
              colors={colors}
              size={"large"}
            />
          }
          showsVerticalScrollIndicator={false}
        >
          {/* trending news */}
          <View className="w-full">
            {africaNews && africaNews.length !== 0 && (
              <ScrollComp
                data={africaNews}
                loading={loading}
                titleHeader="Here are the World Africa News Update you do not want to miss"
              />
            )}
            {officeOfThePresident && officeOfThePresident.length !== 0 && (
              <BlockAndFlex data={officeOfThePresident} loading={loading} />
            )}
            {interimGovernmentUpdates &&
              interimGovernmentUpdates.length !== 0 && (
                <View className="mt-4">
                  <Text
                    style={{
                      fontFamily: "PublicSans_700Bold",
                      fontSize: width > 500 ? 25 : 20,
                    }}
                  >
                    Government Updates
                  </Text>
                  <BlockAndFlex
                    data={interimGovernmentUpdates}
                    loading={loading}
                  />
                </View>
              )}
            {sportsNews && sportsNews.length !== 0 && (
              <View>
                <BlockComp
                  data={sportsNews}
                  loading={loading}
                  titleHeader="Sports"
                />
              </View>
            )}
            {archivesAndAnalysis && archivesAndAnalysis.length !== 0 && (
              <BlockComp
                data={archivesAndAnalysis}
                loading={loading}
                titleHeader="Abc Archive Analysis"
              />
            )}
            {worldNews && worldNews.length !== 0 && (
              <View>
                <Text
                  style={{
                    fontFamily: "PublicSans_700Bold",
                    fontSize: width > 500 ? 25 : 20,
                  }}
                >
                  World News
                </Text>
                <BlockAndFlex data={worldNews} loading={loading} />
              </View>
            )}
            {socioCultural && socioCultural.length !== 0 && (
              <View>
                <Text
                  style={{
                    fontFamily: "PublicSans_700Bold",
                    fontSize: width > 500 ? 25 : 20,
                  }}
                >
                  Sociocultural
                </Text>
                <BlockAndFlex data={socioCultural} loading={loading} />
              </View>
            )}

            {businessNews && businessNews.length !== 0 && (
              <BlockComp
                data={businessNews}
                loading={loading}
                titleHeader="Business News"
              />
            )}

            {pressReleases && pressReleases.length !== 0 && (
              <View>
                <Text
                  style={{
                    fontFamily: "PublicSans_700Bold",
                    fontSize: width > 500 ? 25 : 20,
                  }}
                >
                  Press Release
                </Text>
                <BlockAndFlex data={pressReleases} loading={loading} />
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default New;
