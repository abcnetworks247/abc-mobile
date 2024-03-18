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
import Archiveanalysis from "./Archiveanalysis";
import WorldNews from "./WorldNews";
import SportNews from "./SportNews";
import InterimGovernment from "./InterimGovernment";
import AfricanNews from "./AfricanNews";
import PresidentialOffice from "./PresidentialOffice";

const New = () => {
  
  const [posts, setPosts] = useState(null);
  const [africaNews, setAfricaNews] = useState(null);
  const [pressReleases, setPressReleases] = useState(null);
  const [officeOfThePresident, setOfficeOfThePresident] = useState(null);
  const [socioCultural, setSocioCultural] = useState(null);
  const [archivesAndAnalysis, setArchivesAndAnalysis] = useState(null);
  const [breakingNews, setBreakingNews] = useState(null);
  const [sportsNews, setSportsNews] = useState(null);
  const [worldNews, setWorldNews] = useState(null);
  const [interimGovernmentUpdates, setInterimGovernmentUpdates] = useState(null);
  const [businessNews, setBusinessNews] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = useState(true)
  const baseURL = process.env.EXPO_PUBLIC_SERVER_URL;

    

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
      setLoading(true)
      const res = await axios.get(`${baseURL}admin/blog`);
      const data = res.data;
      setAfricaNews(data[0]["Africa News Update"]);
      setPressReleases(data[1]["Dr. Martin Mungwa - Press Releases"]);
      setOfficeOfThePresident(data[2]["Office of the President"]);
      setSocioCultural(data[3]["Socio Cultural"]);
      setArchivesAndAnalysis(data[4]["Archives & Analysis"]);
      setBreakingNews(data[5]["Breaking News"]);
      setSportsNews(data[6]["Sports"]);
      setWorldNews(data[7]["World News"]);
      setInterimGovernmentUpdates(data[8]["Interim Government Updates"]);
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
            {africaNews && <AfricanNews data={africaNews} loading={loading} />}
            {officeOfThePresident && (
              <PresidentialOffice data={officeOfThePresident} loading={loading} />
            )}
            {interimGovernmentUpdates && (
              <InterimGovernment
                data={interimGovernmentUpdates}
                loading={loading}
              />
            )}
            {sportsNews && <SportNews data={sportsNews} loading={loading} />}
            {/* {pressReleases && (
              <LayerFour data={pressReleases} loading={loading} />
            )} */}
            {/* {worldNews && <LayerFour data={worldNews} loading={loading} />} */}
            {archivesAndAnalysis && (
              <Archiveanalysis data={archivesAndAnalysis} loading={loading} />
            )}
            {worldNews && <WorldNews data={worldNews} loading={loading} />}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default New;
