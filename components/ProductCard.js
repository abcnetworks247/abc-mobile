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
import { Ionicons } from "@expo/vector-icons";
import { UseUserContext } from "../context/UserContext";
import { UseProductProvider } from "../context/ProductProvider";
import { useState, useEffect } from "react";
import { ActivityIndicator, ToastAndroid } from "react-native";

const ProductCard = ({ title, description, thumbnail, price, productId }) => {
  const { UserData, authToken,setIsSignUpVisible  } = UseUserContext();

const {
    handleWishAdd,
    handleAddToCart,
    handleCartLoading,
    setAddToCartActive,
    } = UseProductProvider();
  const navigation = useNavigation();
  const [addedProduct, setAddedProduct] = useState(null)
  
  useEffect(() => {
    if (addedProduct) {
       console.log("my added product", addedProduct)
       handleAddToCart(productId, UserData._id);
      
    }
  }, [addedProduct,productId])
  

  const handlePress = () => {
    navigation.navigate("Details", {
      title,
      description,
      thumbnail,
      price,
      productId,
    });
  };

 
  return (
    <Pressable
      className="basis-1/2 bg-white mb-2 pb-4 shadow-md"
      onPress={handlePress}
    >
      <View className="relative">
        <Image
          className="h-[150px]"
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
          <Text className="text-[#00308F] font-bold">${price.toFixed(2)}</Text>
        </View>
        <View>
          <Text className="text-gray-400 text-xs font-bold line-through">
            ${price.toFixed(2)}
          </Text>
        </View>
      </View>

      <View className="absolute flex flex-col gap-4 top-4 right-2">
        <View style={styles.socialBarSection}>
          <TouchableOpacity
            className="flex flex-row items-center justify-center bg-gray-200 p-2 rounded-lg"
            onPress={() =>
              UserData
                ? handleWishAdd(productId, UserData._id)
                : setIsSignUpVisible(true)
            }
          >
            <Ionicons name="heart-outline" size={23} color={"#737373"} />
          </TouchableOpacity>
        </View>
        <View style={styles.socialBarSection}>
          <TouchableOpacity
            className="flex flex-row items-center justify-center bg-gray-200 p-2 rounded-lg"
            onPress={
              UserData
                ? () => {
                   
                    setAddedProduct(productId);
                  } 
                : setIsSignUpVisible(true)
            }
          >
            {handleCartLoading && productId === addedProduct ? (
              <ActivityIndicator size="small" color="blue" />
            ) : (
              <Ionicons name="cart" size={23} color={"#737373"} />
            )}
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
