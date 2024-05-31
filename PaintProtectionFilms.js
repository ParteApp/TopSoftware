import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import PricingPackageScreen from './PricingPackageScreen'; // Import the pricing package component
import TabBar from './TabBar';
import ContactForm from './contactform';
import GuaranteeSection from './Guarantee';
import SocialLinksPage from './SocialLinksPage';


const FeatureCard = ({ iconName, title, description }) => {
return (
    <View style={styles.featureCard}>
    {/* Adjust color as needed */}
    <View style={styles.featureTextContainer}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>{description}</Text>
    </View>
    </View>
);
};

const PaintProtectionFilm = () => {
return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingTop: 0}}>
      <TabBar/>
    <View style={styles.mainContent}>
        <View style={styles.textContainer}>
        <Text style={styles.title}>ABOUT OUR PPF</Text>
        <Text style={styles.header}>PROFESSIONAL PAINT PROTECTION FILM INSTALLATION IN ARIZONA</Text>
        <Text style={styles.paragraph}>
        Paint Protection Film (commonly referred to as PPF) is your new car’s best friend.
            </Text>

            <Text style={[styles.paragraph, { marginTop: 10 }]}>
Every car looks amazing right off the dealership lot, wouldn’t you like to keep it that way? Well unfortunately, cars don’t come with any protection on their paint so the second you drive that car off the lot, it is prone to rock chips. You may even get one on your first drive home. 
        </Text>
        <Text style={[styles.paragraph, { marginTop: 10 }]}>

The truth is, when a rock flies into a car, all of the energy is focused on the point of the rock which makes contact with the paint, which is a very very small area. Automotive paint is thin and does not have much flex, so when that rock hits, you will have a small chip which can eventually crack and peel. Day after day of driving without protection will result in hundreds of these paint chips.

</Text>
        <Text style={[styles.paragraph, { marginTop: 10 }]}>


You can touch up the chipped areas, but they will just keep coming back unless you protect your paint. (the only way to protect paint as of now is with PPF if you were wondering)

</Text>
        <Text style={[styles.paragraph, { marginTop: 10 }]}>


If you have PPF installed and a rock hits your car, the urethane layer of the film will flex when impacted, absorbing some of the force and spreading out the rest into a larger area, saving your paint from that tiny little chip.


</Text>
        <Text style={[styles.paragraph, { marginTop: 10 }]}>

Avoid paint chips, get your Paint Protection Film installed when your car is brand new and drive with confidence knowing your car will look new for years to come regardless of age or miles driven.
</Text>
            {/* Continue with the rest of the paragraph content */}

        {/* ... other text content */}
        </View>
        <View style={styles.featuresGrid}>
        <FeatureCard iconName="shield-check" title="11 YEAR WARRANTY" description="The Longest Warranty Offered on PPF in the state" />
        <FeatureCard iconName="auto-fix" title="Self-Healing" description="Self-Healing against small scratches" />
        <FeatureCard iconName="weather-sunny" title="UV Protection" description="UV Protection saves your paint from the sun" />
        <FeatureCard iconName="shield-star" title="Rock Chip Protection" description="Rocks fear PPF. Incredible Rock Chip Protection" /> 
        <FeatureCard iconName="car-wash" title="Scratch Resistant" description="Car Wash Bristles and drying towel scratches are a thing of the past" />
        {/* ... add more features as needed */}
        </View>
    </View>
    <GuaranteeSection/>
    <PricingPackageScreen />
    </ScrollView>
    
);
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000',
      flex:1,
    },
    mainContent: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
     
    },
    textContainer: {
      width: '60%',
      paddingRight: 40, // Added right padding to ensure space between text and features
    },
    title: {
      color: 'lightblue',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      paddingLeft:70
    },
    header: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 10,
      paddingLeft: 70
    },
    paragraph: {
      color: '#ccc',
      fontSize: 22,
      marginBottom: 40, // Increased bottom margin to add space between text and features
      paddingLeft: 70
    },
    featuresGrid: {
      width: '40%',
      marginTop: 0, // Adjust if needed to align with the top of the textContainer
    },
    featureCard: {
      flexDirection: 'column', // Changed to column for vertical layout
      alignItems: 'flex-start', // Align items to the start for the vertical layout
      backgroundColor: '#333',
      paddingVertical: 20, // Increased for vertical length
      paddingHorizontal: 20, // Decreased for horizontal width
      marginBottom: 20, // Space between cards
      width: '100%', // Card takes full width of its container
      borderRadius: 4,
      paddingRight:100,
    },
    featureTextContainer: {
      marginTop: 10, // Space between icon and text
    },
    featureTitle: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    featureDescription: {
      color: '#fff',
      fontSize: 14,
    },
    // If you have the button style from the previous screenshot you shared, include it here as well
    // button: { ... },
    // buttonText: { ... },
  });
  

export default PaintProtectionFilm;
