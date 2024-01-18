import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import img from "../assets/events-search.jpg"

export default function News() {
  const [result, setResult] = useState(null);
  const [title, setTitle] = useState("");
  return (
    <View className="bg-white">
      <View className="px-4 py-8">
        <View className="flex flex-row justify-between px-5 py-4 bg-white border rounded-lg shadow-sm gap-xlg">
          <TextInput
            value={title}
            placeholder="Search events..."
            onChangeText={(text) => setTitle(text)}
            className="w-[80%] p-0 text-lg  border-none"
          />
          <Icon
            name="search"
            size={30}
            className="text-gray-800 w-[20%] flex flex-row items-center"
          />
        </View>

        {result === null ? (
          <View className="justify-center h-[80vh] tems-center ">
            <View className="h-[40vh] bg-gray-500 rounded-t-lg ">
              <Image
                className="object-cover w-full h-full"
                source={img}
              />
            </View>
          </View>
        ) : (
          <ScrollView className="mt-4 mb-24">
            <View className="">
              <View className="p-4 mb-4 bg-green-200 border-l-[6px] rounded-b-lg border-green">
                <View>
                  <Text className="text-base font-medium">
                    International Mens Day
                  </Text>
                  <Text>Saturday 10AM</Text>
                </View>
                <View>
                  <TouchableOpacity className="self-start px-4 py-2 mt-8 bg-blue-500 rounded-full">
                    <Text className="text-base text-white">Todays Event</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View className="">
              <View className="p-4 mb-4 bg-yellow-200 border-l-[6px] rounded-b-lg border-green">
                <View>
                  <Text className="text-base font-medium">
                    International Mens Day
                  </Text>
                  <Text>Saturday 10AM</Text>
                </View>
                <View>
                  <TouchableOpacity className="self-start px-4 py-2 mt-8 bg-blue-500 rounded-full">
                    <Text className="text-base text-white">Upcoming Event</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View className="">
              <View className="p-4 mb-4 bg-red-200 border-l-[6px] rounded-b-lg border-green">
                <View>
                  <Text className="text-base font-medium">
                    International Mens Day
                  </Text>
                  <Text>Saturday 10AM</Text>
                </View>
                <View>
                  <TouchableOpacity className="self-start px-4 py-2 mt-8 bg-blue-500 rounded-full">
                    <Text className="text-base text-white">Past Event</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
}
