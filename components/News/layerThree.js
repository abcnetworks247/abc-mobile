import {
    View,
    Text,
    Image,
    StatusBar,
    RefreshControl,
    TouchableHighlight,
    TouchableOpacity,
    Linking,
    Pressable,
  } from "react-native";
  import React from "react";
  import { ScrollView, SafeAreaView } from "react-native";
  import axios from "axios";
  import { useEffect, useState, useCallback } from "react";
  import { useNavigation } from "@react-navigation/native";
  import globalstyels from "../../styles/globalstyels";
  
  import { useFocusEffect } from "@react-navigation/native";
  
  const LayerThree = () => {
    const navigation = useNavigation();
    const handlePress = (item) => () => {
      navigation.navigate("NewsDetails", {
        id: item._id,
        title: item.title,
        category: item.category,
        image: item.blogimage,
        type: item.type,
        desc: item.longdescription,
      });
    };
    
    return (
      <View>
        <Text>Layer Three</Text>
      </View>
    );
  };
  
  export default LayerThree;