import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import GuaranteeSection from './Guarantee'; // Import the pricing package component
import TabBar from './TabBar'
import ContactForm from './contactform';
import SocialLinksPage from './SocialLinksPage';

const FeatureCard = ({ iconName, title, description }) => {
return (
    <View style={styles.featureCard}>
    <View style={styles.featureTextContainer}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>{description}</Text>
    </View>
    </View>
);
};

const PowderCoating = () => {
return (
    <ScrollView style={styles.container}>
      <TabBar/>
    <View style={styles.mainContent}>
        <View style={styles.textContainer}>
        <Text style={styles.title}>ABOUT OUR POWDER COATING SERVICE</Text>
        <Text style={styles.header}>PROFESSIONAL POWDER COATING IN AZ</Text>
        <Text style={styles.paragraph}>
        Discover the difference of Powder Coating your vehicle. On this page you can learn all about our Powder Coating Service at AudioTechniks
            </Text>

            <Text style={[styles.paragraph, { marginTop: 10 }]}>
            WHAT IS POWDER COAT? 
        </Text>ur
        <Text style={[styles.paragraph, { marginTop: 10 }]}>

        Powder coat is composed of a fine, powdery dust, hence the name “Powder” coat. This powder is applied to metal products using a special process. Unlike paint, which requires a liquid solvent to carry the pigment and binder, powder coat is dry and does not contain any solvents. Instead, the powder particles are attracted to the metal surface through an electrostatic charge, creating a thick and even layer.


</Text>
        <Text style={[styles.paragraph, { marginTop: 10 }]}>


        WHY YOU NEED POWDER COATING

</Text>
        <Text style={[styles.paragraph, { marginTop: 10 }]}>


        It's important to note that when it comes to metal parts undergoing a color change, powder coating is a necessity. The unique properties of powder coat, such as its durability and ability to adhere to metal surfaces, make it the ideal choice for achieving vibrant, long-lasting color transformations.




</Text>
        <Text style={[styles.paragraph, { marginTop: 10 }]}>

        Our team takes the time to do powder coating the right way. As detailed above, we have refined the process for powder coating, producing the highest quality finish in the industry. We are proud to provide a beautiful and strong product – we can’t wait to see how your chosen Powder Coat color looks on your vehicle!
</Text>
            {/* Continue with the rest of the paragraph content */}

        {/* ... other text content */}
        </View>
        <View style={styles.featuresGrid}>
        <FeatureCard iconName="
        
        " title="" description="BEST Quality Powder Coat Finish in Arizona (yes, we’ve compared the competition)" />
        <FeatureCard iconName="auto-fix" title="" description="BEST Turn Around Times" />
        {/* ... add more features as needed */}
        </View>
    </View>
    <GuaranteeSection/>
    <ContactForm/>
    <SocialLinksPage/>
    </ScrollView>
);
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    mainContent: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      padding: 20,
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
  

export default PowderCoating;
