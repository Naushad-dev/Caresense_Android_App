import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const BookingSuccessModal = ({ isVisible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Booking Successful!</Text>
        <Text style={styles.modalMessage}>Your appointment has been booked.</Text>
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#86efac',
    marginTop:200,
    marginHorizontal:20,
    borderRadius:20
     // Semi-transparent background
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default BookingSuccessModal;
