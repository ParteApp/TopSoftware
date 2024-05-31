import App from './App';
import React from 'react';
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent('MyApp', () => App);
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('app-root') });
