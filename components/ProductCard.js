
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";




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
    <Pressable className="relative" style={styles.card} onPress={handlePress}>
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

      <View className="absolute flex flex-col gap-2 right-2">
        <View style={styles.socialBarSection}>
          <TouchableOpacity style={styles.socialBarButton}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/nolan/96/3498db/add-shopping-cart.png",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.socialBarSection}>
          <TouchableOpacity style={styles.socialBarButton}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/color/50/000000/hearts.png",
              }}
            />
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
