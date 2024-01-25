import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  SafeAreaView,
  StatusBar
} from "react-native";
import NewsType from "../components/News/newsType";
import globalstyels from "../styles/globalstyels";


export default function News() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#111827" />
    <SafeAreaView style={globalstyels.droidSafeArea}>
     <NewsType/>
    </SafeAreaView>
    </>
  );
}
