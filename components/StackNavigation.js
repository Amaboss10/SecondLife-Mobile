import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import NavigationBar from '../screens/NavigationBar';
import ItemsScreen from '../screens/categories/ItemsScreen';

const Stack = createStackNavigator();

/**
 * KAMIL BEN
 * 
 * represente la stack de navigation qui se situe dans categorie
 * On utilse un component qui ItemsScreen pour afficher les données de cette derniere
 * au lieu de creer plusieurs component aillant la même actions mais avec 
 * des noms differents
 */
const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Categories" component={NavigationBar} options={{ headerShown: false }} />
            <Stack.Screen name="Smartphone" component={ItemsScreen} options={{ headerTitle: 'Smartphone' }} />
            <Stack.Screen name="Ecran" component={ItemsScreen} options={{ headerTitle: 'Ecran' }} />
            <Stack.Screen name="Batterie" component={ItemsScreen} options={{ headerTitle: 'Batterie' }} />
            <Stack.Screen name="Chargeur" component={ItemsScreen} options={{ headerTitle: 'Chargeur' }} />
            <Stack.Screen name="Câbles" component={ItemsScreen} options={{ headerTitle: 'Câbles' }} />
        </Stack.Navigator>
    )
}


export default StackNavigation