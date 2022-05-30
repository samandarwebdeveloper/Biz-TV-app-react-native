import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import MainStackNavigator from './navigation/StakNavigator';


export default function App() {

  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}