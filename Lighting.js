import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import TabBar from './TabBar';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GuaranteeSection from './Guarantee';
import ContactForm from './contactform';
import SocialLinksPage from './SocialLinksPage';
// import CustomizationOptions from './CustomizationOptions'; // Import the CustomizationOptions component
const Lighting= () => {
  // const handleOptionSelect = (option) => {
  //   // Handle the selection here, such as navigation or state update
  //   console.log(option); // For demonstration purposes
  // };

  return (
    <View style={{ flex: 1 }}>
      <TabBar />
      <ScrollView style={styles.scrollViewContainer}>
      <ImageBackground
        source={require('./lightbottom.jpeg')} // First image
        style={styles.imageBackground}
      >
        <View style={styles.overlayContent}>
          <Text style={styles.customtext}>CUSTOM LIGHTING</Text>
          <TouchableOpacity
            style={styles.blockOption}
            onPress={() => {/* navigation code */}}
          >
            <Text style={styles.blockOptionText}>TALK TO AN EXPERT</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
   
      

      <View style={styles.textBlock}>
       <Text style={styles.bluetext}>OUR STORY</Text>
        <Text style={styles.whitetext}>PROFESSIONAL RETROFITTER IN AZ</Text>
        <Text style={styles.offwhite}>
        Custom lighting in cars elevates both the aesthetics and functionality of a vehicle, offering a personalized touch that sets it apart. From LED underbody lights that add a striking glow to the exterior, to ambient interior lighting systems that can adjust color and intensity based on mood or need, custom lighting solutions enhance the driving experience. These modifications not only improve visibility and safety but also reflect the driver's personality, making every ride uniquely enjoyable. Whether for practical purposes like better nighttime visibility or purely stylistic enhancements, custom lighting is an essential aspect for automotive enthusiasts seeking to customize their ride.
        </Text>
        <Text style={styles.offwhite}>
        Retrofitting is the process of enhancing or modernizing existing systems, structures, or components to meet evolving needs and leverage technological advancements. It offers a cost-effective and efficient solution by integrating new features without the need for a complete system or structure replacement.
       </Text>
       
      </View>
      
      <View style={styles.contentRow}>
            <View style={styles.textContent}>
              <Text style={styles.contentTitle}>WE ARE THE TOP INSTALLERS FOR LIGHTING IN ARIZONA!</Text>
              <Text style={styles.contentText}>
              Whether you’re looking for ambient lighting to enhance the mood of your interiors or need robust outdoor lighting solutions, we are your premier choice in Arizona. Our expert team specializes in delivering meticulously installed and highest quality lighting systems tailored to your needs. From energy-efficient LED setups to elegant outside lighting, our state-of-the-art solutions will illuminate your car perfectly, ensuring both beauty and functionality. Trust us to light up your car with precision and style.
              </Text>
            </View>
            <Image
              source={require('./purplelight.jpeg')} // Replace with your image url
              style={styles.contentImage}
            />
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
    paddingLeft:100,
    paddingRight:50,
    
  },
  overlayContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  customtext: {
   
    color: 'white',
  fontSize: 80,
  fontWeight: '450', // A thinner weight can sometimes look sleeker
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
    backgroundColor: 'dodgerblue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20, // Space from the custom text
  },
  blockOptionText: {
    fontSize: 20,
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
  },
  offwhite: {
    
    color: '#EFEFEF',
    fontSize: 25, // Match the font size to your design
    fontWeight: '400',
    textAlign: 'left', // Align text to the left
    fontFamily:'Stencil Std, fantasy',
  },
  bluetext:{
    color: 'dodgerblue',
    fontSize: 20, // Match the font size to your design
    fontWeight: '400',
    textAlign: 'left', // Align text to the left


  },
  horizontalLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    height :950,
    backgroundColor: 'lightgray',
  },
  
  sideImage: { // Corrected from sideImageStyle to sideImage
    width: 700, // Adjust this as needed
    height: 1000, // Adjust this as needed
    resizeMode: 'contain', // Or 'cover', depending on how you want to handle the image scaling
   marginTop:100,
   paddingLeft:20,
   paddingRight:50,
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
   paddingLeft:90,
   paddingRight:90,
  },
  subHeadingText: {
   color: 'black',
    fontSize: 18,
    marginBottom: 10,
    paddingLeft:90,
    paddingRight:90,
  },
  customizationOptionsContainer: {
    marginTop: 20, // Adjust spacing as needed
    paddingLeft:90,
    paddingRight:90,
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
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center', // This ensures that the image and text align nicely
    padding: 20, // Add padding as needed
  },
  textContent: {
    flex: 1,
  },
  contentTitle: {
    fontSize: 28,
    fontFamily: 'oswald',
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 10,
  },
  contentText: {
    fontSize: 18,
    color: 'purple',
    fontFamily: 'oswald',
  },
  contentImage: {
    width: 200, // Set image width as needed
    height: 200, // Set image height as needed
    marginLeft: 20, // Add some space between the text and the image
  },
  // ...rest of your styles...
});


export default Lighting;

