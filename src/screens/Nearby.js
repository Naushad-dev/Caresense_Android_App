import { SafeAreaView, StyleSheet, Text, View, useWindowDimensions  } from 'react-native'
import React, { useState } from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Hospital_List from '../components/general/Hospital_List';
import Doctors_List from '../components/general/Doctors_List';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'white' }}
    style={{ backgroundColor: '#86efac', paddingTop:30 }}
  />
);

const renderScene = SceneMap({
  doctors: Doctors_List,
  hospitals: Hospital_List,
});

const Nearby = () => {
  const layout = useWindowDimensions();

  
  const [index, setIndex] = useState(0);


  const [routes] = useState([

    { key: 'doctors', title: 'Doctos' },
    { key: 'hospitals', title: 'Hospitals' },
  ]);
  return (
    <SafeAreaView style={styles.container} >
    <TabView
    navigationState={{ index, routes }}
    onIndexChange={setIndex}
    renderScene={renderScene}
    renderTabBar={renderTabBar}
    swipeEnabled={true}
    initialLayout={{ width: layout.width }}
    
  />
    </SafeAreaView>
 
  )
}

export default Nearby

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
  });