import { View, Text } from "react-native";
import React, { useState } from "react";
import Input from "../components/form/Input";
import Loader from "../components/general/Loader";
import CustomButton from "../components/form/CustomButton";
import axios from "axios";
import Doctors_List from "../components/general/Doctors_List";
import { ScrollView } from "react-native-gesture-handler";

const Prediction = ({navigation,route}) => {
  const [loading, setloading] = useState(false);
  const [responseData, setresponseData] = useState();
  const [symptoms, setsymptoms] = useState();
  const [upres, setupres] = useState()
  const handlePrediction = async () => {
    try {
      setloading(true);
      const { data } = await axios.post("/prediction", { symptoms });
      console.log("Updated res", data);
      const stringData = data?.data
const responseString=stringData

// Regular expression to match "Doctor To Consult: " followed by any word
const doctorRegex = /Doctor To Consult: (\w+)/;

const match = responseString.match(doctorRegex);

if (match) {
  const doctor = match[1]; // Access the captured group (doctor name)
  console.log("Doctor to consult:", doctor);
  setupres(doctor) // Output: Doctor to consult: Cardiologist
} else {
  console.log("Doctor information not found in the response.");
}







      if (data) {
        setresponseData(data);
        setloading(false);
      }
    } catch (error) {
      setloading(false);

      alert(error);
    }
  };
  return (
    <ScrollView style={{flex:1, paddingTop:20}} >
      <Text style={{textAlign:"center" ,fontSize:35, fontWeight:"bold",marginBottom:20}} >Describe Your Symptoms</Text>
      <View>
        <Input
          label={"Enter Your Problem"}
          multiline={true}
          numberOfLines={4}
          value={symptoms}
          setValue={setsymptoms}
        />
        <CustomButton label={"Predict"} onPress={handlePrediction} />
        <Text style={{fontSize:16}}>{responseData?.data}</Text>
        <Text>{upres}</Text>

        
      </View>
      <View>{ responseData && <CustomButton label={"Consult Now" } onPress={()=>navigation.navigate("consult",{doctor:upres ? upres: ""})}/>}</View>
      {loading && <Loader />}
    </ScrollView>
  );
};

export default Prediction;
