import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
const CustomDrawer = (props) => {
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{ backgroundColor: "white" }}
        >
          <Image
            source={require("../assets/AbcstudioNo.png")}
            style={{
              height: 100,
              width: 100,
              marginBottom: 10,
              marginLeft: 10,
            }}
            resizeMode="contain"
          />
          <View style={{ paddingTop: 10 }}>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
        <View
          style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}
        >
          <TouchableOpacity style={{ paddingVertical: 15 }}>
            <View className="flex flex-row items-center">
              <Ionicons name="exit-outline" size={22} />
              <Text className="ml-2">log out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default CustomDrawer