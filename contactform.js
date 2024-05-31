import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, Alert } from 'react-native';

const ContactForm = () => {
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
    <ImageBackground
        source={require('./ContactUspicture.jpeg')}
        resizeMode="cover"

        style={styles.imageBackground}
      >
       
      </ImageBackground>
      <Text style={styles.wei}> CONTACT US </Text>
      <Text style={styles.weiss}> (760)-625-9806 </Text>
      <Text style={styles.weismall}> Make your dream app or website into reality with Top Software engineers 

</Text>
      <View style={styles.formContainer}>
        {/* Form inputs */}
        
        <TextInput
          style={styles.input}
          placeholder="First Name *"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name *"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone *"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Email *"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="application or website"
          value={vehicleDetails}
          onChangeText={setVehicleDetails}
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Tell us what you're looking for: *"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity style={styles.checkboxContainer} onPress={() => setAgreeTerms(!agreeTerms)}>
          <Text style={styles.checkboxText}>{agreeTerms ? '[x]' : '[ ]'} I agree to terms of service and to receive text messages from the business.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>SUBMIT MESSAGE</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: 'black',// addded recently 
  },
  wei:{
    color: '#6ea7c1',
    fontSize: 42,
    fontWeight: 'bold',
    paddingTop:20,  
    paddingLeft:70,
    fontFamily: 'oswald',
  },
  weiss:{
    color: '#6ea7c1',
    fontSize: 32,
    fontWeight: 'bold',
    paddingTop:20,
    paddingLeft:70,
    fontFamily: 'oswald',
  },
  weismall:{
    fontFamily: 'oswald',
    paddingLeft: 80,
    color: '#6ea7c1',
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop:20,
    paddingBottom:20,
  },
  imageBackground: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customtext: {
    color: 'white',
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
    height: 300,
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
    backgroundColor: 'dodgerblue',
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

export default ContactForm;
