import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView, Pressable, TouchableOpacity } from "react-native";
import { TrendIcon } from "../svgs/Icons";
import { DiagonalArrowcon } from "../svgs/Icons";
import { useNavigation } from "@react-navigation/native";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ title, description , id, thumbnail}) => {
  const navigation=useNavigation()
 const MAX_NAME_LENGTH = 35;
    
    
    return (
      <TouchableOpacity className="px-2 py-1  border-b border-gray-300 bg-white"
        onPress={() => navigation.navigate("Productresult", {id, description,thumbnail,title})}>
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center ">
            <TrendIcon />
            <Text className="font-bold ml-2" numberOfLines={1} ellipsizeMode="tail">
              {title.length > MAX_NAME_LENGTH
                ? `${title.substring(0, MAX_NAME_LENGTH)}...`
                : title}
            </Text>
          </View>

          <DiagonalArrowcon />
        </View>
      </TouchableOpacity>
    );
       
};

// the filter
const List = ({ query, data }) => {

  const renderItem = ({ item }) => {
    if (
      item.title
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, "")) ||
      item.description
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item title={item.title} description={item.description} id={item._id} thumbnail={item.thumbail} />;
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});
