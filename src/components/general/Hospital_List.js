import { View, Text, ScrollView } from "react-native";
import React from "react";
import Hosptial_card_card from "./Hospital_card";
import Hosptial_card from "./Hospital_card";

const Hospital_List = () => {
  return (
    <ScrollView className="flex-1 ">
      <Hosptial_card />
      <Hosptial_card />

      <Hosptial_card />

      <Hosptial_card />

      <Hosptial_card />

      <Hosptial_card />
    </ScrollView>
  );
};

export default Hospital_List;
