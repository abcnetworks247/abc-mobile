import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Video from "react-native-video";

const VideoPlayer = ({ videoSource }) => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoSource }}
        style={styles.video}
        controls={true}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    aspectRatio: 16 / 9,
  },
  video: {
    flex: 1,
  },
});

export default VideoPlayer;
