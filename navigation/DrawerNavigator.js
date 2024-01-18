import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  StoreStackNavigator,
  NewStackNavigator,
  ProfileStackNavigator,
  HomeStackNavigator,
  CartStackNavigator,
} from "./StackNavigator";
import Tabs from "./Tabs";


const Drawer = createDrawerNavigator();


export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Tabs} />
      <Drawer.Screen name="Profiletab" component={ProfileStackNavigator} />
    </Drawer.Navigator>
  );
}
