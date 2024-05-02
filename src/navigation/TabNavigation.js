import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Nearby from "../screens/Nearby";
import Profile from "../screens/Profile";
import ExploreStack from "./ExploreStack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import NearbyStack from "./NearbyStack";
import ProfileStack from "./ProfileStack";
import HomeStack from "./HomeStack";


const BottomTabs = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <BottomTabs.Navigator  screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#86efac",
        tabBarInactiveTintColor: "grey",
        tabBarHideOnKeyboard:true
      }}>
      <BottomTabs.Screen
      name="homeTab"
      component={HomeStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="explore"
      component={ExploreStack}

      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="arch" size={size} color={color} />
        ),
      }}
    />

    <BottomTabs.Screen
      name="nearby"
      component={NearbyStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="map" size={size} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="profileTab"
      component={ProfileStack}

      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  
    </BottomTabs.Navigator>
  );
};

export default TabNavigation;
