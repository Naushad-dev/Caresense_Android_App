import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import NotificationScreen from '../screens/NotificationScreen'
import Home from '../screens/Home'

const Stack =createNativeStackNavigator()

const HomeStack = () => {
  return (
  <Stack.Navigator screenOptions={{headerShown:false}}>
  <Stack.Screen name="home" component={Home}/>

  <Stack.Screen name="Notification" component={NotificationScreen}/>

 

  </Stack.Navigator>
  )
}

export default HomeStack