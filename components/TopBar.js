import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from "react-native-elements";
import { LinearGradient } from 'expo-linear-gradient';



const TopBar = () => {
    const [value, setValue] = React.useState("");
    return (
        <LinearGradient colors={['#ffffff', '#c6f6ff', '#ff6347']} style={{ backgroundColor: '#fff' }} >
            <View style={{}}>
                <View style={{ alignItems: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: 'https://media.discordapp.net/attachments/697960252011970600/805578022891421706/Logo_Khbur_cmp.png' }} style={{ width: 113, height: 60, justifyContent: 'center', margin: 17 }} />
                </View>
                <View style={{ margin: -13, marginLeft: 1, padding: -29 }}>
                    <SearchBar
                        platform="android"
                        containerStyle={{ paddingBottom: -10, paddingTop: -10 }}
                        inputContainerStyle={{}}
                        inputStyle={{}}
                        leftIconContainerStyle={{}}
                        rightIconContainerStyle={{}}
                        loadingProps={{}}
                        onChangeText={newVal => setValue(newVal)}
                        onClearText={() => console.log(onClearText())}
                        placeholder="Rechercher ici"
                        placeholderTextColor="#888"
                        cancelButtonTitle="Cancel"
                        cancelButtonProps={{}}
                        onCancel={() => console.log(onCancel())}
                        value={value}
                    />
                </View>
                <View style={{ textAlign: 'left', margin: 20 }}>
                    <Text style={{ color: '#000000', fontWeight: 500, fontSize: 20 }} >Les Annonces :</Text>
                </View>
            </View>
        </LinearGradient>
    )
}

export default TopBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});