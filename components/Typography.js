import { StyleSheet } from "react-native";
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import AppLoading from "expo-app-loading";


const Typography = StyleSheet.create({
  regular: {
    fontFamily: "Quicksand_400Regular",
  },
  Light: {
    fontFamily: "Quicksand_300Light",
  },
  poppinsThin: {
    fontFamily: "Poppins-Thin",
    fontSize: 16,
  },
});

export default Typography;
