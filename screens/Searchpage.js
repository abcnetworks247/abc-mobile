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

const Searchpage = () => {
    const {allProducts} = UseProductProvider()
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
    const [fakeData, setFakeData] = useState();
    console.log("allProduct", allProducts)


  return (
    <SafeAreaView style={styles.root}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />

      {searchPhrase && (
        <List
          searchPhrase={searchPhrase}
          data={allProducts}
          setClicked={setClicked}
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