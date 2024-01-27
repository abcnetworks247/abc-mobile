import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import List from "../components/search/List";
import SearchBar from "../components/search/Searchbar";
import { UseProductProvider } from "../context/ProductProvider";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Searchpage = () => {
  const navigation=useNavigation()
    const {allProducts} = UseProductProvider()
  const [searchPhrase, setSearchPhrase] = useState("");
 

  
   useLayoutEffect(() => {
     // Hide the bottom navigation when navigating to Searchpage
     navigation.setOptions({
       tabBarVisible: false,
     });

     // Cleanup function to show the bottom navigation when leaving Searchpage
     return () => {
       navigation.setOptions({
         tabBarVisible: true,
       });
     };
   }, [navigation]);


  return (
    <SafeAreaView style={styles.root}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />

      {searchPhrase && (
        <List
          searchPhrase={searchPhrase}
          data={allProducts}
         
        />
      )}
    </SafeAreaView>
  );
};

export default Searchpage;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});