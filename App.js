// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/routes/index';
import { FirebaseProvider } from './src/helpers/firebaseContext';

export default function App() {
  return (
    <FirebaseProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </FirebaseProvider>
  );
}
