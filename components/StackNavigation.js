import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import NavigationBar from '../screens/NavigationBar';
import { SmartphoneScreen, EcranScreen, CablesScreen, BatterieScreen, ChargeurScreen } from '../screens/categories/Categories';

const Stack = createStackNavigator();


const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Categories" component={NavigationBar} options={{ headerShown: false }} />
            <Stack.Screen name="Smartphone" component={SmartphoneScreen} options={{ headerTitle: 'Smartphone' }} />
            <Stack.Screen name="Ecran" component={EcranScreen} options={{ headerTitle: 'Ecran' }} />
            <Stack.Screen name="Batterie" component={BatterieScreen} options={{ headerTitle: 'Batterie' }} />
            <Stack.Screen name="Chargeur" component={ChargeurScreen} options={{ headerTitle: 'Chargeur' }} />
            <Stack.Screen name="Câbles" component={CablesScreen} options={{ headerTitle: 'Câbles' }} />
            {/* <Stack.Screen name="Ecran" component={Ecran} options={{ headerTitle: 'Ecran' }} /> */}
        </Stack.Navigator>
    )
}


export default StackNavigation