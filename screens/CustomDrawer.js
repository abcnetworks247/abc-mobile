import React from 'react'
import { View, Text, Image, TouchableOpacity , ImageBackground} from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
const CustomDrawer = (props) => {
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{ backgroundColor: "#2c3e50" }}
        >
          <ImageBackground
            source={require("../assets/abcbackground.jpg")}
          
          >
            <Image
              source={require("../assets/AbcstudioNo.png")}
              style={{
                height: 200,
                width: 200,
              
              }}
              resizeMode="contain"
            />
          </ImageBackground>

          <View style={{ paddingTop: 10, backgroundColor:"white" }}>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
        <View style={{ padding: 20, borderTopWidth: 1 }}>
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