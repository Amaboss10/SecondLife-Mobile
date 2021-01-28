
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Home() {
    return (
        <View>
            <Text>
                HomeScreen
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00f',
        alignItems: 'center',
        justifyContent: 'center',
    },
});