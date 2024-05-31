import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView ,TextInput , Alert} from 'react-native';
import TabBar from './TabBar';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactForm from './contactform';
import GuaranteeSection from './Guarantee';
import SocialLinksPage from './SocialLinksPage';
// import CustomizationOptions from './CustomizationOptions'; // Import the CustomizationOptions component
const screenHeight = Dimensions.get('window').height;
const LoweringSystems = () => {
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
        source={require('./loweringsystems.jpeg')} // First image
        style={styles.imageBackground}
      >
        <View style={styles.overlayContent}>
          <Text style={styles.customtext}>Lower your vehicle</Text>
          <TouchableOpacity
            style={styles.blockOption}
            onPress={() => {/* navigation code */}}
          >
            <Text style={styles.blockOptionText}>Lower now </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ScrollView style={styles.scrollViewContainer}>
       

      <View style={styles.textBlock}>
       <Text style={styles.bluetext}>ABOUT OUR LOWERING SYSTEMS</Text>
        <Text style={styles.whitetext}>PROFESSIONAL LOWERING KIT INSTALLATIONS IN AZ</Text>
        <Text style={styles.offwhite}>
        When it comes to lowering your car or truck, there are various options depending on the look and ride characteristics you're going for. There are different types of suspension systems for trucks and for cars, keep reading below to learn about the differences in these types of suspensions. Our trained sales professionals are always available to guide you in choosing the best suspension system based on your preferences and car no matter how much you already know.
        </Text>
        
      </View>
      <View style={styles.horizontalLayout}>
  {/* Column for Car Lowering Systems */}
  <View style={styles.column}>
    <Text style={styles.headingText}>CAR LOWERING SYSTEMS</Text>
    <Text style={styles.subHeadingText2}>Lowering Springs: </Text>
    <Text style={styles.subHeadingText}>Lowering springs are coil springs specifically designed to lower the ride height of a vehicle. They replace the factory springs and offer a lower spring rate, resulting in a lowered stance. Lowering springs can improve the vehicle's handling by reducing body roll and improving stability during cornering. They are a popular choice for enthusiasts looking for a cost-effective way to enhance the appearance and performance of their vehicle. However, it's important to note that lowering springs may result in a stiffer ride and can potentially impact ride quality and comfort.</Text>
    <Text style={styles.subHeadingText2}>Coilover Suspension System: </Text>

    <Text style={styles.subHeadingText}>A coilover suspension system combines coil springs and shock absorbers into a single unit. It offers adjustable ride height and damping characteristics, allowing for fine-tuning of the vehicle's suspension. Coilovers typically have threaded shock bodies that enable height adjustments, allowing the driver to achieve the desired ride height and performance balance. By adjusting the damping settings, coilovers can also provide a more comfortable or sportier ride. Coilovers are favored by performance-oriented drivers who want greater control over their vehicle's suspension and handling characteristics.</Text>
    <Text style={styles.subHeadingText2}>Air Ride Systems: </Text>
    <Text style={styles.subHeadingText}>Air ride systems, also known as air suspension, utilize airbags instead of traditional coil or leaf springs. These systems use compressed air to adjust the vehicle's ride height. Air ride systems offer the flexibility of adjusting the vehicle's suspension height according to specific driving conditions or personal preferences. With the ability to raise or lower the vehicle's stance, air ride systems can provide a comfortable ride quality and adjustable ride height for various driving situations. They are particularly popular for custom and show vehicles, as they allow for dramatic adjustments and provide a smooth and adjustable suspension.</Text>
   
  </View>

  {/* Column for Truck Lowering Systems */}
  <View style={styles.column}>
    <Text style={styles.headingText}>TRUCK LOWERING SYSTEMS</Text>
    <Text style={styles.subHeadingText2}>Drop Shackles: </Text>
    <Text style={styles.subHeadingText}>If your truck is equipped with leaf springs, we can install drop shackles. Drop shackles are designed to lower the rear of your truck, providing a more aggressive stance and improved aesthetics.</Text>
    <Text style={styles.subHeadingText2}>Coils & Coilovers: </Text>

    <Text style={styles.subHeadingText}>For trucks with coil suspension, we offer two options. Firstly, we can install smaller coils, which will lower the ride height of your truck while maintaining the factory coil suspension system. Alternatively, we can install coilovers, which are adjustable coil spring and shock absorber assemblies. Coilovers allow for precise ride height adjustments and provide enhanced handling characteristics.</Text>
    <Text style={styles.subHeadingText2}>Airbags: </Text>
    <Text style={styles.subHeadingText}>If your truck has factory coil suspension, we can also install airbags. Airbags provide adjustable suspension support and allow you to control the ride height and overall suspension stiffness according to your preferences. They are especially useful for towing or carrying heavy loads, as they help maintain optimal suspension performance.

</Text>
   
  </View>
</View>
<Text style={styles.subHeadingText2}>COST FACTORS FOR LOWERING YOUR VEHICLE </Text>
<View style={styles.horizontalLayout}>
  {/* Column for Car Lowering Systems */}
  <View style={styles.column}>
    <Text style={styles.headingText}>The Complexity of a Vehicles Suspension</Text>
<Text style={styles.subHeadingText}>The complexity of a vehicle's suspension system can vary significantly depending on the make, model, and trim level. Some vehicles, especially luxury or high-performance models, may have more advanced suspension setups with additional electronic components. These systems may require specialized tools, expertise, and more time to install the lowering kit properly, which can affect the overall cost.</Text>
   
    <Text style={styles.subHeadingText}>Different types of lowering systems have varying levels of complexity. For example, installing lowering springs tends to be less involved compared to installing a coilover suspension or an air ride system. Coilovers and air ride systems may require more intricate adjustments, additional components, and more labor time for installation, which can impact the overall cost.</Text>
    
  </View>

  {/* Column for Truck Lowering Systems */}
  <View style={styles.column}>
    
    <Text style={styles.subHeadingText2}>The Vehicles Condition</Text>
    <Text style={styles.subHeadingText}>The condition of the vehicle can also affect the pricing of a lowering kit installation. If the vehicle has rust, seized bolts, or other issues, additional time and effort may be required to remove and replace components. This can result in additional labor charges or the need for extra maintenance or repair work, which can increase the overall cost of the installation.</Text>
    <Text style={styles.subHeadingText2}>Additional Services or Modifications </Text>

    <Text style={styles.subHeadingText}>Sometimes, customers may opt for additional services or modifications in conjunction with the lowering kit installation. These could include alignment adjustments, suspension component upgrades, or addressing any pre-existing issues in the suspension system. The cost of these additional services will be factored into the overall pricing of the lowering kit installation.</Text>
    
   
  </View>
</View>
     
<View style={styles.textBlock}>
       <Text style={styles.bluetext}>ABOUT OUR LOWERING SYSTEMS</Text>
        <Text style={styles.whitetext}>PROFESSIONAL LOWERING KIT INSTALLATIONS IN AZ</Text>
        <Text style={styles.offwhite}>
        When it comes to lowering your car or truck, there are various options depending on the look and ride characteristics you're going for. There are different types of suspension systems for trucks and for cars, keep reading below to learn about the differences in these types of suspensions. Our trained sales professionals are always available to guide you in choosing the best suspension system based on your preferences and car no matter how much you already know.
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
    
    height: screenHeight / 1, // Keep the original size for all images
    width: '100%', // Ensure the width matches the screen width
     justifyContent: 'flex-start', // Align the button to the bottom of the image
    resizeMode: 'cover',
    // marginTop: '500',
  },
  overlayContent: {
    alignItems: 'center',
    // marginTop: '10',
    // paddingBottom: 20,
  },
  customtext: {
    

    color: 'white',
  fontSize: 80,
  fontWeight: '300', // A thinner weight can sometimes look sleeker
  fontFamily: 'HelveticaNeue-Light', // Replace with your custom font if you have one
  letterSpacing: 1, // This adds a bit of space between characters
  textShadowColor: 'rgba(0, 0, 0, 0.9)', // Increase the opacity for a darker shadow
    textShadowOffset: { width: 5, height: 5 }, // Increase the offset to make the shadow larger
    textShadowRadius: 10,
    
  // textShadowColor: 'rgba(0, 0, 0, 0.75)',
  // textShadowOffset: { width: -1, height: 1 },
  // textShadowRadius: 5,
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
    borderColor: 'black', // Add a black border
    borderWidth: 2, 
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
    height: 300, // Same height as the image
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
    fontSize: 24, // Match the font size to your design
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
    height :700,
    backgroundColor: 'lightgray',
  },
  
  sideImage: { // Corrected from sideImageStyle to sideImage
    flex: 1,
    resizeMode: 'cover',
    // marginTop:100,
  
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
    color: 'black',
     fontSize: 24,
     marginBottom: 10,
     fontWeight:800
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
  column: {
    width: '50%', // This sets each column to take up half the width of the parent container
 // Add padding as necessary
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
    color: 'black',
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

export default LoweringSystems;

