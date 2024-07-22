import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ScreenOrientation from "expo-screen-orientation";
import VideoPlayer from "../components/VideoPlayer";
import AbcEnglishLive from "../assets/english.jpg"
import AbcPidginLive from "../assets/pidgin.jpg";
import AbcFrancaisLive from "../assets/france.jpg"
import AbcPortugueseLive from "../assets/portugues.jpg";
import { UseUserContext } from "../context/UserContext";

const Live = () => {

   const { UserData } = UseUserContext();

  React.useEffect(() => {
    
  
    console.log(UserData?.userpackage, "UserData");
  },[])
   const channels = [
     {
       name: "ABC AMBA TV, English Live",
       description: "News in English",
       url: AbcEnglishLive,
       id: 1,
     },
     {
       name: "ABC AMBA TV, Portuguese Live",
       description: "Notícias em Português",
       url: AbcPortugueseLive,
       mainurl: "https://iframe.viewmedia.tv?channel=158",
       id: 2,
     },
     {
       name: "ABC AMBA TV, French Live",
       description: "Actualités en français",

       url: AbcFrancaisLive,
       mainurl: "https://iframe.viewmedia.tv?channel=158",
       id: 3,
     },
     {
       name: "ABC AMBA TV, Pidgin English Live",
       description: "News in Pidgin English",
       mainurl: "https://iframe.viewmedia.tv?channel=158",
       url: AbcPidginLive,
       id: 4,
     },
   ];
  

  const currentScreen = ScreenOrientation.getOrientationAsync();
  

  const myCurrentScreenLock =
    ScreenOrientation.getPlatformOrientationLockAsync();
  


  const rotateToLandscape = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  };

  const rotateToPortrait = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT
    );
  };

  useEffect(() => {
   
    console.log(AbcEnglishLive, "AbcEnglishLive");


    const orientationChangeHandler = (orientation) => {
      if (orientation === "LANDSCAPE") {
        rotateToLandscape();
      } else {
        rotateToPortrait();
      }
    };

    ScreenOrientation.addOrientationChangeListener(orientationChangeHandler);

    return () => {
      ScreenOrientation.removeOrientationChangeListener(
        orientationChangeHandler
      );
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        style={styles.scrollView}
      >
        {channels.map((channel, index) => (
          <VideoPlayer key={index} video={channel} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    
    paddingVertical: 20,
  },
});

export default Live;
