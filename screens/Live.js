import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Video } from "expo-av";
import { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ScreenOrientation from "expo-screen-orientation";

const videos = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
];

const Live = () => {
  const videoRefs = videos.map(() => useRef(null));
  const [status, setStatus] = useState({});



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        style={styles.scrollView}
      >
        {videos.map((video, index) => (
          <View key={index} style={styles.videoContainer}>
            <Video
              ref={videoRefs[index]}
              source={{ uri: video }}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={setStatus}
              style={styles.video}
            />
          </View>
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
  videoContainer: {
    marginBottom: 20,
  },
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
});

export default Live;
