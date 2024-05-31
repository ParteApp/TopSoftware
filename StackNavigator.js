// StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Customize from './Customize';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Spa from './Spa';
import Events from './Events';
import TabBarPage from './TabBarPage';
import CompanyVehicleCustomization from './CompanyVehicleCustomization';
import Boats from './Boats';
import BodyKits from './BodyKits';
import BrakeCalibers from './BrakeCalibers';
import Cart from './Cart';
import CeramicCoatings from './CeramicCoatings';
import Detailing from './Detailing';
import interiors from './interiors';
import SocialLinksPage from './SocialLinksPage';
import LiftKits from './LiftKits';
import Lighting from './Lighting';
import LightsAndRadar from './LightsAndRadar';
import LoweringSystems from './LoweringSystems';
import MotorcyclesCustomization from './MotorcyclesCustomization';
import number from './number';
import OurFaculty from './OurFaculty';
import PaintProtectionFilms from './PaintProtectionFilms';
import PaintWorks from './PaintWorks';
import WindowTinting from './WindowTinting';
import WheelsTires from './WheelsTires';
import Utvs from './Utvs';
import StarlightHeadlining from './StarlightHeadlining';
import SoundSystems from './SoundSystems';
import profile from './profile';
import PowderCoating from './PowderCoating';
import Performance from './Performance';
import Parts from './Parts';
import Home from './Home'
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name= "Home" component = {TabBarPage} options={{headerShown: false}}/>
      <Stack.Screen name="Customize" component={Customize} options={{ headerShown: false }} />
      <Stack.Screen name="AboutUs" component={AboutUs} options={{ headerShown: false }} />
      <Stack.Screen name="ContactUs" component={ContactUs} options={{ headerShown: false }} />
      <Stack.Screen name="Spa" component={Spa} options={{ headerShown: false }} />
      <Stack.Screen name="Events" component={Events} options={{ headerShown: false }} />
      <Stack.Screen name="Customization" component={CompanyVehicleCustomization} options={{headerShown: false}}/>
      <Stack.Screen name="Boats" component={Boats} options={{headerShown: false}}/>
       <Stack.Screen name="BodyKits" component={BodyKits} options={{headerShown: false}}/>
      <Stack.Screen name="BrakeCalibers" component={BrakeCalibers} options={{headerShown: false}}/> 
       <Stack.Screen name="Cart" component={Cart} options={{headerShown: false}}/>
      
       <Stack.Screen name="CeramicCoatings" component={CeramicCoatings} options={{headerShown: false}}/>
      <Stack.Screen name="Detailing" component={Detailing} options={{headerShown: false}}/>
      <Stack.Screen name="interiors" component={interiors} options={{headerShown: false}}/>
      
      <Stack.Screen name="LiftKits" component={LiftKits} options={{ headerShown: false }} />
      
      <Stack.Screen name="Lighting" component={Lighting} options={{ headerShown: false }} />
      <Stack.Screen name="LightsAndRadar" component={LightsAndRadar} options={{ headerShown: false }} />
      <Stack.Screen name="LoweringSystems" component={LoweringSystems} options={{ headerShown: false }} />
     
      <Stack.Screen name="MotorcyclesCustomization" component={MotorcyclesCustomization} options={{ headerShown: false }} /> 
      
      <Stack.Screen name="number" component={number} options={{ headerShown: false }} />
      <Stack.Screen name="OurFaculty" component={OurFaculty} options={{ headerShown: false }} />
      <Stack.Screen name="PaintProtectionFilms" component={PaintProtectionFilms} options={{ headerShown: false }} />
      <Stack.Screen name="PaintWorks" component={PaintWorks} options={{ headerShown: false }} />
      <Stack.Screen name="Parts" component={Parts} options={{ headerShown: false }} />
      <Stack.Screen name="Performance" component={Performance} options={{ headerShown: false }} />
      
      <Stack.Screen name="PowderCoating" component={PowderCoating} options={{ headerShown: false }} />
      <Stack.Screen name="profile" component={profile} options={{ headerShown: false }} />
      <Stack.Screen name="SocialLinksPage" component={SocialLinksPage} options={{ headerShown: false }} />
      <Stack.Screen name="SoundSystems" component={SoundSystems} options={{ headerShown: false }} />
      <Stack.Screen name="StarlightHeadlining" component={StarlightHeadlining} options={{ headerShown: false }} />
      <Stack.Screen name="Utvs" component={Utvs} options={{ headerShown: false }} />
      <Stack.Screen name="WheelsTires" component={WheelsTires} options={{ headerShown: false }} />
      <Stack.Screen name="WindowTinting" component={WindowTinting} options={{ headerShown: false }} />     
       
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
