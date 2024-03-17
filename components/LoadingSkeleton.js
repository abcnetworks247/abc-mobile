import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LoadingSkeleton = ({ numberOfSkeletons }) => {
  const renderSkeletons = () => {
    const skeletons = [];
    for (let i = 0; i < numberOfSkeletons; i++) {
      skeletons.push(
        <View key={i} style={styles.container}>
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <View style={styles.image}></View>
              <View style={styles.icons}>
                <View style={styles.icon}></View>
                <View style={styles.icon}></View>
              </View>
            </View>
            <View style={styles.content}>
              <View style={styles.text}></View>
              <View style={styles.text}></View>
              <View style={styles.tagsContainer}>
                <View style={styles.tag}></View>
                <View style={styles.tag}></View>
                <View style={styles.tag}></View>
                <View style={styles.tag}></View>
                <View style={styles.tag}></View>
              </View>
            </View>
          </View>
        </View>
      );
    }
    return skeletons;
  };

  return <View style={styles.grid}>{renderSkeletons()}</View>;
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 8,
  },
  container: {
    width: "48%", // Adjust as needed
    marginBottom: 8,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    position: "relative",
    height: 150,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E5E7EB", // Gray background color
  },
  icons: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 2,
    flexDirection: "column",
  },
  icon: {
    width: 24,
    height: 24,
    backgroundColor: "#E5E7EB", // Gray background color
    marginBottom: 6,
  },
  content: {
    padding: 12,
  },
  text: {
    height: 12,
    backgroundColor: "#E5E7EB", // Gray background color
    marginBottom: 6,
  },
  tagsContainer: {
    flexDirection: "row",
  },
  tag: {
    width: 24,
    height: 24,
    backgroundColor: "#E5E7EB", // Gray background color
    marginRight: 6,
  },
});

export default LoadingSkeleton;
