import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../state/AuthContext";
import NotFound from "../components/general/NotFound";
import AppointmentCard from "../components/general/AppointmentCard";

const UserAppointments = () => {
  const { authState } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);
  const [refreshing, setrefreshing] = useState(false);
  // Use plural for clarity
  //http://localhost:6969/api/v1/get-booking?userId=65e75ca20e8264665bb35b84
  const userID = authState?.Userid;
  console.log("User id for appointments", userID);
  const getAllAppointments = async () => {
    try {
      const { data } = await axios.get(`/get-booking?userId=${userID}`);
      setAppointments(data?.bookings || []); // Set to empty array if no bookings
    } catch (error) {
      alert("Error: " + error);
      console.log("Error in fetching user appointments", error);
    }
  };
  const onRefresh = () => {
    setrefreshing(true);
    setTimeout(() => {
      getAllAppointments();
      setrefreshing(false)
    }, 3000);
  };

  useEffect(() => {
    getAllAppointments();
  }, []);

  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={() => onRefresh()} />
      }
    >
      <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "bold" }}>
        All Appointments
      </Text>
      {appointments.length === 0 ? (
        <NotFound />
      ) : (
        <View>
          {appointments.map((appointment) => (
            <AppointmentCard
              key={appointment._id}
              Doctor={appointment.doctor?.name}
              AppointmentTime={appointment?.appointment}
              specialization={appointment?.doctor?.info?.specialization}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default UserAppointments;

const styles = StyleSheet.create({});
