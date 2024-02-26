import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import HTML from "react-native-render-html";
import Api from "../utils/Api";
import { useWindowDimensions } from "react-native";



export default function AboutComponent() {

  
  const { height: screenHeight, width: screenWidth } = useWindowDimensions()
  
  const [about, setAbout] = useState("");
  const [about2, setAbout2] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [aboutImageSrc, setAboutImageSrc] = useState(null);
 

  const fetchAbout = async () => {
    try {
      setLoading(true);
      const response = await Api.get("admin/pages/about");
      const data = await response.data;
      setAbout(data.data.description);
      setAbout2(data.data.description2);
      setAboutImageSrc(data.data.image);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching about content:", error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  return (
    <ScrollView style={{ width: screenWidth }}>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <>
          <View style={{ padding: 20 }}>
            <Text
              style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}
            >
              About Us
            </Text>
            <HTML source={{ html: about }} contentWidth={screenWidth}/>
            <Image
              source={{ uri: aboutImageSrc }}
              style={{
                width: "100%",
                height: 300,
                marginTop: 20,
                marginBottom: 20,
              }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              padding: 20,
              backgroundColor: "#f0f0f0",
              width: screenWidth,
            }}
          >
            <Text
              style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}
            >
              More About Us
            </Text>
            <HTML source={{ html: about2 }} contentWidth={screenWidth} />
          </View>
        </>
      )}
    </ScrollView>
  );
}
