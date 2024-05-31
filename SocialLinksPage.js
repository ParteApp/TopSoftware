import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const SocialMediaIcons = {
  instagram: require('./instagram.jpeg'),
  tiktok: require('./tiktok.png'),
  facebook: require('./facebook.png'),
  youtube: require('./assets/icon.png'), // Assuming you have a YouTube icon in your assets
};

const SocialLinksPage = () => {
  // Function to open a URL
  const openLink = (url) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.error("Can't handle URL: " + url);
        }
      })
      .catch((err) => console.error('An error occurred', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.connectText}>STAY CONNECTED WITH THE AUDIOTECHNIKS</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => openLink("https://www.instagram.com/audiotechniks/")}>
          <Image source={SocialMediaIcons.instagram} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink("https://www.tiktok.com/@audio.techniks")}>
          <Image source={SocialMediaIcons.tiktok} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink("https://www.facebook.com/AudioTechniksPhx/")}>
          <Image source={SocialMediaIcons.facebook} style={styles.icon} />
        </TouchableOpacity>
        {/* Uncomment if you want to add a YouTube icon */}
        {/* <TouchableOpacity onPress={() => openLink("https://www.youtube.com/")}>
          <Image source={SocialMediaIcons.youtube} style={styles.icon} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  connectText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  icon: {
    width: 50, // Adjust the size as necessary
    height: 50, // Adjust the size as necessary
  },
});

export default SocialLinksPage;
