import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GuaranteeSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>OUR GUARANTEE</Text>
      <Text style={styles.description}>
      At TopSoftware, we stand behind the quality of our software development services with a steadfast satisfaction guarantee. We are committed to delivering only the highest standard of website and app development. If, for any reason, you are not completely satisfied with the results, please let us know within 48 hours, and we will address your concerns. We strive to ensure that every client is not only satisfied but thrilled with the functionality and design of their new digital solutions. Trust us to bring out the best in your digital projects, because at TopSoftware, excellence is not an option—it’s a guarantee.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CONTACT US</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BAA333', // Replace with the actual color from the screenshot
    padding: 20,
    alignItems: 'flex-start',
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft:70,
    paddingRight:70
  },
  description: {
    color: 'white',
    fontSize: 20,
    marginBottom: 30,
    paddingLeft:70,
    paddingRight:70
  },
  button: {
    backgroundColor: 'white', // Replace with the actual button color from the screenshot
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignSelf: 'middle',
    marginLeft: 70, /* Adjust the value as needed */
},
  
  buttonText: {
    color: 'black', // Replace with the actual text color from the screenshot
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GuaranteeSection;
