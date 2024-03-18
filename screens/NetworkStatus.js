import React, { useEffect, useState } from "react";
import { View, Text } from "react-native"
import NetInfo from "@react-native-community/netinfo";

const NetworkStatus = () => {
  const [isConnected, setIsConnected] = useState(null);

  useEffect(() => {
    // Subscribe to network state changes
    const unsubscribe = NetInfo.addEventListener((state) => {
     
      setIsConnected(state.isConnected);
    });

    // Fetch initial network status
    NetInfo.fetch().then((state) => {
     
      setIsConnected(state.isConnected);
    });

    // Clean up
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isConnected !== null ? (
        <Text>{isConnected ? "Connected" : "Disconnected"}</Text>
      ) : (
        <Text>Checking network status...</Text>
      )}
    </View>
  );
};

export default NetworkStatus;
