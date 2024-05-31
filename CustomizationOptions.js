// CustomizationOptions.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Define the options you want to display.
const options = [
  'Ambient Lighting',
  'Body Kits & Aero',
  'Brake Calipers',
  'Custom Interiors',
  'Custom Lighting',
  'Custom Paint',
  'Lift Kits',
  'Lowering Kits',
  'Performance',
  'Sound Systems',
  'Starlight Headlining',
  'Vinyl Wraps',
  'Window Tinting',
];

// Define the CustomizationOptions component.
const CustomizationOptions = ({ onSelect }) => {
  return (
    <View style={styles.optionsContainer}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionItem}
          onPress={() => onSelect(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Define the styles for your component.
const styles = StyleSheet.create({
  optionsContainer: {
    backgroundColor: '#202020', // Dark background for the container
    borderRadius: 5,
    padding: 20,
    marginTop: 20,
  },
  optionItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)', // Light divider lines
  },
  optionText: {
    color: '#ffffff', // White text color
    fontSize: 16,
    fontWeight: '500', // Medium text weight
  },
  // Add additional styles as needed.
});

// Export the component as a default export.
export default CustomizationOptions;
