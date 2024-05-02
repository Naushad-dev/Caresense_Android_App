import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

const Input = ({ label,setValue,
secureTextEntry,keyboardType,numberOfLines,multiline,value,autoComplete,editable }) => {
  return (
    <TextInput label={label}
      mode='outlined'
      className="mx-8 my-2 "
      onChangeText={text => setValue(text)}
      outlineColor='green'
      activeOutlineColor='green'
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      numberOfLines={numberOfLines}
      multiline={multiline}
      value={value}
      autoComplete={autoComplete}
      editable={editable}


    />
  )
}

export default Input