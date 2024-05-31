import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import TabBar from './TabBar';
import ContactForm from './contactform';
import GuaranteeSection from './Guarantee';
import SocialLinksPage from './SocialLinksPage';
const LiftKitCard = ({ title, description, imageSource }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
  );
};

const LiftKits = () => {
  return (
    
  
    <ScrollView style={styles.container}>
      {/*add tab bar */}
      < TabBar />
      <Text style={styles.header}>TYPES OF VEHICLE LIFTS AND LEVELING KITS WE OFFER</Text>
      <Text style={styles.description}>
        Now let’s talk business, you have a few options to bring the height of your truck up, whether you have a specific reason for it, such as improved off-road performance or towing capabilities, or you simply want to achieve a more imposing and powerful look, we have the solutions for you.
      </Text>
      {/* Add LiftKitCard components here */}
      <LiftKitCard
        title="COIL LIFT KITS"
        description="A coil lift kit is designed to replace the stock coil springs in a truck's suspension system. It typically includes taller and stiffer coil springs that provide increased ground clearance and lift the truck's body. Coil lift kits are commonly used in solid axle trucks and offer improved off-road capabilities and larger tire fitment. They can be customized to achieve different lift heights based on the specific requirements of the truck owner."
        imageSource={require('./girlbike.jpeg')} // Replace with your image path
      />
      <LiftKitCard
        title="COILOVER LIFT KIT"
        description="A coilover lift kit combines coil springs and shock absorbers into a single unit. These kits offer adjustable ride height and damping characteristics, allowing for precise control over the truck's suspension. Coilover lift kits are popular among off-road enthusiasts who want to fine-tune their truck's performance for different terrains. They provide enhanced handling, improved articulation, and can accommodate larger tires."
        imageSource={require('./lowcarblue.jpeg')}
      />
      {/* You can add more LiftKitCard components here */}
      <ContactForm/>
        <GuaranteeSection/>
        <SocialLinksPage/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211D1D', // Assuming a black background
   
  },
  header: {
    color: '#fff', // White text color
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    color: '#ccc', // Light gray text color for the description
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'black', // Dark gray card background
    borderRadius: 8,
    padding: 100,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  cardImage: {
    width: '100%', // Full width of the card
    height: 200, // Fixed height for the image
    borderRadius: 8, // Optional if you want rounded corners
  },
  cardTitle: {
    color: '#fff', // White text color for the title
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'left', // Align to the left
  },
  cardDescription: {
    color: '#ccc', // Light gray text color for the description
    fontSize: 16,
    textAlign: 'left', // Align to the left
    marginTop: 8,
  },
});

export default LiftKits;