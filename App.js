import React from 'react';
import BottomNavigation from './components/BottomNavigation';
import { NavigationContainer } from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import StackNavigation from './components/StackNavigation';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}



