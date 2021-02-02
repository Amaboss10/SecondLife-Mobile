import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Text>Home!</Text>
      {/* <Button light style={{ alignItems: 'center' }}><Text>This is home!</Text></Button> */}
    </View>
 
  );
}

function ComptesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favoris!</Text>
    </View>
  );
}

function FavorisScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favoris!</Text>
    </View>
  );
}

function AjoutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ajouter article !</Text>
    </View>
  );
}

function CategorieScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <BottomNavigation />
      
=======
      <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
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
            else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list';
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favoris" component={FavorisScreen} />
        <Tab.Screen name="Annonce" component={AjoutScreen}        />
        <Tab.Screen name="Compte" component={ComptesScreen} />
        <Tab.Screen name="Categorie" component={CategorieScreen} />
      </Tab.Navigator>
>>>>>>> navigationBar
    </NavigationContainer>
  );
}



