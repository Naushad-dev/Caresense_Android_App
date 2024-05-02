import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const Loader = () => {
  return (
    <View style={[StyleSheet.absoluteFill,styles.container]}>
    <LottieView  source={require("../../../assets/animations/HeartBeat.json")}  autoPlay style={styles.lottie}/>
    <Text style={{fontSize:18 ,color:"#D04848"}}>Please wait...</Text>
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    container:{
      flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:1,
        backgroundColor:'rgba(0,0,0,0.3)'
    },
    lottie:{
        height:100,
        width:200
    }

})