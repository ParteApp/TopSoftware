// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './StackNavigator'; // Import the stack navigator

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator /> {/* Use the imported stack navigator */}
    </NavigationContainer>

    //<Navigator2>
  );
}