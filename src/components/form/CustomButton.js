import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({ label, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} className="bg-green-300 flex justify-center items-center py-4 mx-8 mt-2 rounded-2xl border-1 border-green-700 shadow-sm">
            <Text className="text-white font-bold text-[20px]" >{label}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton