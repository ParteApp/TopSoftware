import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView,TextInput , Alert} from 'react-native';
import TabBar from './TabBar';
import { Image } from 'react-native';
import GuaranteSection from '/Guarantee';
import ContactForm from './contactform';
import SocialLinks from './SocialLinksPage';
const BodyKits = () => {
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
        source={require('./bodykitdesign.png')} 
        style={styles.imageBackground}
      >
        <View style={styles.overlayContent}>
          <Text style={styles.customtext}>BodyKits</Text>
          <TouchableOpacity
            style={styles.blockOption}
            onPress={() => {/* navigation code */}}
          >
            <Text style={styles.blockOptionText}>TALK TO AN EXPERT</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
   
        

      <View style={styles.textBlock}>
       <Text style={styles.bluetext}>ABOUT OUR BODY KITS</Text>
        <Text style={styles.whitetext}>PROFESSIONAL BODY KIT INSTALLATION IN AZ
        </Text>
        <Text style={styles.whitetext}>We specialize in a wide range of body modifications, including wide body kits and aerodynamic kit installations, to give your vehicle a unique and head-turning appearance. </Text>
        <Text style={styles.whitetext}> Our team of body specialists possesses extensive knowledge and expertise in installing body kits and working with carbon fiber materials. We understand the intricacies involved in achieving a flawless fit and finish, ensuring that the kit seamlessly integrates with your vehicle's existing body lines and contours.</Text>
        <Text style={styles.whitetext}> Aerodynamic upgrades, such as splitters, diffusers, and spoilers, can help reduce drag and increase downforce. By optimizing airflow around the vehicle, these upgrades improve stability, handling, and overall performance. Enhanced </Text>
        <Text style={styles.whitetext}>Wide body kits are designed to widen the fenders and overall body of your vehicle, creating a more aggressive and muscular stance. This modification not only enhances the visual appeal but also allows for the installation of wider wheels and tires, improving traction and handling performance. </Text>
        <Text style={styles.whitetext}> At AUDIO TECHNIKS, we take pride in our meticulous approach to body kit installations. Our specialists pay close attention to detail and ensure precise fitment, aligning every component to perfection. We prioritize quality craftsmanship, using industry-leading techniques and tools to deliver exceptional results. </Text>
      </View>
       
      



      <View style={styles.textBlock2}>
       <Text style={styles.bluetext}>BODY KIT COST FACTORS</Text>
        <Text style={styles.whitetext}>HOW MUCH DO BODY KIT INSTALLATIONS COST IN AZ?
        </Text>
        <Text style={styles.whitetext}>The cost of a body kit installation can vary depending on several factors. Here are some reasons why certain kits may be more expensive than others:</Text>
        <Text style={styles.whitetext}> Brand Name </Text>
        <Text style={styles.whitetext}> Well-known and reputable brands in the automotive industry often command higher prices due to their established reputation for quality and design.

      </Text>
        <Text style={styles.whitetext}> Material </Text>
        <Text style={styles.whitetext}> The material used for the body kit components can significantly affect the cost. Fiberglass Reinforced Plastic (FRP) kits are generally more affordable compared to carbon fiber kits, which tend to be more expensive due to their lightweight and high-performance characteristics.

      </Text>
       
      <Text style={styles.whitetext}> Car Model Compatibility </Text>
        <Text style={styles.whitetext}> Body kits designed specifically for certain car models may be more expensive compared to universal kits. Customized kits that are tailored to fit a particular car model precisely can be more costly.

      </Text>

      <Text style={styles.whitetext}> 
        </Text>
        <Text style={styles.whitetext}> The desired finish of the body kit components can also impact the cost. Carbon fiber components can be left in their raw material state, which showcases the unique carbon fiber weave. However, FRP components usually require additional steps such as painting or wrapping, which incurs additional costs for materials.

      </Text>
        
  </View>
     


<ContactForm/>
<GuaranteSection/>
<SocialLinks/>
</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    height: 650, // Keep the original size for all images
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
    height: 550, // Same height as the image
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#1A1A1A',
  },
  textBlock2: {
    height:730, // Same height as the image
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: 'black',
  },
  iconStyle: {
    fontFamily: 'MaterialCommunityIcons',
    // other styles...
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
  whitetext: {
    
    color: 'white',
    fontSize: 24, // Match the font size to your design
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
    fontSize: 34, // Match the font size to your design
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
    paddingLeft: 80,
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
  sliderContainer: {
    height: 200, // Adjust the height to fit the swiper appropriately
    width: '100%',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default BodyKits;

