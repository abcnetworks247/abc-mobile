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
            <View className="flex flex-row gap-2 items-center mx-2 mt-2">
              <Image
                className="rounded-full"
                style={{ height: 70, width: 70 }}
                source={{
                  uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                resizeMode="contain"
              />

              <View className="flex flex-col">
                <Text className="font-bold">Mijan Richard</Text>
                <Text className="text-gray-400">mijanigoni@gmail.com</Text>
              </View>
            </View>
            <View className="flex flex-row items-center">
              <Ionicons name="exit-outline" size={22} />
              <Text>log out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default CustomDrawer