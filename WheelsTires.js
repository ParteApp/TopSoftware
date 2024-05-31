import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView ,TextInput , Alert} from 'react-native';
import TabBar from './TabBar';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactForm from './contactform';
import GuaranteeSection from './Guarantee';
import SocialLinksPage from './SocialLinksPage';
// import CustomizationOptions from './CustomizationOptions'; // Import the CustomizationOptions component
const WheelsTires = () => {
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
        source={require('./tires.jpeg')} // First image
        style={styles.imageBackground}
      >
        <View style={styles.overlayContent}>
          <Text style={styles.customtext}>Wheels And Tires</Text>
          <TouchableOpacity
            style={styles.blockOption}
            onPress={() => {/* navigation code */}}
          >
            <Text style={styles.blockOptionText}>Talk to an expert </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ScrollView style={styles.scrollViewContainer}>
        {/* <ImageBackground
          source={require('./liftedtruck.png')} // Second image, same as the first
          style={styles.imageBackground}
        > */}
          {/* Content on top of the second image */}
        {/* </ImageBackground> */}

      <View style={styles.textBlock}>
       <Text style={styles.bluetext}>ABOUT OUR WHEELS & TIRES</Text>
        <Text style={styles.whitetext}>AFTERMARKET WHEEL & TIRE PACKAGES IN AZ</Text>
        <Text style={styles.offwhite}>
        Aftermarket wheels are a popular choice for car enthusiasts looking to enhance the overall appearance of their vehicles. At Legends Auto Boutique, we understand the importance of high-quality wheel installations and their impact on the look and performance of your car.
        </Text>
        <Text style={styles.offwhite}>
        With our investment in state-of-the-art mounting and balancing equipment, along with our skilled technicians, we ensure that your new wheels are installed with the utmost precision and care. Our equipment is specifically designed to minimize the risk of scuffing or scratching your wheels during the installation process. We take pride in delivering a flawless installation, giving you peace of mind, and preserving the pristine condition of your new wheels.
       </Text>
        <Text style={styles.offwhite}>
        Pairing your wheel installation with a lift kit for trucks or a lowering kit for cars is a great way to further enhance the overall aesthetic and performance of your vehicle. A lift kit can give your truck a more aggressive and commanding presence, while a lowering kit can provide a sleek and sporty look for your car. Our experienced team can guide you through the selection process, ensuring that you choose the right combination of wheels and suspension modifications to achieve your desired appearance and driving experience.
        </Text>
        
      </View>
      
      <View style={styles.horizontalLayout}>
  <Image
    source={require('./bunchofwheels.jpeg')} // Replace with the path to your actual left-side image
    style={styles.sideImage} // Corrected this to match the style name below
  />
  <View style={styles.textContainer}>
    <Text style={styles.headingText}> COST FACTORS</Text>
    <Text style={styles.subHeadingText}>HOW MUCH DOES IT COST TO UPGRADE MY VEHICLE'S WHEELS & TIRES IN AZ? </Text>
    <Text style={styles.subHeadingText}>Different factors can influence the pricing of wheels. Here are some additional details about those factors:</Text>
    <Text style={styles.subHeadingText}>1: Customization </Text>
    <Text style={styles.subHeadingText}>If you choose to customize your wheels with specific finishes, colors, or designs, it often involves a made-to-order process. This customization adds a personal touch but may come with additional costs due to the unique manufacturing and finishing required.</Text>
    <Text style={styles.subHeadingText}>2: Stocked Wheels </Text>
    <Text style={styles.subHeadingText}>Manufacturers often produce a range of pre-designed wheels that are ready for immediate purchase and installation. These stocked wheels are usually more budget-friendly compared to custom options since they are produced in larger quantities and don't require specific customization.</Text>
    <Text style={styles.subHeadingText}>3: Brand Name </Text>
    <Text style={styles.subHeadingText}>The reputation and prestige of the wheel brand can significantly impact the price. Established and well-known brands often command higher prices due to their quality, performance, and brand recognition. Lesser-known or budget-friendly brands may offer more affordable options.</Text>
    <Text style={styles.subHeadingText}> 4: Wheel Material</Text>
    <Text style={styles.subHeadingText}> The material used in manufacturing the wheels can also affect the price. Common wheel materials include aluminum alloy, steel, and forged or cast materials. Forged wheels, known for their strength and lightweight properties, are typically more expensive compared to cast wheels.</Text>
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
    height :950,
    backgroundColor: 'lightgray', 
  },
  
  sideImage: { // Corrected from sideImageStyle to sideImage
    width: '40%', // Adjust this as needed
    height: '100%', // Adjust this as needed
    resizeMode: 'cover', // Or 'cover', depending on how you want to handle the image scaling
   marginRight:20,
  //  borderRadius: 1000,
  },
  textContainer: {
    flex: 1,
  
   
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

export default WheelsTires;

