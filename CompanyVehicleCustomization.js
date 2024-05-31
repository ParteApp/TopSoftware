import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import TabBar from './TabBar';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GuaranteeSection from './Guarantee';
import ContactForm from './contactform';
import SocialLinksPage from './SocialLinksPage';
// import CustomizationOptions from './CustomizationOptions'; // Import the CustomizationOptions component
const CompanyVehicleCustomization = () => {
  // const handleOptionSelect = (option) => {
  //   // Handle the selection here, such as navigation or state update
  //   console.log(option); // For demonstration purposes
  // };

  return (
    <View style={{ flex: 1 }}>
      <TabBar />
      <ScrollView style={styles.scrollViewContainer}>
      <ImageBackground
        source={require('./vallleyroofingtruck.jpeg')} // First image
        style={styles.imageBackground}
      >
        <View style={styles.overlayContent}>
          <Text style={styles.customtext}>Company Vehicle Customization</Text>
          <TouchableOpacity
            style={styles.blockOption}
            onPress={() => {/* navigation code */}}
          >
            <Text style={styles.blockOptionText}>START</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
   
        {/* <ImageBackground
          source={require('./liftedtruck.png')} // Second image, same as the first
          style={styles.imageBackground}
        > */}
          {/* Content on top of the second image */}
        {/* </ImageBackground> */}

      <View style={styles.textBlock}>
       <Text style={styles.bluetext}>CUSTOMIZE YOUR COMPANY VEHICLES</Text>
        <Text style={styles.whitetext}>EXCLUSIVE AUTO CUSTOMIZATION IN AZ</Text>
        <Text style={styles.offwhite}>
         At AudioTechniks, our dedication to meticulous craftsmanship and superior service is unwavering. Whether you desire a modest upgrade or an extensive overhaul, our skilled team is prepared to accommodate projects of any magnitude. We constantly evolve with the latest industry trends, innovations, and methods to guarantee our clientele the finest outcomes.
        </Text>
        <Text style={styles.offwhite}>
         Our robust alliances with elite automotive parts suppliers empower us to procure premium components for your vehicle. Should you seek a specific component elusive to others, we pledge to endeavor tirelessly to procure it. Recognizing the uniqueness of every customization endeavor, we engage in thorough dialogue with our patrons to grasp their individual tastes, ambitions, and financial considerations, customizing our offerings to align with their needs.
       </Text>
        <Text style={styles.offwhite}>
         Following our recent expansion and the inauguration of AudioTechniks, we have conceived an avant-garde facility, meticulously designed to furnish the pinnacle of client experiences. From the outset of consultation to the culmination of delivery, our ambition is to surpass expectations at every juncture. Our aspiration is to forge an inviting and stimulating milieu where visions are actualized.
        </Text>
        <Text style={styles.offwhite}>
         Our vibrant social media footprint and our influential industry presence testify to our fervor for our craft and our exuberance in exhibiting our expertise. We encourage you to peruse our portfolio of remarkable builds, showcasing the ingenuity and artistry we infuse into every project.
       </Text>
       <Text style={styles.offwhite}>
          Opting for AudioTechniks means entrusting your vehicle to connoisseurs who will bestow upon it the highest degree of attention and reverence. Our commitment to excellence and customer gratification is paramount with every venture we embrace.
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
    paddingLeft:100,
    paddingRight:50,
    
  },
  overlayContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  customtext: {
   
    color: 'white',
    fontfamily: 'oswald',
  fontSize: 50,
  fontWeight: '900', // A thinner weight can sometimes look sleeker
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
    fontSize: 40, // Match the font size to your design
    fontWeight: '700',
    textAlign: 'left', // Align text to the left 
  },
  offwhite: {
    
    color: '#EFEFEF',
    fontSize: 24, // Match the font size to your design
    fontWeight: '400',
    textAlign: 'left', // Align text to the left
    paddingBottom:30

  },
  bluetext:{
    color: 'dodgerblue',
    fontSize: 14, // Match the font size to your design
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

});

export default CompanyVehicleCustomization;

