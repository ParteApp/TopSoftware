import App from './App';
import { AppRegistry } from 'react-native';

import appConfig from './app.json'; // Import the whole configuration

const appName = appConfig.expo.name; // Access the name property correctly

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
