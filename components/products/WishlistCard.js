import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";
import { BinIcon } from "../svgs/Icons";
import { RemoveWishIcon } from "../svgs/Icons";
import { UseProductProvider } from "../../context/ProductProvider";
import { UseUserContext } from "../../context/UserContext";
import { useWindowDimensions } from "react-native";

const WishlistCard = ({ title, description, thumbnail, price ,productId}) => {
  const navigation = useNavigation();
    
const { UserData } = UseUserContext();
const {handleWishAdd} = UseProductProvider();

  const handlePress = () => {
    navigation.navigate("Details", {
      title,
      description,
      thumbnail,
      price,
    });
  };
  return (
    <Pressable
      className="relative w-[48%] rounded-md bg-white mt-2 pb-4 shadow-md"
      onPress={handlePress}
    >
      <View>
        <Image
          className="h-[150px] rounded-t-md"
          resizeMode="cover"
          source={{ uri: thumbnail }}
        />
      </View>

      <View className="px-2 mt-2">
        <Text className="text-gray-800 font-semibold line-clamp-1">
          {title}
        </Text>
      </View>

      <View className="flex flex-row items-center justify-between px-2">
        <View>
          <Text className="text-[#00308F] font-bold">${price.toFixed(2)}</Text>
        </View>
        <View>
          <Text className="text-gray-400 text-xs font-bold line-through">
            ${price.toFixed(2)}
          </Text>
        </View>
      </View>

      <View className="absolute top-4 right-2">
        <TouchableOpacity
          className="flex flex-row items-center justify-center bg-gray-300 rounded-lg p-2 border border-white"
          onPress={() => {
            handleWishAdd(productId, UserData._id);
          }}
        >
          <RemoveWishIcon />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#E6E6E6",
  },
  listContainer: {
    alignItems: "center",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: "white",
    flexBasis: "47%",
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },

  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
  },
  price: {
    fontSize: 16,
    color: "green",
    marginTop: 5,
  },
  buyNow: {
    color: "purple",
  },
  icon: {
    width: 25,
    height: 25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarSection: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  socialBarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WishlistCard;
