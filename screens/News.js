import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  SafeAreaView,
} from "react-native";
import NewsType from "../components/News/newsType";
import globalstyels from "../styles/globalstyels";


export default function News() {
  return (
    <SafeAreaView style={globalstyels.droidSafeArea}>
     <NewsType/>
    </SafeAreaView>
  );
}
