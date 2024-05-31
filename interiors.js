import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView,Alert, TextInput } from 'react-native';
import TabBar from './TabBar';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GuaranteeSection from './Guarantee';
import ContactForm from './contactform';
import SocialLinksPage from './SocialLinksPage';
// import CustomizationOptions from './CustomizationOptions'; // Import the CustomizationOptions component
const interiors = () => {
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
    <View style={{ flex: 1 }}>
      <TabBar />
      <ScrollView style={styles.scrollViewContainer}>
      <ImageBackground
        source={require('./bugatti.jpg')} // First image
        style={styles.imageBackground}
      >
        <View style={styles.overlayContent}>
          <Text style={styles.customtext}>Custom Interiors </Text>
          <TouchableOpacity
            style={styles.blockOption}
            onPress={() => {/* navigation code */}}
          >
            <Text style={styles.blockOptionText}>TALK TO AN EXPERT</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      
       

      <View style={styles.textBlock}>
       <Text style={styles.bluetext}>ABOUT CUSTOM INTERIORS</Text>
        <Text style={styles.whitetext}>THE ARIZONA CUSTOM INTERIOR PROFESSIONALS</Text>
        <Text style={styles.offwhite}>
        We spend an average of 17,600 minutes in our car, every year. That’s 293 hours. But for most of us car enthusiasts, we enjoy taking the long routes. It goes without say that we spend a good chunk of our days inside a car. Why not be in a gorgeous one of a kind interior?
        </Text>
        <Text style={styles.offwhite}>
        Finding a highly skilled leatherwork craftsman for car interiors can be a challenging task. It requires a combination of expertise, experience, and a meticulous attention to detail. The AudioTechniks team possesses the necessary skills and craftsmanship to excel in this specialized field.
       </Text>
        <Text style={styles.offwhite}>
        Our primary goal is to elevate the car ownership experience by transforming ordinary interiors into bespoke and luxurious spaces. We go beyond simply restoring a vehicle's interior to its original factory state. With our expertise, we can surpass factory levels of comfort and style, providing a truly exceptional and customized interior if desired.
        </Text>
        
      </View>
      
      
      <ContactForm/>
<GuaranteeSection/>
<SocialLinksPage/>
     


      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    height: 550, // Keep the original size for all images
    width: '100%', // Ensure the width matches the screen width
    justifyContent: 'flex-end', // Align the button to the bottom of the image
  },
  overlayContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  customtext: {
    
    color: 'white',
  fontSize: 80,
  fontWeight: '300', // A thinner weight can sometimes look sleeker
  fontFamily: 'HelveticaNeue-Light', // Replace with your custom font if you have one
  letterSpacing: 1, // This adds a bit of space between characters
  textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: { width: -1, height: 1 },
  textShadowRadius: 2,
  lineHeight: 95, // Adjust line height to your preference
  textAlign: 'center',
  opacity: 0.9, // Slightly see-through text can be sleek
  textDecorationLine: 'none', // No underline or line-through
  textTransform: 'uppercase',
  },
  blockOption: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20, // Space from the custom text
  },
  blockOptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  scrollViewContainer: {
    // No specific styles required here, but you can add padding if needed
  },
  textBlock: {
    height: 550, // Same height as the image
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: 'black',
  },
  iconStyle: {
    fontFamily: 'MaterialCommunityIcons',
    // other styles...
  },
  whitetext: {
    
    color: 'white',
    fontSize: 35, // Match the font size to your design
    fontWeight: '400',
    textAlign: 'left', // Align text to the left
    marginBottom: 10, 
  },
  offwhite: {
    
    color: '#EFEFEF',
    fontSize: 25, // Match the font size to your design
    fontWeight: '400',
    textAlign: 'left', // Align text to the left
    marginBottom: 10, 
  },
  bluetext:{
    color: 'lightblue',
    fontSize: 20, // Match the font size to your design
    fontWeight: '400',
    textAlign: 'left', // Align text to the left
    marginBottom: 10, 


  },
  horizontalLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    height :950,
    backgroundColor: 'lightgray',
  },
  
  sideImage: { // Corrected from sideImageStyle to sideImage
    width: 700, // Adjust this as needed
    height: 1000, // Adjust this as needed
    resizeMode: 'contain', // Or 'cover', depending on how you want to handle the image scaling
   marginTop:100,
  //  borderRadius: 1000,
  },
  textContainer: {
    flex: 1,
  
   height: 800,
   
  },
  headingText: {
   color: 'black',
    fontSize: 24,
   fontWeight: 'bold',
   marginBottom: 4,
  },
  subHeadingText: {
   color: 'black',
    fontSize: 18,
    marginBottom: 10,
  },
  customizationOptionsContainer: {
    marginTop: 20, // Adjust spacing as needed
  },
  customizationButton: {
    backgroundColor: '#EFEFEF', // Change color as needed
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  customizationButtonText: {
    color: 'black', // Change text color as needed
    fontSize: 16,
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
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 18,
    color: 'white',
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
  // customtext: {
  //   color: 'black',
  //   fontSize: 42,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  formContainer: {
    padding: 20,
    backgroundColor: '#1A1A1A',
  },
  wei:{
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    backgroundColor: '#1A1A1A',
  },
  weismall:{
    paddingLeft: 80,
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#1A1A1A',
  },

});

export default interiors;

