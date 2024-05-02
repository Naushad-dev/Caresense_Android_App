import { View, Text, Modal } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from 'react-native-paper';
const CameraModal = ({handleCamera,handleGallery,showModal,setshowModal}) => {
  
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        style={{ marginTop: 25 }}
      >
        <View className=" p-8 m-6 mt-[280px] bg-gray-400 backdrop-filter backdrop-blur-lg rounded-lg ">
          <View className="flex justify-between flex-row">
          
            <MaterialCommunityIcons
              name="close"
              size={20}
              color={"green"}
              onPress={() => setshowModal(!showModal)}
            />
          </View>

          <Button className="bg-white mt-6 mb-4 " onPress={handleCamera}>
            Open Camera
          </Button>
          <Button className="bg-white mt-4" onPress={handleGallery}>
            Gallery
          </Button>
        </View>
      </Modal>
  )
}

export default CameraModal