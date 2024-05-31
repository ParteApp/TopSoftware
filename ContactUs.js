import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, Alert } from 'react-native';
import TabBar from './TabBar';
import ContactForm from './contactform';
const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleDetails, setVehicleDetails] = useState('');
  const [message, setMessage] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = () => {
    if (agreeTerms) {
      Alert.alert('Form Submitted', 'Thank you for your message. We will get back to you shortly.');
    } else {
      Alert.alert('Terms Not Agreed', 'Please agree to the terms of service before submitting.');
    }
  };

  return (
    <View>
      
      < TabBar />
    <ContactForm/>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: 'black',// addded recently 

    flex: 1,
  },
  wei:{
    color: 'black',
    fontSize: 42,
    fontWeight: 'bold',
  },
  weismall:{
    paddingLeft: 80,
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  imageBackground: {
    height: 300,
   
  },
  customtext: {
    color: 'black',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formContainer: {
    padding: 20,
    backgroundColor: 'black'
  },
  input: {
    color:"white",
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 15,
  },
  sickio:{
    backgroundColor: 'white',
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top', // Align text at the top on Android
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 18,
  },
  submitButton: {
    backgroundColor: '#0000ff',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  // You can add more styles if you need
});

export default ContactUs;
