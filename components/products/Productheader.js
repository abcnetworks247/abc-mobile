import React from "react";
import { Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HamburgerIcon } from "../svgs/Icons";
import { SearchIcon } from "../svgs/Icons";

const Productheader = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      className="flex flex-row items-center justify-between bg-white py-2 px-2"
      onPress={() => navigation.goBack()}
    >
      <HamburgerIcon />

      <Pressable onPress={() => {}}>
        <SearchIcon />
      </Pressable>
    </Pressable>
  );
};

export default Productheader;
