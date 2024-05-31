import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MdHome, MdSpa, MdContactMail, MdEmojiPeople,MdMoney } from 'react-icons/md';

const styles = StyleSheet.create({
  tabbar: {
    height: 102,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    zIndex: 1000,
  },
  tabItem: {
    flex: 1, // Added flex to ensure even spacing
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: 10, // Add padding to prevent clipping
  },
  tabTitle: {
    color: '#000',
    fontSize: 12,
  },
  logoContainer: {
    flex: 1, // Ensure logo also gets even space
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 120,
  },
  logo: {
    height: '150%', // Adjusted to fit within its container
    width: '100%',
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    zIndex: 1,
  },
  content: {
    zIndex: 1,
  },
});

export default function TabBar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigation = useNavigation();

  const handleTabPress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}></View>
      <View style={styles.tabbar}>
        <View style={styles.logoContainer}>
          <Image source={require('./logologo.png')} style={styles.logo} />
        </View>
        <Pressable style={styles.tabItem} onPress={() => handleTabPress('Home')}>
          <MdHome size={24} color="#000" />
          <Text style={styles.tabTitle}>Home</Text>
        </Pressable>
        <Pressable style={styles.tabItem} onPress={() => handleTabPress('CeramicCoatings')}>
          <MdMoney size={24} color="#000" />
          <Text style={styles.tabTitle}>Pricing</Text>
        </Pressable>
        <Pressable style={styles.tabItem} onPress={() => handleTabPress('ContactUs')}>
          <MdContactMail size={24} color="#000" />
          <Text style={styles.tabTitle}>Contact Us</Text>
        </Pressable>
        <Pressable style={styles.tabItem} onPress={() => handleTabPress('AboutUs')}>
          <MdEmojiPeople size={24} color="#000" />
          <Text style={styles.tabTitle}>About Us</Text>
        </Pressable>
      </View>
    </View>
  );
}
