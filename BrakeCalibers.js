import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView,TextInput , Alert } from 'react-native';
import TabBar from './TabBar';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GuaranteSection from '/Guarantee';
import ContactForm from './contactform';
import SocialLinksPage from './SocialLinksPage';
const BrakeCalibers = () => {
 
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
      <ImageBackground
        source={require('./brakecalipers.jpeg')} // First image
        style={styles.imageBackground}
      >
        <View style={styles.overlayContent}>
          <Text style={styles.customtext}> Custom Brake Calipers</Text>
          <TouchableOpacity
            style={styles.blockOption}
            onPress={() => {/* navigation code */}}
          >
            <Text style={styles.blockOptionText}>Talk to an expert</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ScrollView style={styles.scrollViewContainer}>
        

      <View style={styles.textBlock}>
       <Text style={styles.bluetext}>ABOUT OUR CUSTOM BRAKE CALIPERS</Text>
        <Text style={styles.whitetext}>PROFESSIONAL BRAKE CALIPER COLOR CHANGE IN AZ</Text>
        <Text style={styles.offwhite}>
        Brake Caliper Color Changes are becoming increasingly popular. More and more, we are beginning to see crazy colors behind people's wheels. What's interesting is when you are stopped, you may see less of the brake caliper showing when a vehicle is stationary, depending on how large the spokes on their wheels are. But when a vehicle is rolling, the calipers begin to become clearly visible to the human eye because the spokes spinning so fast allows you to see the brake caliper and rotor clearly. It's clear why people do this, and that's the reason you're on this page in the first place, I would like to assume you are considering getting your calipers changed to a cooler, more "you" color.
        </Text>
       
      </View>
      
      <View style={styles.textBlock}>
       <Text style={styles.bluetext}>HOW WE GET IT RIGHT</Text>
        <Text style={styles.whitetext}>WHY CHOOSE OUR BRAKE CALIPER CUSTOMIZATION?</Text>
        <Text style={styles.offwhite}>
        Our technicians were vetted vigorously, just like the rest of the personnel working under Audio Techniks roof. But on top of that, our Sales Team has incredible knowledge and will always steer you in the right direction whereas some shops will not. Here’s why:
        </Text>
        <Text style={styles.offwhite}>
        There are multiple ways of changing the color of a brake caliper. The most popular is PAINTING!
        </Text>
        <Text style={styles.offwhite}>
        When a caliper is PAINTED, most shops are notorious (yes, around here, too) for keeping the brake calipers ON the car and using an exorbitant amount of tape to cover the parts they don't want to get paint on. Essentially, the finished product is a caliper that, yes, looks great from far away. But up close, you may see some hidden spots where your factory brake caliper color is still poking out, you may see overspray on your wheel well liner, but most commonly, you will notice that if the wheels are off, you can poke your head in the back of the caliper and the whole back side was not fully painted and clear coated because it is hard to reach with a rattle can.
        </Text>
        <Text style={styles.offwhite}>
        Now if you are a fan of things done improperly, another shop’s painting services may be of interest to you.
        </Text>

        <Text style={styles.offwhite}>
        Here at Audio Techniks, we rarely like to paint calipers, but in some cases, we need to.
        </Text>
      </View>

      
      <ContactForm/>
        <GuaranteSection/>
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
  fontSize: 120,
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
    height: 650, // Same height as the image
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // padding: 20,
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
    fontSize: 27, // Match the font size to your design
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
  customtext: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
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

export default BrakeCalibers;

