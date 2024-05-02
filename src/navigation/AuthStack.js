import { View, Text } from 'react-native'
import React from 'react'
import InitialScreen from '../screens/InitialScreen'
import Login from '../screens/Login'
import Register from '../screens/Register'

const AuthStack = (Stack) => {

  return (
  <>
  <Stack.Screen name="initialscreen" component={InitialScreen}/>
  <Stack.Screen name="login" component={Login}/>
  <Stack.Screen name="register" component={Register}/>
  
  </>
  
  )
}

export default AuthStack