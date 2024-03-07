import React, { useEffect, useState } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const LoadingScreen = () => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    const increaseDots = Animated.timing(animation, {
      toValue: 4,
      duration: 1000,
      useNativeDriver: false,
    });

    const decreaseDots = Animated.timing(animation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    });

    const sequence = Animated.sequence([increaseDots, decreaseDots]);
    const loop = Animated.loop(sequence);

    loop.start();

    return () => {
      loop.stop();
    };
  }, []);

  const dots = [];
  for (let i = 0; i < 4; i++) {
    dots.push(
      <Animated.View
        key={i}
        style={[
          styles.dot,
          {
            opacity: animation.interpolate({
              inputRange: [0, 1, 2, 3, 4],
              outputRange: [0, 1, 1, 1, 0],
            }),
          },
        ]}
      >
        <FontAwesome name="circle" style={styles.dotIcon} />
      </Animated.View>
    );
  }

  return <View style={styles.container}>{dots}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    height: "100%",
  },
  dot: {
    marginHorizontal: 5,
  },
  dotIcon: {
    fontSize: 20,
    color: "#007bff",
  },
});

export default LoadingScreen;
