import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import TabBar from './TabBar'; // Ensure this is the correct path to your custom TabBar component
import { useNavigation } from '@react-navigation/native';
import Home from '/Home'; // Ensure this is the correct path to your Home component

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const imageUrls = [
  require('./ExampleThree.png'),
  require('./ExampleTwo.png'),
  require('./ExampleOne.png'),
  require('./ExampleFour.png'),
  require('./ExampleFive.png'),
  require('./ExampleSix.png'),
];

const TabBarPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigation = useNavigation();

  const buttons = [
    { text: 'Get Started', onPress: () => navigation.navigate('ContactUs') },
    { text: 'Get Started', onPress: () => navigation.navigate('ContactUs') },
    { text: 'Get Started', onPress: () => navigation.navigate('ContactUs') },
    { text: 'Get Started', onPress: () => navigation.navigate('ContactUs') },
    { text: 'Get Started', onPress: () => navigation.navigate('ContactUs') },
    { text: 'Get Started', onPress: () => navigation.navigate('ContactUs') },
  ];

  const handleTabPress = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  // Ensure there's always a valid button definition to avoid errors
  const safeButtonPress = buttons[selectedTab] ? buttons[selectedTab].onPress : () => console.log('No action defined');
  const safeButtonText = buttons[selectedTab] ? buttons[selectedTab].text : 'No Action';

  return (
    <View style={styles.container}>
      <TabBar />
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>Elite Custom Websites and Apps</Text>
          <Text style={styles.overlayText}>Turning your ideas into digital solutions</Text>
          <Text style={styles.pastProjects}>OUR PAST PROJECTS</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image source={imageUrls[selectedTab]} style={styles.image} />
          <TouchableOpacity
            style={styles.button}
            onPress={safeButtonPress}
          >
            <Text style={styles.buttonText}>{safeButtonText}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.circleTabContainer}>
          {imageUrls.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleTabPress(index)}
              style={[
                styles.circleTab,
                selectedTab === index && styles.selectedCircleTab,
              ]}
            />
          ))}
        </View>

        <Home/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer:{
    backgroundColor:'#6ea7c1',
    height: windowHeight * 0.4,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 20,
  },
  imageContainer: {
    width: windowWidth,
    height: windowHeight * 0.7,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  titleText: {
    fontFamily: 'Helvetica Neue',
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  overlayText: {
    fontFamily: 'Helvetica Neue',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  pastProjects: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: windowWidth / 2 - 60,
    width: 120,
    backgroundColor: 'rgba(137, 207, 240, 0.7)',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  circleTabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#6ea7c1',
  },
  circleTab: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
  selectedCircleTab: {
    backgroundColor: 'lightblue',
  },
});

export default TabBarPage;
