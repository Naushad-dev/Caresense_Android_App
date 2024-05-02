import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Doctors_List from '../components/general/Doctors_List'
import axios from 'axios'

const ConsultationScreen = ({route}) => {
    const{doctor}= route.params

    const [consultData, setconsultData] = useState()
    const [loading, setloading] = useState(false)
const getSpecificDoctor= async()=>{
  

    try {
        setloading(true)
        const {data}= await axios.get(`/get-specialist?specialization=${doctor}`)
        console.log("Docotors data :", data)

        if(data.success){
            setconsultData(data)
            setloading(false)
        }
        
    } catch (error) {
        alert(error)
        console.log(error);
        
    }

}

  return (
    <View style={{flex:1}}>
    {consultData ? (<Text>Here is doc</Text>):(<Doctors_List/>)}
    </View>
  )
}

export default ConsultationScreen