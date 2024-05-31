import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const Separator = () => <View style={styles.separator} />;

const PackageCard = ({ title, price, description, items, number, recommended }) => {
  return (
    <View style={[styles.packageCard, recommended && styles.recommended]}>
      <Image source={require('./tires.jpeg')} style={styles.packageImage} />
      <Text style={styles.packageTitle}>{title}</Text>
      <Text style={styles.packagePrice}>{price}</Text>
      <Text style={styles.Number}>{number}</Text>
      <Text style={styles.packageDescription}>{description}</Text>
      <Separator />
      {items.map((item, index) => (
        <Text key={index} style={styles.packageItem}>-{item}</Text>
      ))}
      {recommended && <Text style={styles.recommendedLabel}>RECOMMENDED</Text>}
    </View>
  );
};
const PricingPackagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>VIEW OUR PAINT PROTECTION FILM PACKAGES</Text>
      <View style={styles.packagesContainer}>
        <PackageCard 
          title="Daily Driver" 
          price="STARTS AT" 
          number="$2400"
          description="Protects your vehicle from normal city and highway daily driving."
          
          items={['Front Bumper', 'Headlights', 'Mirrors', 'Front Roof', 'Windshield', 'Front Fenders', 'Hood', 'A-Pillars', 'Handle Grab Areas', 'Rear bumber outer lower portions']}
        />
        <PackageCard 
          title="Track Pack" 
          price="STARTS AT" 
          number="$4000"
          description="Put simply, if you drive your car hard, you will want this package."
          items={['Front Bumper', 'Headlights', 'Mirrors', 'Windshield', 'Full Roof', 'Front Fender', 'Hood', 'A-Pillars', 'Side Skirts', 'Doors','Rear Fender fronts', 'Rear bumber outer lower portios']}
          
          
        />
        <PackageCard 
          title="Full Vehicle" 
          price="STARTS AT"
          number="$6000" 
          description="Your entire vehicle will be covered in end to end protection."
          items={['Front Bumper', 'Headlights', 'Mirrors', 'Windshield', 'Full Roof', 'Front Fender', 'Hood', 'A-Pillars', 'Side Skirts', 'Doors','Rear Fenders','Rear Bumbper','Roof']}
          recommended
        />
      </View>
    </View>   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  screenTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  packagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  packageCard: {
    backgroundColor: '#333',
    borderRadius: 8,
    width: '30%',
    padding: 16,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  packageImage: {
    width: '100%',
    height: 120, // Set the image height
    resizeMode: 'contain', // Keep the image aspect ratio
    marginBottom: 8,
  },
  packageTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 14,
  },
  packagePrice: {
    color: '#fff',
    fontSize:  18,
  },
  packageDescription: {
    color: 'silver',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 8,
    textAlign: 'left',
  },
  separator: {
    height: 1,
    backgroundColor: '#555', // Color for the separator line
    marginVertical: 8, // Space above and below the line
    width: '100%', // Separator occupies full width of the container
  },
  packageItem: {
    color: 'silver',
    fontSize: 22,
    textAlign: 'left', // Align text to the left
    marginBottom: 20, // Increase the bottom margin for more space between items
  },
  Number:{
      color: 'white',
      fontSize:50,
      fontWeight:'bold'
    
  },
  recommended: {
    borderColor: 'blue',
    borderWidth: 1,
    padding: 14,
  },
  
  recommendedLabel: {
    color: 'white',
    backgroundColor: 'blue', // Set your desired background color for the label
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute', // Position absolutely to place it on top of the image
    top: -50, // Adjust as needed
    alignSelf: 'center', // Center it within the packageCard
    paddingVertical: 20, // Adjust padding as needed
    paddingHorizontal: 28, // Adjust padding as needed
    borderRadius: 8 , // Optional: if you want rounded corners
  },
  // ... Add any additional styles you need here ...
});

export default PricingPackagesScreen;
