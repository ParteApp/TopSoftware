import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView ,TextInput , Alert} from 'react-native';
import TabBar from './TabBar';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactForm from './contactform';
import GuaranteeSection from './Guarantee';
import SocialLinksPage from './SocialLinksPage';
const Performance= () => {
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
        source={require('./performance.jpeg')} // First image
        style={styles.imageBackground}
      >
        <View style={styles.overlayContent}>
          <Text style={styles.customtext}>TUNING AND PERFORMANCE</Text>
          <TouchableOpacity
            style={styles.blockOption}
            onPress={() => {/* navigation code */}}
          >
            <Text style={styles.blockOptionText}>TALK TO AN EXPERT</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      
       
      <View style={styles.horizontalLayout}>
  
  <View style={styles.column}>
    <Text style={styles.headingText}>TRUCK TUNING</Text>
    <Text style={styles.subHeadingText2}>DIESEL TRUCK? YOU'RE IN LUCK </Text>
    <Text style={styles.subHeadingText}>Audio Techniks stands out as a leader in truck tuning, offering top-tier audio solutions that enhance every aspect of your driving experience. Specializing in custom installations and state-of-the-art sound systems, they ensure that each truck is not only optimized for performance but also for an immersive audio environment, making every journey a memorable one.</Text>

  </View>

  
  <View style={styles.column}>
    <Text style={styles.headingText}>CAR TUNING</Text>
    <Text style={styles.subHeadingText2}>CAR? LETS GO </Text>
    <Text style={styles.subHeadingText}>We understand that car enthusiasts still have a desire for performance enhancements. For gasoline-powered vehicles, we offer a wide range of tuning and exhaust systems from reputable brands.</Text>
    <Text style={styles.subHeadingText}>We offer tuning services for a wide range of new model vehicles. Typically the ECM (Engine Control Module) will need to be pulled from your vehicle and sent out to our trusted tuners. While some cars can be tuned with a plug-in tuner.</Text>
   
  </View>
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
    fontSize: 18, // Match the font size to your design
    fontWeight: '400',
    textAlign: 'left', // Align text to the left
    marginBottom: 10, 
  },
  offwhite: {
    
    color: '#EFEFEF',
    fontSize: 18, // Match the font size to your design
    fontWeight: '400',
    textAlign: 'left', // Align text to the left
    marginBottom: 10, 
  },
  bluetext:{
    color: 'lightblue',
    fontSize: 14, // Match the font size to your design
    fontWeight: '400',
    textAlign: 'left', // Align text to the left
    marginBottom: 10, 


  },
  horizontalLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 20,
    height :450,
    backgroundColor: 'lightgray',
  },
  column: {
    width: '50%', // This sets each column to take up half the width of the parent container
    padding: 10, // Add padding as necessary
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
   subHeadingText2: {
     color: 'white',
      fontSize: 24,
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

export default Performance;

