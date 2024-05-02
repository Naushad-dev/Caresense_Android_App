import { View, Text, ScrollView ,RefreshControl} from "react-native";
import React, { useEffect, useState } from "react";
import Doctor_card from "./Doctor_card";
import axios from "axios";

const Doctors_List = () => {
  const [doctorsList, setdoctorsList] = useState();
  const [refreshing, setrefreshing] = useState(false);

  const getDoctors = async () => {
    try {
      const { data } = await axios.get("/get-doctors");
      // console.log("all doctors ==> ", data?.doctors);
      setdoctorsList(data.doctors);
    } catch (error) {
      alert("Error: " + error);
      console.log("Error in doctors list", error);
    }
  };
  useEffect(() => {
    getDoctors();
  }, []);
  const onRefresh = () => {
    setrefreshing(true);
    setTimeout(() => {
     getDoctors()
      setrefreshing(false)
    }, 3000);
  };

  return (
    <ScrollView className="flex-1 " refreshControl={<RefreshControl size={'large'} onRefresh={()=> onRefresh()} refreshing={refreshing}/>}>
      {doctorsList?.map((doc,index) => {
        return (
          <Doctor_card
            key={index}
            name={doc.name}
            specialization={doc?.info?.specialization}
            id={doc._id}
            image={doc?.info?.profilepic}
          />
        );
      })}
    </ScrollView>
  );
};

export default Doctors_List;
