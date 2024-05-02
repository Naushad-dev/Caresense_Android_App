import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomButton from "../components/form/CustomButton";

const DoctorInfo = ({ route,navigation }) => {
  const { Itemid } = route.params;
  console.log("id of doc", Itemid);
  const [docData, setdocData] = useState();
  const [opening, setopening] = useState();
  const [closing, setclosing] = useState();

  const getDocDetails = async (Itemid) => {
    const { data } = await axios.get(`/get-doctor-profile?doctorId=${Itemid}`);
    console.log("Doctors Info ", data);
    setdocData(data?.doctor);
    const timestampString1 =  docData?.info?.openingTime;
    const timestampString2 =  docData?.info?.closingTime;

    const time1 = timestampString1?.slice(11, 19);
    const time2= timestampString2?.slice(11, 19);
    console.log(time1,time2);
    setopening(time1);
    setclosing(time2);
  };

  useEffect(() => {
    getDocDetails(Itemid);
  }, []);
  return (
    <View className="flex-1 pt-8">
      <Text className="text-center text-2xl">Doctor Details</Text>
      <View className=" my-4 flex flex-row p-4 shadow-lg rounded-lg mx-4">
        <View>
          <Image
            className="rounded-xl mr-10"
            source={{
              uri: docData?.info?.profilepic ||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRECWxY9RPTChUABfN3UAc73uSH6Gh2eiwewQ&usqp=CAU",
            }}
            height={160}
            width={160}
          />
        </View>
        <View className="pt-4">
          <Text className="text-[16px] mb-2 font-bold text-gray-900 " numberOfLines={3}>
            {docData?.name || "Doc Name"}
          </Text>
          <Text>{docData?.info?.specialization || "Doctor Specializtion"}</Text>
        </View>
      </View>
      <View
        className="my-3
      mx-4  px-4 py-8 "
      >
        <View className="flex flex-row gap-2 items-center mb-2 bg-white py-2 px-2 rounded-sm">
          <Text className="text-base font-medium">Email:</Text>
          <Text className="text-base"> {docData?.email || "Doc Email"}</Text>
        </View>
        <View className="flex flex-row gap-2 items-center mb-2 bg-white py-2 px-2 rounded-sm">
          <Text className="text-base font-medium">Experience:</Text>
          <Text className="text-base">
            {" "}
            {docData?.info?.experience + " yrs" || "Experience" + "yrs"}
          </Text>
        </View>

        <View className="flex flex-row gap-2 items-center mb-2 bg-white py-2 px-2 rounded-sm">
          <Text className="text-base font-medium">Licence No. :</Text>
          <Text className="text-base">
            {" "}
            {docData?.info?.licenseNumber || "Licence Number"}
          </Text>
        </View>

        <View className="flex flex-row gap-2 items-center mb-2 bg-white py-2 px-2 rounded-sm">
          <Text className="text-base font-medium">Address:</Text>
          <Text className="text-base">
            {docData?.info?.address || "Address"}
          </Text>
        </View>

        <View className="flex flex-row gap-2 items-center mb-2 bg-white py-2 px-2 rounded-sm">
          <Text className="text-base font-medium">Consultation Fees:</Text>
          <Text className="text-base">
            {" "}
            {"₹ " + docData?.info?.feesPerConsultation}
          </Text>
        </View>
        <View className="flex flex-row gap-2 items-center mb-2 bg-white py-2 px-2 rounded-sm">
          <Text className="text-base font-medium">MON - FRI:</Text>
          <Text className="text-base"> {opening?.slice(0,-3) || "10.00"}</Text>
          <Text className="text-base"> {closing?.slice(0,-3) || "12.00"} </Text>
        </View>
        <View className="flex flex-row gap-2 items-center mb-2 bg-white py-2 px-2 rounded-sm">
          <Text className="text-base font-medium">Website</Text>
          <Text className="text-base"> {docData?.info?.website}</Text>
        </View>
      </View>
      <View>
        <CustomButton label={"Book Appointment"}  onPress={()=>navigation.navigate("Booking",{doctorId:Itemid})}/>
      </View>
    </View>
  );
};

export default DoctorInfo;

const styles = StyleSheet.create({});
