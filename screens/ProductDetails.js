import React from 'react'
import { View, ScrollView, Image, Text, Button } from "react-native";
import { useRoute} from "@react-navigation/native";



const ProductDetails = () => {
     const route = useRoute();
     const { title, price, description, thumbnail } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: thumbnail }}
      />
      <View style={styles.info}>
              <Text style={styles.name}>{title}</Text>
              <Text style={styles.price}>${price}</Text>
        <Text style={styles.description}>
        {description}
        </Text>
      </View>
      <Button title="Add to Cart" onPress={() => {}} />
    </ScrollView>
  );
}


const styles = {
  container: {
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  info: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: "#999",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
};

export default ProductDetails