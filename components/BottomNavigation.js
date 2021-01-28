import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Home from '../sreens/Home';
import Favorite from '../sreens/Favorite';
import AddAnnonce from '../sreens/AddAnnonce';
import Account from '../sreens/Account';
import Category from '../sreens/Category';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#e91e63"
            labelStyle={{ fontSize: 12 }}
            style={{ backgroundColor: 'tomato' }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favoris"
                component={Favorite}
                options={{
                    tabBarLabel: 'Favoris',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="md-heart-sharp" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="AjouterAnnonce"
                component={AddAnnonce}
                options={{
                    // tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="pluscircleo" size={24} color={color} />
                        // <Ionicons name="md-heart-outline" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarLabel: 'Compte',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Categories"
                component={Category}
                options={{
                    tabBarLabel: 'Categorie',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="menu" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomNavigation;