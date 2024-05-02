import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DoctorInfo from "../screens/DoctorInfo";
import Nearby from "../screens/Nearby";
import BookAppoinment from "../screens/BookAppoinment";

const Stack = createNativeStackNavigator();

const NearbyStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Nearby" component={Nearby} />
      <Stack.Screen name="DoctorInfo" component={DoctorInfo} />
      <Stack.Screen name="Booking" component={BookAppoinment}/>
    </Stack.Navigator>
  );
};

export default NearbyStack;

const styles = StyleSheet.create({});
