import React from 'react';
import { View, Text, StyleSheet, ScrollView,ImageBackground ,TouchableOpacity } from 'react-native';
import TabBar from './TabBar';
import GuaranteeSection from './Guarantee';
import ContactForm from './contactform'
const Feature = ({ iconName, title }) => {
  return (

    <View style={styles.featureContainer}>

      <Text style={styles.featureText}>{title}</Text>
    </View>
    
  );
};

const SoundSystemScreen = () => {
  return (
  
    <ScrollView style={styles.container}>
      <TabBar/>
      <ImageBackground
        source={require('./soundy.jpeg')} 
        style={styles.imageBackground}
      >
        <View style={styles.overlayContent}>
          <Text style={styles.customtext}>Sound Systems</Text>
          <TouchableOpacity
            style={styles.blockOption}
            onPress={() => {/* navigation code */}}
          >
            <Text style={styles.blockOptionText}>TALK TO AN EXPERT</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.mainContent}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>ABOUT OUR SOUND SYSTEMS</Text>
          <Text style={styles.header}>CUSTOM CAR SOUND SYSTEMS DESIGN AND INSTALLATION IN AZ</Text>
          <Text style={styles.paragraph}>
            A customized audio system enhances the overall driving experience by providing high-quality sound and a personalized ambience. Whether you're on a long road trip or simply commuting, the upgraded audio system can make your time in the car more enjoyable and entertaining.
          </Text>
          {/* ... other text content */}
        </View>
        <View style={styles.featuresGrid}>
          <Feature iconName="car-hatchback" title="Seamless, Factory-Like Installation" />
          <Feature iconName="music-note-eighth" title="Improved Sound Quality" />
          <Feature iconName="bass-clef" title="Enhanced Bass Response" />
          <Feature iconName="account-tie" title="Personalization and Customization" />
          <Feature iconName="currency-usd" title="Increased Resale Value" />
          <Feature iconName="volume-high" title="Increased Volume and Power Handling" />
          {/* ... add more features as needed */}
        </View>
      </View>
      <ContactForm/>
      <GuaranteeSection/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      
 // Increased padding
    },
    imageBackground:{
      height: 450, // Keep the original size for all images
    width: '100%', // Ensure the width matches the screen width
    justifyContent: 'flex-end',
    },
    mainContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textContainer: {
      width: '50%',
      padding: 50, // Added padding inside text container
    },
    featuresGrid: {
      width: '50%',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      padding: 30, // Added padding inside features grid
    },
    featureContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#333',
      padding: 30, // Increased padding
      marginBottom: 30, // Increased spacing between features
      width: '100%',
    },
    featureText: {
      color: '#fff',
      fontSize: 35, // Increased font size
      marginLeft: 20, // Increased spacing
    },
    title: {
      color: 'lightblue',
      fontSize: 22, // Increased font size
      fontWeight: 'bold',
      marginBottom: 10,
    },
    header: {
      color: '#fff',
      fontSize: 30, // Increased font size
      fontWeight: 'bold',
      marginBottom: 15,
    },
    paragraph: {
      color: '#bbb',
      fontSize: 33, // Increased font size
      marginBottom: 20,
    },
    overlayContent: {
      alignItems: 'center',
      paddingBottom: 20,
    },
    customtext: {
      color: 'white',
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center',
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
  });
export default SoundSystemScreen;
