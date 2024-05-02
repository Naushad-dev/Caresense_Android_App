import { View, Text } from 'react-native'
import React from 'react'

const AppointmentCard = ({Doctor,specialization,AppointmentTime}) => {
  return (
    <View>
    <View style={{borderRadius:10, padding:5, margin:10, backgroundColor:"#86efac", elevation:5}}>
    <Text style={{fontSize:18, fontWeight:"bold",marginTop:5}}>Doctors Name:-{Doctor}</Text>
    <Text>specialist:-{specialization}</Text>
    <Text>Timing:-{AppointmentTime}</Text>
    </View>
    </View>
  )
}

export default AppointmentCard