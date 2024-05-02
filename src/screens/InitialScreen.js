

import { Dimensions, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import Onboarding from "react-native-onboarding-swiper";
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const InitialScreen = ({navigation}) => {
  return (

    <View style={{ flex: 1 }}>
    <StatusBar animated={true} backgroundColor="#8FD6E1" hidden={true} />
      <Onboarding
        containerStyles={{ paddingHorizontal: 15 }}
        onDone={()=>navigation.navigate("register")}
        onSkip={()=>navigation.replace("register")}
        pages={[
          {
            backgroundColor: '#427D9D',
            image: <View >
              <LottieView
              
                source={require('../../assets/animations/Doc1.json')}
                autoPlay
                loop
                style={styles.lottie}
              />
            </View>,
            title: 'Welcome to CareSense360',
            subtitle: 'Your Health, Your Way',
          },
          {
            backgroundColor: '#8FD6E1',
            image: (
              <View>
                <LottieView
                  source={require('../../assets/animations/Doc2.json')}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              </View>
            ),
            title: 'CareSense360 Connect',
            subtitle: 'Discover a Healthier You"',
          },
          {
            backgroundColor: '#186F65',
            image: (
              <View>
                <LottieView
                  source={require('../../assets/animations/MultiTask.json')}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              </View>
            ),
            title: 'Your HealthHub',
            subtitle: 'Empowering Your Wellness Journey',
          },
        ]}
      />
    </View>
   
  )
}

export default InitialScreen;

const styles = StyleSheet.create({
  lottie: {
    width: width * 0.9,
    height:width,
  },
})