import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import GuaranteSection from '/Guarantee';
import ContactForm from './contactform';
import TabBar from './TabBar';

const Detailing = () => {
    return (
      <ScrollView style={styles.container}>
        <TabBar/>
        <Image
    source={require('./jeeplights.jpeg')} // Replace with the path to your actual left-side image
    style={styles.sideImage}
    resizeMode="cover" // Corrected this to match the style name below
  /> 
        <Text style={styles.header}>HOW MUCH DO OUR AUTO DETAILING SERVICES COST?</Text>
        <Text style={styles.description}>
          Our Basic and Full Detail Services typically take between 30 and 90 minutes to complete. While we work on your car, you can relax in our comfortable waiting room, which features free WiFi, ample space to set up a workspace or make calls, and complimentary coffee and snacks. You'll be able to keep a close eye on your car throughout the entire service, ensuring that it is in good hands.
        </Text>
        <View style={styles.cardContainer}>
          <ServiceCard 
            title="BASIC" 
            price="Starting at $70" 
            features={['Hand Wash and Dry', 'Vacuum Interior Carpets and Mats', 'Clean & Dress Dash, Vents, and Trim']} 
          />
          <ServiceCard 
            title="FULL DETAIL" 
            price="Starting at $250" 
            features={['Hand Wash and Dry', 'Vacuum Interior Carpets and Mats', 'Clean & Dress Dash, Vents, and Trim', 'Clean & Vacuum Trunk']}
          />
          <ServiceCard 
            title="RENEW" 
            subtitle="(Ceramic Coated Car)" 
            price="Starting at $400" 
            features={['Hand Wash and Dry', 'Vacuum Interior Carpets and Mats', 'Clean & Dress Dash, Vents, and Trim']}
          />  
          <ServiceCard 
            title="RENEW" 
            subtitle="(Non-Ceramic Coated Car)" 
            price="Starting at $800" 
            features={[
              'Hand Wash and Dry',
              'Vacuum Interior Carpets and Mats',
              'Clean & Dress Dash, Vents, and Trim',
              'Clean & Vacuum Trunk',
              'Deep Clean Carpets & Fabric',
              'Clean & Condition Leather/Fabric',
              'Deep Clean all Pockets and Cupholders'

            ]}
          />
        </View>   
        <ContactForm/>
        <GuaranteSection/>
      </ScrollView>
    );
  };

const ServiceCard = ({ title, subtitle, price, features }) => {
    return (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{title}</Text>
          {subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}
          <Text style={styles.cardPrice}>{price}</Text>
          <View style={styles.separator} />
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <Text style={styles.cardFeature}>{feature}</Text>
              {index < features.length - 1 && <View style={styles.separator} />}
            </React.Fragment>
          ))}
        </View>
      );
    };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211D1D', // adjust the color to match the screenshot
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // You can choose your color
    marginVertical: 8, // Adjust the spacing as needed
    width: '100%' // Ensure the line extends full width
  },
    
  sideImage: { // Corrected from sideImageStyle to sideImage
    flex:1, // Adjust this as needed
    height: 300, // Adjust this as needed
    resizeMode: 'contain', // Or 'cover', depending on how you want to handle the image scaling
   marginTop:100,
   paddingLeft:20,
   paddingRight:50,
  //  borderRadius: 1000,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color:'white'
  },
  sideImage: {
    height: 500, // Fixed height for all images
    width: '100%', // Ensure the width matches the screen width
    justifyContent: 'flex-end', // Align the button to the bottom of the image
    paddingLeft: 100,
    paddingRight: 50,
  },
  description: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
    color: 'grey'
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // changed from 'space-between' to 'flex-start'
    flexWrap: 'wrap',
    alignItems: 'flex-start', // ensures that cards align at their tops
  },
  card: {
    backgroundColor: 'black',
    padding: 20,
    width: '22%', // Adjusted width to make cards thinner
    margin: '1%', // Added margin to space out the cards
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'flex-start', // changed from 'center' to 'flex-start'
    flex: 1, // added to ensure cards expand to the same height within the container
    minHeight: 200, // Example fixed height, adjust as needed
  },
  cardTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 25,
    color: '#666',
    textAlign: 'center',
    
  },
  cardPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color:'white',
    textAlign: 'center',
    color:'lightblue',
  },
  cardFeature: {
    fontSize: 20,
    marginTop: 5,
    color:'white',
    textAlign: 'center',
  },
});

export default Detailing;
