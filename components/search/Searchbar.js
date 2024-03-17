import React, { useEffect, useRef } from "react";
import { View, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";

const SearchBar = ({  searchPhrase, setSearchPhrase }) => {
  const navigation= useNavigation()
  const searchInputRef = useRef(null);
 const [query, setQuery]=useState('')

  //  useEffect(() => {
  //    // Autofocus the search input when the component mounts
  //    if (searchInputRef.current && isFocused) {
  //      searchInputRef.current.focus();
  //    }
  //  }, [isFocused]);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#fff", // Customize background color as needed
        borderBottomWidth: 1,
        borderBottomColor: "#ccc", // Customize border color as needed
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Back arrow */}
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={23} />
      </Pressable>

      {/* Search bar */}
      <TextInput
        ref={searchInputRef}
        placeholder="Search..."
        style={{
          flex: 1,
          marginLeft: 10,
          fontSize: 16,
        }}
        value={query}
        onChangeText={setQuery}
      />
    </View>
  );
};
export default SearchBar;
