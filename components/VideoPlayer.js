import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,

} from "react-native";
import { Video } from "expo-av";
import { WebView } from "react-native-webview";
import { UseUserContext } from "../context/UserContext";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const VideoPlayer = ({ video }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = React.useRef(null);
  const { UserData } = UseUserContext();
  const navigation = useNavigation();

  // useEffect(() => {
  //   const playVideo = async () => {
  //     try {
  //       await videoRef.current.playAsync();
  //       setIsVideoPlaying(true);
  //     } catch (error) {
  //       console.error("Error playing video", error);
  //     }
  //   };

  //   playVideo();

  //   return () => {
  //     setIsVideoPlaying(false);
  //     videoRef.current.unloadAsync();
  //   };
  // }, [video]);

  const renderVideoPlayer = () => {
    if (UserData?.userpackage === "basic") {
      return (
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("MembershipStack")}
          >
            <Image
              ref={videoRef}
              source={video.url}
              resizeMode="cover"
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
      <WebView
          source={{ uri: video.mainurl }}
          style={styles.video}
          allowsFullscreenVideo
        />
      );
    }
  };

  return (
    <View
      className="w-[100%] mb-[20px] bg-white flex-1"
    >
      <View className="px-2 py-2">
        <Text style={styles.videoName}>{video.name}</Text>
        <Text style={styles.videoDescription}>{video.description}</Text>
      </View>

      {renderVideoPlayer()}
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    flex: 1,
    width: "100%",
    aspectRatio: 16 / 9,
  },
  videoName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  imageContainer: {
    width: "100%", // Ensure the container has a defined width
    aspectRatio: 16 / 9,
    marginBottom: 8,
    paddingHorizontal: 5,
    borderRadius: 10,
    overflow: "hidden", // Ensure content overflow is handled
  },
  image: {
    width: "100%", // Try setting a specific width or Dimensions.get('window').width
    height: "100%", // Adjust height as necessary
    resizeMode: "cover",
  },
  videoDescription: {
    fontSize: 16,
    color: "#666",
  },
});

export default VideoPlayer;
