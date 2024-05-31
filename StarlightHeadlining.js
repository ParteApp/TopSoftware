import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ContactForm from './contactform';
import SocialLinksPage from './SocialLinksPage';
import GuaranteeSection from './Guarantee';
import TabBar from './TabBar';

const Card = ({ header, title, price, imageUri1, imageUri2, description }) => (
  <View style={styles.card}>
    <Text style={styles.cardHeader}>{header}</Text>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardPrice}>{price}</Text>
    <Image source={require('./starlight.png')} style={styles.cardImage} />
    <Image source={require('./truckicy.jpeg')} style={styles.cardImage} />
    <Text style={styles.cardDescription}>{description}</Text>
  </View>
);

const featuresData = [
  { id: '1', title: 'LIFETIME WARRANTY on Workmanship' },
  { id: '2', title: 'Creates a magical ambiance for you and your passengers'},
  // Add more features as needed
];

const FeatureCard = ({ title, description }) => (
  <View style={styles.featureCard}>
    {/* <MaterialIcons name="star" size={40} color="white" /> */}
    <Text style={styles.featureTitle}>{title}</Text>
    <Text style={styles.featureDescription}>{description}</Text>
  </View>
);

const StarlightHeadliningScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <TabBar/>
      <Image source={require('./startwo.jpeg')} style={styles.pic}/>
      <View style={styles.header}>
        <Text style={styles.service}> Our Services </Text>
        <Text style={styles.headerText}>STARLIGHT HEADLINING</Text>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>TALK TO AN EXPERT</Text>
      </TouchableOpacity>
        {/* Additional header elements can be added here */}
      </View>

      <View style={styles.mainContent}>
        <View style={styles.aboutSection}>
          <Text style={styles.aboutTitle}>About Our Starlight Headliners</Text>
          <Text style={styles.aboutText}>PROFESSIONAL STARLIGHT HEADLINING IN AZ</Text>
          <Text style={styles.aboutDescription}>
          Experience the enchantment of a star-filled night sky right inside your car by transforming the roof into a captivating galaxy. Hundreds of meticulously placed fiber-optic lights create a magical ambiance that can be tailored to your desired atmosphere using convenient controls in the front passenger compartment.



The process begins with expert craftsmanship, where the headliner is delicately perforated with precision, featuring between 800 to 1,600 carefully counted holes. Each hole serves as a perfect setting for the fiber-optic lights. Our skilled artisans ensure that the height of the fibers is accurately adjusted on the concealed side and flawlessly positioned on the visible surface, guaranteeing a dazzling display ready to illuminate your and your passengers’ journey.


            {/* Continue with your description text */}
          </Text>
        </View>

        <View style={styles.featuresContainer}>
          {featuresData.map(feature => (
            <FeatureCard key={feature.id} title={feature.title} />
          ))}
        </View>
      </View>

      <View style={styles.cardsContainer}>
        <Card
          header="BUILT IN THE LAB"
          title="Custom Headliner"
          price="PRICING AVAILABLE ON REQUEST"
          description="Share your vision with us and we will take it from there, making your dream headliner a reality!"
        />
        <Card
          header="DO IT AT HOME"
          title="Starlight Headliner DIY Kit"
          price="PRICING AVAILABLE ON REQUEST"
          description="Get a full kit with the supplies and tools necessary to build a starlight headliner in your own garage."
        />
      </View>
      <ContactForm/>
<GuaranteeSection/>
<SocialLinksPage/>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Assuming a dark theme from the screenshot
  },
  pic: {
    height: 300, // Keep the original size for all images
    width: '100%', // Ensure the width matches the screen width
    justifyContent: 'flex-end', // Align the button to the bottom of the image
    paddingLeft:100,
    paddingRight:50,
    
  },
  contentContainer: {

  },
  service:{
    fontSize:20,
    color:'white',
    paddingLeft:160,
    paddingTop:180
  },
  header: {
    // Style your header view here
    color:'white',
    backgroundColor:'grey',
    fontWeight:'bold',
    paddingBottom:'5',
    height:300,
    alignContent:'center',
    justifyContent:'center'
  },
  headerText: {
    fontSize: 55,
    color: '#fff',
    paddingBottom:10,
    paddingLeft:160,
    paddingRight:50,
    paddingTop:0,
    fontWeight:'1000'
    // Additional header text styling
  },
  mainContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop:30
  },
  aboutSection: {
    flex: 1,
    marginRight: 10,
    marginLeft:160,// Adjust the spacing as needed
    // Style your about section view here
  },
  aboutTitle: {
    fontSize: 20,
    color: '#3D4AFE',
    fontSize:20,
    paddingBottom:20,
    // Additional about title styling
  },
  aboutText:{
    fontSize:30,
    paddingBottom:20,
    color:'white',
    fontWeight:1000,
  },
  aboutDescription: {
    fontSize: 20,
    color: 'grey',
    fontFamily:'Stencil Std, fantasy',
    lineHeight: 40,
    paddingBottom:100
    // Additional about description styling
  },
  featuresContainer: {
    paddingTop:20,
    paddingHorizontal:200,
    // Style your features container here
  },
  featureCard: {
    flexDirection: 'row',
    backgroundColor: 'grey', // Adjust the background color to fit your theme
    borderRadius: 8,  
    padding: 16,
    marginBottom: 15,
    width:350
    // Additional feature card styling
  },
  featureTitle: {
    fontSize: 15,
    fontWeight:800,
    color: 'white',
    marginLeft:40 // Adjust the text color to fit your theme
    // Additional feature title styling
  },
  featureDescription: {
    fontSize: 15,
    color: '#333',
    fontWeight: 600,
    color:'white',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: '#3D4AFE',
    borderRadius: 5,
    width:200,
    marginLeft:160,
    marginBottom:50,    
    

  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    fontWeight:'200'
  },
  // ... other styles...
  cardsContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 200, // Consider reducing or adjusting based on overall width
    backgroundColor: 'grey',
    alignItems: 'center',   // Centers items vertically in the container
    justifyContent: 'center', // Centers items horizontally in the container
  },
  card: {
    backgroundColor: '#1C1C1E', // Dark card background
    borderRadius: 8,
    width: 600, // Specify the width of each card
    marginHorizontal: 10, // Spacing between cards
    padding: 16,
    alignItems: 'center', // Center the content within the card
  },
  cardHeader: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 1000,
    marginVertical: 4,
  },
  cardPrice: {
    color: '#3D4AFE', // Highlight color for the price
    fontSize: 20,
    marginVertical: 4,
  },
  cardImage: {
    width: '100%', // Full width of the card
    height: 150, // Fixed height, adjust as needed
    marginVertical: 8,
    resizeMode: 'cover', // or 'contain' to fit the entire image
  },
  cardDescription: {
    color: '#A5A5A7',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 8,
  },
  // ...other styles...
});

export default StarlightHeadliningScreen;
