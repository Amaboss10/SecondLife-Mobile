import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'native-base';


const ImagePickerExample = () => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SafeAreaView>

            <ScrollView>
                <View style={{ flexDirection: 'row' }}>
                    <Button style={styles.Text} title="Annuler" onPress={() => this._onCancel()} />
                    {/* <Button style={styles.Text} title="Annuler" /> */}
                    <Text style={styles.Text1}>Ajoutez une annonce </Text>
                </View>
                <View style={styles.main_container}>
                    <Text style={styles.title_text}>Titre de l'annonce </Text>
                    <TouchableOpacity onPress={pickImage}>
                        <Image style={styles.image} source={{ uri: image }} />
                    </TouchableOpacity>
                    <View style={styles.content_container}>
                        <View style={styles.header_container}>
                            <TextInput style={styles.title_text1} placeholder="Titre de l'Annonce" />
                        </View>
                        <View style={styles.header_container2}>
                            <TextInput style={styles.title_text2} placeholder="Prix" />
                        </View>
                        <View style={styles.header_container}>
                            <TextInput style={styles.title_text1} placeholder="Catégorie" />
                            <TextInput style={styles.title_text1} placeholder="Ref" />
                            <TextInput style={styles.title_text1} placeholder="Lieu/Date" />
                        </View>

                    </View>
                </View>
            </ScrollView>
            {/* // </View> */}
        </SafeAreaView >
    );
}


export default ImagePickerExample;

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 100,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'gray',
        flex: 1
    }
})