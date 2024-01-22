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

const ProductCard = ({ title, description, thumbnail, price }) => {
  const navigation = useNavigation();

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
      className="relative basis-1/2 bg-white mb-2 pb-4 shadow-md"
      onPress={handlePress}
    >
      <View>
        <Image
          className="flex-1 h-[150px]"
          resizeMode="contain"
          source={{ uri: thumbnail }}
        />
      </View>

      <View className="px-2 mt-2">
        <Text className="text-gray-800 text-semibold line-clamp-1">
          {title}
        </Text>
      </View>
      <View className="flex flex-row items-center justify-between px-2">
        <View>
          <Text className="text-blue-500 font-bold">${price.toFixed(2)}</Text>
        </View>
        <View>
          <Text className="text-gray-400 text-xs font-bold line-through">
            ${price.toFixed(2)}
          </Text>
        </View>
      </View>

      <View className="absolute flex flex-col gap-4 top-4 right-2">
        <View style={styles.socialBarSection}>
          <TouchableOpacity className="flex flex-row items-center justify-center">
            <Svg
              width="30px"
              height="30px"
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000"
              strokeWidth={0.00024000000000000003}
            >
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 5.881A5.39 5.39 0 0116.05 4C18.822 4 21 6.178 21 8.95c0 3.4-3.055 6.17-7.684 10.367l-.011.01L12 20.515l-1.305-1.179-.036-.032C6.044 15.11 3 12.344 3 8.95 3 6.178 5.178 4 7.95 4A5.39 5.39 0 0112 5.881zm0 12.204l.09-.09c4.284-3.879 7.11-6.444 7.11-9.045 0-1.8-1.35-3.15-3.15-3.15-1.386 0-2.736.891-3.204 2.124h-1.683C10.686 6.691 9.336 5.8 7.95 5.8c-1.8 0-3.15 1.35-3.15 3.15 0 2.601 2.826 5.166 7.11 9.045l.09.09z"
                fill="red"
              />
            </Svg>
          </TouchableOpacity>
        </View>
        <View style={styles.socialBarSection}>
          <TouchableOpacity className="flex flex-row items-center justify-center">
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              fill="#00f"
              viewBox="0 0 16 16"
            >
              <Path d="M0 2.5A.5.5 0 01.5 2H2a.5.5 0 01.485.379L2.89 4H14.5a.5.5 0 01.485.621l-1.5 6A.5.5 0 0113 11H4a.5.5 0 01-.485-.379L1.61 3H.5a.5.5 0 01-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0zm9-1a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0z" />
            </Svg>
          </TouchableOpacity>
        </View>
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

export default ProductCard;
