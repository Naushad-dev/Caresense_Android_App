import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import CustomButton from "../components/form/CustomButton";

const Explore = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 pt-8 ">
      <View className=" flex-1 justify-center">
        <View className="h-24  mb-2 flex justify-center">
          <CustomButton
            label={"Predict"}
            onPress={() => navigation.navigate("prediction")}
          />
        </View>
        <View className="h-24  mb-2 flex justify-center">
          <CustomButton
            label={"Scan What you EAT !"}
            onPress={() => navigation.navigate("nutrisnap")}
          />
        </View>
        <View className="h-24  mb-2 flex justify-center">
          <CustomButton
            label={"V-Doc"}
            onPress={() => navigation.navigate("Vdoc")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Explore;
