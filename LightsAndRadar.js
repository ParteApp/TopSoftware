import React from 'react';
import { ScrollView, View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image,  FlatList } from 'react-native';
import GuaranteSection from '/Guarantee';
import ContactForm from './contactform';
import TabBar from './TabBar';
import SocialLinksPage from './SocialLinksPage';
const stingerImage = require('./tint.png'); // Replace with actual image path
const unidenImage = require('./bugatti.jpg'); // Replace with actual image path
const escortImage = require('./ferrariblue.jpeg'); // Replace with actual image path
const k40Image = require('./girlbike.jpeg'); // Replace with actual image path

const brandsData = [
    {
      id: 'stinger',
      title: 'Stinger',
      description:
        'The #1 choice in discreet, highest performing radar detection and laser systems for your vehicle. Stylish, sleek and guaranteed invisible.',
      image: stingerImage,
    },
    {
      id: 'uniden',
      title: 'Uniden',
      description:
        'Extreme long range detection. Ready right out of the box with simple installation and user friendly features.',
      image: unidenImage,
    },
    {
      id: 'escort',
      title: 'Escort',
      description:
        'Setting the standard in out of the box protection. A go to for 360° driver alert systems. Simple installation with a very user friendly interface.',
      image: escortImage,
    },
    {
      id: 'k40',
      title: 'K40',
      description:
        'Drive with 360° of confidence with the industry’s first ticket free guarantee. Customizable kits to fit your exact needs.',
      image: k40Image,
    },
  ];

  const BrandCard = ({ title, description, image }) => (
    <View style={styles.card}>
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <TouchableOpacity style={styles.cardButton}>
        <Text style={styles.cardButtonText}>LEARN MORE</Text>
      </TouchableOpacity>
    </View>
  );
  
  
const LaserAndRadar = () => {
    return (
        <ScrollView style={styles.container}>
          <TabBar/>
          <ImageBackground 
            source={require('./offroad.jpeg')}
            style={styles.header}
            resizeMode="cover"
          >
            <Text style={styles.headerText}>OUR SERVICES</Text>
            <Text style={styles.title}>RADAR AND LASER PROTECTION</Text>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>TALK TO AN EXPERT</Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.contentRow}>
            <View style={styles.textContent}>
              <Text style={styles.contentTitle}>WE ARE THE TOP INSTALLERS FOR RADAR AND LASER IN ARIZONA!</Text>
              <Text style={styles.contentText}>
                Whether you want a simple radar detector with no wires visible, or a fully integrated
                laser system. We are your best bet to get the cleanest installed and best quality system
                in the state of Arizona. Our state-of-the-art radar and laser detection technology
                can enhance your driving experience, ensuring safety, peace of mind, and protection
                against speed traps and law enforcement radar.
              </Text>
            </View>
            <Image
              source={require('./manytrucks.jpeg')} // Replace with your image url
              style={styles.contentImage}
            />
          </View>
                {/* Brands section */}
      <View style={styles.brandsContainer}>
        <Text style={styles.brandsTitle}>WE PROUDLY OFFER TOP BRANDS</Text>
        <Text style={styles.brandsSubtitle}>Select a brand to visit their website.</Text>
        <FlatList
          horizontal
          data={brandsData}
          renderItem={({ item }) => <BrandCard {...item} />}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
          {/* ...rest of your components... */}
          <ContactForm/>
        <GuaranteSection/>
        <SocialLinksPage/>
        </ScrollView>
      );
    };
    
    const styles = StyleSheet.create({
        brandsContainer: {
            paddingHorizontal: 10,
            backgroundColor:'#1C242A',
            paddingLeft:200,
          },
          brandsTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            paddingVertical: 10, // Adjust the background color as needed
            textAlign: 'center',
          },
          brandsSubtitle: {
            fontSize: 16,
            color: 'white',
            paddingBottom: 20, // Adjust the background color as needed
            textAlign: 'center',
          },
          card: {
            backgroundColor: '#0F1820',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            padding: 16,
            width: 250, // Adjust width as needed
            marginHorizontal: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
          },
          cardImage: {
            width: '100%',
            height: 120,
            resizeMode: 'cover',
            marginBottom: 8,
          },
          cardTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 4,
            color:'white'
          },
          cardDescription: {
            fontSize: 14,
            color: 'white',
            textAlign: 'center',
          },
          cardButton: {
            marginTop: 8,
            backgroundColor: '#007bff',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
          },
          cardButtonText: {
            color: 'white',
            fontSize: 14,
            fontWeight: 'bold',
            textAlign: 'center',
          },
        
      container: {
        flex: 1,
        backgroundColor:'#080F14'
      },
      header: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 300, // Adjust the height as needed
      },
      headerText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
      },
      title: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
      },
      button: {
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#3D4AFE',
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
      },
      contentRow: {
        flexDirection: 'row',
        alignItems: 'center', // This ensures that the image and text align nicely
        padding: 20, // Add padding as needed
      },
      textContent: {
        flex: 1,
      },
      contentTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
      },
      contentText: {
        fontSize: 14,
        color: 'white',
      },
      contentImage: {
        width: 200, // Set image width as needed
        height: 200, // Set image height as needed
        marginLeft: 20, // Add some space between the text and the image
      },
      // ...rest of your styles...
    });

export default LaserAndRadar;
