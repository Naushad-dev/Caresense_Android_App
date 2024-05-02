import * as React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const images = [
  require('../../../assets/images/slider1.jpg'), // Replace with your image paths
  require('../../../assets/images/slider2.jpg'),
  require('../../../assets/images/slider3.jpg'),

  
];

const Carousal = () => {
  const width = Dimensions.get('window').width;

  return (
    
      <Carousel
        loop
        mode=''
        width={width}
        height={width / 2}
        autoPlay={true}
        data={images} // Use the images array
        scrollAnimationDuration={2000}
        renderItem={({ item }) => (
          <View
           style={{padding:16 ,marginVertical:8, borderRadius:20}}
          >
            <Image source={item} style={{ width: '100%', height: '100%' }} resizeMode='cover' />
          </View>
        )}
      />
    
  );
};

export default Carousal;
