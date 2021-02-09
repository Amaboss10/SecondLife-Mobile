import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
//import { Button } from 'native-base';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchBar } from "react-native-elements";
// import { Ionicons } from '@expo/vector-icons';
//import { SliderBox } from "react-native-image-slider-box";
import { LinearGradient } from 'expo-linear-gradient';

import { shouldUseActivityState } from 'react-native-screens';
import TopBar from '../components/TopBar';





const Home = () => {
  return (
    <TopBar />
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Home;