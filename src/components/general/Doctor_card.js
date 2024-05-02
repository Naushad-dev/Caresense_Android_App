import { View, Text, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const Doctor_card = ({name,specialization ,id,image}) => {
  const navigation= useNavigation()
  return (
    <View className=" mt-4 " key={id}>
    <View className="border-1 border-yellow-400 p-1 flex flex-row ">
      <View className="border-1 border-gray-700 mr-2 rounded-xl bg-white ">
        <Image
          className="rounded-xl"
          source={{
            uri:  image ||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRECWxY9RPTChUABfN3UAc73uSH6Gh2eiwewQ&usqp=CAU",
          }}
          height={120}
          width={120}
        />
      </View>

      <View className="border-1 border-purple-700 flex justify-between py-2 px-2">
        <View >
          <Text className="text-2xl" onPress={()=>{navigation.navigate('DoctorInfo',{
            Itemid:id
          })}}>{name}</Text>
          <Text className="text-l opacity-70 text-gray-500">
            Hosptial name
          </Text>
          <Text>{specialization}</Text>
        </View>
        <View className="flex flex-row items-center " >
          <Icon source="clock" size={20} />
          <Text className="text-xl ml-2">10.00 - 12.30 </Text>
        </View>
      </View>
    </View>
  </View>
  )
}

export default Doctor_card