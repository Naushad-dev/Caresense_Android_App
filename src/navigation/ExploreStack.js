import { View, Text } from 'react-native'
import React from 'react'
import Vdoc from '../screens/Vdoc'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Explore from '../screens/Explore'
import Prediction from '../screens/Prediction'
import NutriSnap from '../screens/NutriSnap'
import ConsultationScreen from '../screens/ConsultationScreen'
const Stack =createNativeStackNavigator()

const ExploreStack = () => {
  return (
  <Stack.Navigator>
  <Stack.Screen name="aitools" component={Explore}/>
  <Stack.Screen name="prediction" component={Prediction}/>
  <Stack.Screen name="nutrisnap" component={NutriSnap}/>
  <Stack.Screen name="Vdoc" component={Vdoc} />
  <Stack.Screen name="consult" component={ConsultationScreen}/>

  </Stack.Navigator>
  )
}

export default ExploreStack