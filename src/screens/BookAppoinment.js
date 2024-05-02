import { Pressable, SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import React, { useContext, useState } from "react";
import Input from "../components/form/Input";
import DateTimePicker from "@react-native-community/datetimepicker";
import BookingSuccessModal from "../components/general/BookingSuccessModal";
import { AuthContext } from "../state/AuthContext";
import CustomButton from "../components/form/CustomButton";
import axios from "axios";

const BookAppoinment = ({ route }) => {
  const { doctorId } = route.params;
  console.log("doctorid", doctorId);

  const [date, setDate] = useState(new Date()); // Use setDate for consistency
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isBookingSuccessful, setIsBookingSuccessful] = useState(false); // State to track booking success
  const [name, setName] = useState("");
  const { authState } = useContext(AuthContext);

  console.log("user id", authState.Userid);

  const BookingHandler = async () => {
    try {
      const payload = {
        name: name,
        userId: authState.Userid,
        doctorId: doctorId,
        timing: date, // Assuming `date` holds the selected date object
      };
      const { data } = await axios.post("/booking", payload);

      console.log(data);
      if (data.success) {
        setIsBookingSuccessful(true);
        setName("");
        setDate(new Date()); // Reset date to avoid stale values
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleCloseModal = () => {
    setIsBookingSuccessful(false);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const onChange = (event, selectedDate) => { // Use event object for type check
    if (selectedDate) {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === "android") {
        toggleDatePicker();
      }
    } else {
      toggleDatePicker();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: 80 }}>
        <View>
          <Text style={{ textAlign: "center", fontSize: 25 }}>
            Book Appointment Now
          </Text>
        </View>
        <View>
          <Input label={"Enter Name"} value={name} setValue={setName} />
          {showDatePicker && (
            <DateTimePicker value={date} mode="date" display="spinner" onChange={onChange} />
          )}
        </View>
        <Pressable onPress={toggleDatePicker}>
          <Input
            label={"Appointment Date"}
            editable={false}
            value={date ? date.toDateString() : ""} // Handle null date case
          />
        </Pressable>
      </View>
      <View>
        <CustomButton label={"Book"} onPress={BookingHandler} />
      </View>
      <BookingSuccessModal
        isVisible={isBookingSuccessful}
        onClose={handleCloseModal}
      />
    </SafeAreaView>
  );
};

export default BookAppoinment;

const styles = StyleSheet.create({});
