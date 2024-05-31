import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GuaranteSection from '/Guarantee';
import ContactForm from './contactform';
import SocialLinksPage from './SocialLinksPage';
import TabBar from './TabBar';
const Card = ({ header, title, price, description }) => (
    <View style={styles.card}>
      <Text style={styles.cardHeader}>{header}</Text>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardPrice}>{price}</Text>
      {Array.isArray(description) ? (
        description.map((line, index) => (
          <Text key={index} style={styles.cardDescription}>
            {line}
          </Text>
        ))

      ) : (
        <Text style={styles.cardDescription}>{description}</Text>
      )}
    </View>
  );
const featuresData = [
  { id: '1', title: '5 Year Warranty:  If anything happens to your coating within 5 Years, we will re-coat the affected areas free of charge' },
  { id: '2', title: 'Provides a hydrophobic layer which repels dirt and water'},
  {id: '3', title: 'Makes washing easier. Never have to wax again.'},
  // Add more features as needed
];

const FeatureCard = ({ title, description }) => (
  <View style={styles.featureCard}>
    <MaterialIcons name="star" size={40} color="blue" />
    <Text style={styles.featureTitle}>{title}</Text>
    <Text style={styles.featureDescription}>{description}</Text>
  </View>
);

const CeramicCoating = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <TabBar/>
      

     
       

        
     
     
      <View style={styles.infoContainer}>
      <Text style={styles.PP}> PRICING PACKAGES</Text>
  <Text style={styles.CCP}>5 DIFFERENT PACKAGES</Text>
  {/* <Text style={styles.info}></Text> */}
  </View>  
      <View style={styles.cardsContainer}>
  

      <Card
    header="Professional Website Package"
    title="STARTS AT"
    price="$2,000"
    description={[
      "Ideal for personal blogs or small businesses",
      "-Includes up to 6 static pages (Home, About Us, Services, Blog, Contact)",
      "-Responsive design compatible with desktop and mobile devices",
      "-SEO optimization",
      "-2 month of maintenance post-launch"
    ]}
  />
  <Card
    header="Premium Website Package"
    title="STARTS AT"
    price="$5,000"
    description={[
      "Suitable for established businesses or startups",
      "-Includes up to 15 pages with dynamic content management",
      "-E-commerce integration with payment gateways",
      "-Advanced SEO optimization",
      "-4 months of maintenance post-launch",
      "-Analytics integration to monitor website traffic"

    ]}
  />
</View>
<View style={styles.cardsContainer2}>
  <Card
    header="Enterprise Application "
    title="STARTS AT"
    price="Pricing Available on Request"
    description={[
      "-Custom enterprise-grade application development",
      "-Integration with existing IT infrastructure",
      "-Comprehensive security features",
      "-Scalable architecture for growing business needs",
      "-Dedicated support team for 1 year",
      "-Available on Android",
      "-Available on IOS ",
    ]}
  />
  <Card
    header="Complete Digital Overhaul"
    title="STARTS AT"
    price="Pricing Available on Request"
    description={[
      "-Includes website overhaul, new app development, and system integration",
      "-On-site and cloud infrastructure setup",
      "-Long-term maintenance and support",
      "-Training for staff on new systems",
      "-Ongoing consultation for digital strategy"
    ]}
  />
</View>

<ContactForm/>
        <GuaranteSection/>
        <SocialLinksPage/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Assuming a dark theme from the screenshot
  },
  contentContainer: {

  },
  service:{
    fontSize:20,
    color:'white',
    paddingLeft:160,
    paddingTop:180
  },
  header: {
    // Style your header view here
    color:'white',
    backgroundColor:'grey',
    fontWeight:'bold',
    paddingBottom:'5',
  },
  headerText: {
    fontSize: 55,
    color: '#fff',
    paddingBottom:10,
    paddingLeft:160,
    paddingRight:50,
    paddingTop:0,
    fontWeight:'1000'
    // Additional header text styling
  },
  mainContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop:30
  },
  aboutSection: {
    flex: 1,
    marginRight: 10,
    marginLeft:160,// Adjust the spacing as needed
    // Style your about section view here
  },
  aboutTitle: {
    fontSize: 20,
    color: '#3D4AFE',
    fontSize:20,
    paddingBottom:20,
    // Additional about title styling
  },
  aboutText:{
    fontSize:30,
    paddingBottom:20,
    color:'white',
    fontWeight:1000,
  },
  aboutDescription: {
    fontSize: 20,
    color: 'grey',
    fontFamily:'Stencil Std, fantasy',
    lineHeight: 40,
    paddingBottom:100
    // Additional about description styling
  },
  featuresContainer: {
    paddingTop:20,
    paddingHorizontal:200,
    // Style your features container here
  },
  featureCard: {
    flexDirection: 'row',
    backgroundColor: 'grey', // Adjust the background color to fit your theme
    borderRadius: 8,  
    padding: 16,
    marginBottom: 15,
    width:350
    // Additional feature card styling
  },
  featureTitle: {
    fontSize: 15,
    fontWeight:800,
    color: 'white',
    marginLeft:40 // Adjust the text color to fit your theme
    // Additional feature title styling
  },
  featureDescription: {
    fontSize: 15,
    color: '#333',
    fontWeight: 600,
    color:'white',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: '#3D4AFE',
    borderRadius: 5,
    width:200,
    marginLeft:160,
    marginBottom:50,    
    

  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    fontWeight:'200'
  },
  infoContainer:{
    backgroundColor:'#6ea7c1',
  },
    PP:{
        paddingTop:100,
        paddingBottom:15,
        fontSize:18,
        color:'blue',
        fontWeight:300,
        textAlign: 'center', // Horizontally center the content

    },
    CCP:{
        fontSize:28,
        paddingBottom:10,
        fontWeight:1000,
        color:'white',
        textAlign: 'center', // Horizontally center the content
    },
    info:{
        fontSize:15,
        color:'white',
        textAlign: 'center', // Horizontally center the content

    },
  // ... other styles...
  cardsContainer: {
    // Styles for the container of the cards
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around', // Adjust as needed for your design
    paddingVertical: 20,
    paddingHorizontal: 20,
     backgroundColor:'#6ea7c1',

  },
  cardsContainer2:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around', // Adjust as needed for your design
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor:'#6ea7c1',
  },
  cardsContainer3:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around', // Adjust as needed for your design
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor:'#6ea7c1',  
  },
  card: {
    flex: 1,
    margin: 10, // Add some space around each card
    maxWidth: '45%', // Or whatever percentage works best for your layout
    backgroundColor: '#1C1C1E', // Keeping your existing card background color
    borderRadius: 8,
    padding: 16,
    alignItems:'center'
  },
  cardHeader: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 1000,
    marginVertical: 4,
  },
  cardPrice: {
    color: '#3D4AFE', // Highlight color for the price
    fontSize: 20,
    marginVertical: 4,
  },
  cardImage: {
    width: '100%', // Full width of the card
    height: 150, // Fixed height, adjust as needed
    marginVertical: 8,
    resizeMode: 'cover', // or 'contain' to fit the entire image
  },
  cardDescription: {
    color: '#A5A5A7',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 8,
  },
  // ...other styles...
});

export default CeramicCoating;