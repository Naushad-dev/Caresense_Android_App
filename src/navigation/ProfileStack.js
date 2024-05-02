import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../screens/Profile'
import UserAppointments from '../screens/UserAppointments'
import NotificationScreen from '../screens/NotificationScreen'

const Stack =createNativeStackNavigator()

const ProfileStack = () => {
  return (
  <Stack.Navigator>
  <Stack.Screen name="profile" component={Profile}/>
  <Stack.Screen name="allappointments" component={UserAppointments}/>
  <Stack.Screen name="Notification" component={NotificationScreen}/>

 

  </Stack.Navigator>
  )
}

export default ProfileStack