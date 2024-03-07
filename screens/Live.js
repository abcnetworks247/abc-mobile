import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ScreenOrientation from "expo-screen-orientation";
import VideoPlayer from "../components/VideoPlayer";
const channels = [
  {
    name: "ABC AMBA TV, English Live",
    description: "News in English",
    url: "https://iframe.viewmedia.tv?channel=158",
    id: 1,
  },
  {
    name: "ABC AMBA TV, Portuguese Live",
    description: "Notícias em Português",
    url: "https://iframe.viewmedia.tv?channel=158",
    id: 2,
  },
  {
    name: "ABC AMBA TV, French Live",
    description: "Actualités en français",
    url: "https://iframe.viewmedia.tv?channel=158",
    id: 3,
  },
  {
    name: "ABC AMBA TV, Pidgin English Live",
    description: "News in Pidgin English",
    url: "https://iframe.viewmedia.tv?channel=158",
    id: 4,
  },
];

const Live = () => {
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
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default Live;
