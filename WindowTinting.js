import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import TabBar from './TabBar';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactForm from './contactform';
import GuaranteeSection from './Guarantee';
import SocialLinksPage from './SocialLinksPage';
// import CustomizationOptions from './CustomizationOptions'; // Import the CustomizationOptions component
const WindowTinting = () => {
  // const handleOptionSelect = (option) => {
  //   // Handle the selection here, such as navigation or state update
  //   console.log(option); // For demonstration purposes
  // };

  return (
    <View style={{ flex: 1 }}>
      <TabBar />
      <ImageBackground
        source={require('./corvtint.jpeg')} // First image
        style={styles.imageBackground}
      >
        <View style={styles.overlayContent}>
          <Text style={styles.customtext}>WINDOW TINTING</Text>
          <TouchableOpacity
            style={styles.blockOption}
            onPress={() => {/* navigation code */}}
          >
            <Text style={styles.blockOptionText}>BOOK NOW</Text>
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
       <Text style={styles.bluetext}>ABOUT OUR WINDOW TINTING</Text>
        <Text style={styles.whitetext}>PROFESSIONAL WINDOW TINT INSTALLATION IN AZ</Text>
        <Text style={styles.offwhite}>
        If you’re shopping around for window tints, you’ve likely already came across different types of warranties and pricing. The one thing you won’t see online is the true quality of a window tint job. You can see the quality clear as day, if you know what you’re looking for. Common things to look for are dust and debris under the film and the edge of the film not meeting with the edge of the glass, or jagged cut lines where the edge of the tint does not match the curve of the edge of the glass. No one is happy when they pay for a job and they see this. The truth is, most likely the installer will fix the issue but now you’ve wasted your time going to pick it up and if you didn’t catch it before you left then you now need to go back to the shop and leave your car there or wait in their non air conditioned waiting room to have it fixed. Save the headaches of going to someone who is half qualified.
        </Text>
       
      </View>
      <View style={styles.textBlock}>
       <Text style={styles.bluetext}>WINDOW TINTING COST FACTORS</Text>
        <Text style={styles.whitetext}>HERE ARE THE FACTORS TAKEN INTO CONSIDERATION WHEN PRICING EACH WINDOW TINT INSTALLATION</Text>
        <Text style={styles.bluetext}>Material Used</Text>
        <Text style={styles.offwhite}>You might call a wrap shop and ask for 20% tint. And yes, you will get 20% tint but you will most likely be getting the cheapest material on the market. There are shops who pump out quick $150 jobs all day long because the truth is, more than half of car owners do not care what window film is used, they just want to have the proper percentage of tint that they seek. The quality of film matters just as much as your trim level of your car did to you when purchasing it. The different options of film do make a difference and we suggest you become familiar with them on this page or talk about it with your sales rep before making your purchase.</Text>
        <Text style={styles.bluetext}>Vehicle Model</Text>
        <Text style={styles.offwhite}>Each vehicle has unique window shapes and sizes. Some vehicles have plastic or rubber tight to the glass making it harder to tint. So each vehicle has it’s own labor pricing factored into the total to make up for these differences.</Text>
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
    fontSize: 28, // Match the font size to your design
    fontWeight: '400',
    textAlign: 'left', // Align text to the left
    marginBottom: 10, 
  },
  offwhite: {
    
    color: '#EFEFEF',
    fontSize: 22, // Match the font size to your design
    fontWeight: '400',
    textAlign: 'left', // Align text to the left
    marginBottom: 10, 
    fontFamily:'Stencil Std, fantasy',
    
  },
  bluetext:{
    color: 'lightblue',
    fontSize: 22, // Match the font size to your design
    fontWeight: '400',
    textAlign: 'left', // Align text to the left
    marginBottom: 10, 
    // fontFamily:'Stencil Std, fantasy',


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

});

export default WindowTinting;

