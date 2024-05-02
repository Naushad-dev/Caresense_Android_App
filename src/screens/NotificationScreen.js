import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const NotificationScreen = () => {
  // Dummy notification data
  const notifications = [
    { id: 1, message: "You have a new message from John Doe." },
    {
      id: 2,
      message:
        "Appointment reminder: Your appointment with Dr. Smith is tomorrow.",
    },
    { id: 3, message: "New update available! Click here to install." },
    { id: 4, message: "Your payment has been processed successfully." },
    { id: 5, message: "Happy birthday! Enjoy 20% off on your next purchase." },
  ];

  // Render item function for FlatList
  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationText}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingTop: 80,
    paddingHorizontal: 10,
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  notificationItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  notificationText: {
    fontSize: 16,
    color: "#333333",
  },
});

export default NotificationScreen;
