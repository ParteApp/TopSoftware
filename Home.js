import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import { MdHome, MdSpa,MdMoney,MdEmojiPeople, MdDirectionsCar, MdBuild, MdSecurity, MdWork, MdFormatPaint, MdAirlineSeatReclineExtra, MdVisibility, MdLightbulbOutline, MdPublish, MdGetApp, MdLayers, MdSpeed, MdBlurOn, MdStarOutline, MdVolumeUp, MdWrapText, MdToys, MdWindow, MdAirlineSeatFlat, MdCarRepair  } from 'react-icons/md';
import SocialLinksPage from '/SocialLinksPage';
import { useNavigation } from '@react-navigation/native';
import { GiCarWheel } from "react-icons/gi";
import { CgWindows } from "react-icons/cg";
import { GiWrappedSweet } from "react-icons/gi";



const ICON_MAP = {
  MdHome: <MdHome size={24} color="#000" />,
  MdMoney: <MdMoney size={24} color="#000" />,
  MdEmojiPeople: <MdEmojiPeople size={24} color="#000" />,
};

const serviceButtonMargin = 10; // Margin on each side of the service button
const buttonPadding = 10;
const buttonWidth = (windowWidth - buttonMargin * 6) / 3;
const buttonMargin = 10;
const serviceButtonSize = (windowWidth - serviceButtonMargin * 6) / 3;
const windowWidth = Dimensions.get('window').width;
const services = [
  { id: '1', name:  'Home', iconName: 'MdHome' }, // Assuming MdSpa was correct
  { id: '2', name: 'Contact Us', iconName: 'MdEmojiPeople' },
  { id: '4', name: 'Pricing', iconName: 'MdMoney' },
  
];

  const ServiceButton = ({ title, iconName, onPress }) => (
    <TouchableOpacity style={styles.serviceButton} onPress={onPress}>
      {ICON_MAP[iconName]}
      <Text style={styles.serviceText}>{title}</Text>
    </TouchableOpacity>
  );
  
  const ServiceGrid = ({ onPress }) => (
    <View style={styles.servicesContainer}>
      {services.map((service) => (
        <ServiceButton key={service.id} title={service.name} iconName={service.iconName} onPress={() => onPress(service.id)} />
        ))}
      ))
    </View>
  );
  const Header = () => (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Leaders in Application Design</Text>
        <Text style={styles.subHeaderText}>We'll upgrade your Business.</Text>
      </View>
      <Image
        source={require('./grow.jpeg')}
        style={styles.headerImage}
      />
    </View>
  );
  
  const Home = () => {
    const navigation = useNavigation();
    const handlePress = (id) => {
      // Navigate to a specific screen based on the service id
      switch (id) {
        case '1':
          navigation.navigate('Home', { id });
          break;
        case '2':
          navigation.navigate('ContactUs', { id });
          break;

       
      case '4':
          navigation.navigate('CeramicCoatings', { id });
          break;

         
          
          
  
        }
      };
      return (
        
        <ScrollView style={styles.container}>
          <Header/>
          <div>
      <li><MdHome size = {24} color='#000'/></li>
      
</div>
            <ServiceGrid onPress={handlePress} />  // Pass handlePress to ServiceGrid
            <SocialLinksPage />
        </ScrollView>
    );
};
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      

    },
    headerContainer: {
      flexDirection: 'row', // Align items horizontally
      alignItems: 'center', // Center items vertically in the container
      paddingVertical: 20,
      paddingHorizontal: 20,
      paddingLeft:350,
      paddingRight:350,
      backgroundColor:'black',
      paddingTop:50,
      flex: 1,
      paddingLeft: windowWidth * 0.1,
      paddingRight: windowWidth * 0.1
      
    },
    headerTextContainer: {
      flex: 1, // Take up remaining space after image
      paddingRight: 10,
    },
      headerImage: {
        width: 700, // Set both width and height to the same value to make the image square
        height: 200,
        borderRadius: 10, // Optional: add a slight border radius for a softened edge
        marginLeft: 10, 
      },
      textContainer: {
        marginRight: 10, // Right margin to create a small gap between text and image
      },
      
    header: {
      alignItems: 'center',
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#89CFF0',
    },
    subHeaderText: {
      fontSize: 18,
      color: 'grey',
    },
    beforeAfterContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    halfImage: {
      margin: 5,
      // If you want to use text instead of images, remove the following line
      alignItems: 'center',
      justifyContent: 'center',
    },
    servicesHeader: {
      marginVertical: 20,
      fontSize: 20,
      textAlign: 'center',
    },
    servicesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: buttonMargin,
      },
      serviceButton: {
        width: (windowWidth-1000)/3,
        height: ((windowWidth - 1000 ) / 3)  + 20, // Adjust height accordingly to accommodate text
        alignItems: 'center',
        justifyContent: 'center',
        margin: buttonMargin,
        borderRadius: 10,
        backgroundColor: '#89CFF0',
        padding: buttonPadding,
        
      },
      serviceText: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 8,
      },
  });

  export default Home;