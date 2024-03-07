import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { Video } from "expo-av";
import { WebView } from "react-native-webview";

const VideoPlayer = ({ video }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = React.useRef(null);

  useEffect(() => {
    const playVideo = async () => {
      try {
        await videoRef.current.playAsync();
        setIsVideoPlaying(true);
      } catch (error) {
        console.error("Error playing video", error);
      }
    };

    playVideo();

    return () => {
      setIsVideoPlaying(false);
      videoRef.current.unloadAsync();
    };
  }, [video]);

  const renderVideoPlayer = () => {
    if (video.url.includes("iframe")) {
      return (
        <WebView
          source={{ uri: video.url }}
          style={styles.video}
          allowsFullscreenVideo
        />
      );
    } else {
      return (
        <Video
          ref={videoRef}
          source={{ uri: video.url }}
          useNativeControls
          resizeMode="contain"
          isLooping
          style={styles.video}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.videoName}>{video.name}</Text>
      <Text style={styles.videoDescription}>{video.description}</Text>
       {renderVideoPlayer()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  video: {
    flex: 1,
    width: "100%",
    heigth: 500,
    aspectRatio: 16 / 9,
  },
  videoName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  videoDescription: {
    fontSize: 16,
    color: "#666",
  },
});

export default VideoPlayer;
