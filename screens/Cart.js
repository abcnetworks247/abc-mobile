import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  DatePickerIOS,
} from "react-native";
import React, { useState } from "react";

export default function Cart() {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");

  return (
    <View>
      <ScrollView className="px-4 mt-4 mb-24">
        <View className="flex flex-col gap-4">
          <View className="flex flex-col gap-1">
            <Text className="text-[17px] font-md bold text-">Event Name</Text>
            <View className="border-gray-400 rounded-lg border-[1px]">
              <TextInput
                placeholder="Event Name"
                onChangeText={(text) => setTitle(text)}
                className="px-2 py-[4px] my-2 text-lg border-none"
              />
            </View>
          </View>

          <View className="flex flex-col gap-1">
            <Text className="text-[17px] font-md bold text-">
              Event Description
            </Text>
            <View className="border-gray-400 rounded-lg border-[1px]">
              <TextInput
                placeholder="Event Description"
                onChangeText={(text) => setTitle(text)}
                multiline={true}
                numberOfLines={4}
                className="px-2 py-[4px] my-2 text-lg border-none"
              />
            </View>
          </View>

          <View></View>
        </View>
      </ScrollView>
    </View>
  );
}
