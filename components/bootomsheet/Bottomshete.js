import { View, Text } from "react-native";
import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { TouchableOpacity } from "react-native";

const Bottomsheet = ({ bottomsheetref }) => {
    const handleLoginPress = () => {
      // Navigate to the login screen
      setIsSignUpVisible(true);
    };
  
  return (
    <RBSheet
      ref={bottomsheetref}
      height={300}
      openDuration={250}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: "rgba(0,0,0,0.5)",
        },
        container: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
      }}
    >
      <View className="flex flex-1 items-center justify-center">
        <Text className="mb-[20px] text-md">You are not logged in!</Text>
        <Text style={{ marginBottom: 20 }}>
          Please log in to view your wishlist
        </Text>
        <TouchableOpacity
          onPress={handleLoginPress}
          className
          style={{
            backgroundColor: "#007bff",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
          }}
        >
          <Text className="text-white text-[16px]">Log In</Text>
        </TouchableOpacity>
      </View>
    </RBSheet>
  );
};

export default Bottomsheet;
