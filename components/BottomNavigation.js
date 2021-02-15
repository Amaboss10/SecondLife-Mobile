import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import HomeScreen from '../screens/HomeScreen';
import FavorisScreen from '../screens/FavorisScreen';
import AjoutScreen from '../screens/AddAnnonceScreen';
import ComptesScreen from '../screens/AccountScreen';
import EditProScreen from '../components/EditAccount';
import CategorieScreen from '../screens/CategoryScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Accueil') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Favoris') {
            iconName = focused ? 'heart-circle' : 'heart-circle-outline';
          }
          else if (route.name === 'Annonce') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          else if (route.name === 'Compte') {
            iconName = focused ? 'person' : 'person-outline';
          }
          else if (route.name === 'Categories') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >

      
      <Tab.Screen name="Accueil" component={Register} />
      <Tab.Screen name="Favoris" component={FavorisScreen} />
      <Tab.Screen name="Annonce" component={AjoutScreen} />

      <Tab.Screen name="Compte"  >
          {() => (
            <Stack.Navigator screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen
                name="Compte"
                component={ComptesScreen}
              />
              <Stack.Screen name="Edit" component={EditProScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
      <Tab.Screen name="Categories" component={CategorieScreen} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;