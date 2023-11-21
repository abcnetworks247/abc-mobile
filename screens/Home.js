import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function Home() {
  return (
    <View>
      <ScrollView className="mb-0">
        <View className="h-[20vh] w-auto bg-gray-500 m-2 rounded-lg mt-6">
          <Image
            className="object-cover w-full h-full"
            source={require("../assets/adaptive-icon.png")}
          />
        </View>

        <View className="px-4 py-4">
          <Text className="mb-3 text-lg font-medium">All Events</Text>

          <View className="">
            <View className="h-[30vh] bg-gray-500 rounded-t-lg ">
              <Image
                className="object-cover w-full h-full"
                source={require("../assets/adaptive-icon.png")}
              />
            </View>

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
            <View className="h-[30vh] bg-gray-500 rounded-t-lg ">
              <Image
                className="object-cover w-full h-full"
                source={require("../assets/adaptive-icon.png")}
              />
            </View>

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
            <View className="h-[30vh] bg-gray-500 rounded-t-lg ">
              <Image
                className="object-cover w-full h-full"
                source={require("../assets/adaptive-icon.png")}
              />
            </View>

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
        </View>
      </ScrollView>
    </View>
  );
}
