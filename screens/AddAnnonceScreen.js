import React, { useState, useEffect } from 'react';
import { View, Platform, Text, TextInput, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
//import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Image, Button, Icon } from 'react-native-elements'
import ImagePlaceHolder from '../components/ImagePlaceHolder';
import RNPickerSelect from 'react-native-picker-select';
import { BASE_URL } from '../assets/constantes';
import axios from 'axios';


const AddAnnonceScreen = () => {

    //Les states permettent de stoker tous les champs des textInput
    const [titreAnnonce, setTittreAnnonce] = useState('');
    const [refAnnonce, setRefAnnonce] = useState('');
    const [lieu, setLieu] = useState('');
    const [prixAnnonce, setPrixAnnonce] = useState(0);
    const [poidsAnnonce, setPoidsAnnonce] = useState(0)
    const [descriptionAnnonce, setDescriptionAnnonce] = useState('');

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

    //Uploade des informations entrees par le client
    const uploadAnnonce = () => {

        console.log("Entrer")
        axios({
            method: 'post',
            url: BASE_URL + '/api/annonces',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/ld+json'
            },
            data: {
                "titre": titreAnnonce,
                "description": descriptionAnnonce,
                "prix": prixAnnonce,
                "poids": poidsAnnonce,
                "etat": "neuf",
                "dateDePublication": "2021-02-25T02:01:08.597Z",
                "isValid": true
            }
        }).then((response) => { console.log(response) })
            .catch((error) => { console.log(error) })

        console.log("Sortie")
    }


    return (
        <SafeAreaView style={styles.main_container}>
            <TouchableOpacity onPress={pickImage}>
                <View style={styles.image_container}>
                    <Image style={styles.image} source={{ uri: image }} PlaceholderContent={<ImagePlaceHolder />} />
                </View>
            </TouchableOpacity>
            <View style={styles.body_container}>
                <TextInput style={styles.input} placeholder="Titre de l'annonce" onChangeText={titre => setTittreAnnonce(titre)} />
                <TextInput style={styles.input} placeholder="Référence" onChangeText={refA => setRefAnnonce(refA)} />
                <TextInput style={styles.input} placeholder="Lieu" onChangeText={lieuA => setLieu(lieuA)} />
                <TextInput style={styles.input} placeholder="Prix" keyboardType='numeric' onChangeText={prixA => setPrixAnnonce(prixA)} />
            </View>

            <View style={styles.picker_container}>
                <View style={styles.categorie_picker}>
                    <Text style={styles.label}> Categorie: </Text>
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={[
                            {
                                label: 'Téléphonie',
                                value: 'Téléphonie',
                            },
                            {
                                label: 'Jeux',
                                value: 'Jeux',
                            },
                        ]}
                        style={{ ...pickerSelectStyles }}
                    />
                </View>

                <View style={styles.sous_categ_picker}>
                    <Text style={styles.label}> Sous-Categorie: </Text>
                    <RNPickerSelect
                        placeholder="sous-categ"
                        onValueChange={(value) => console.log(value)}
                        items={[
                            {
                                label: 'Smartphone',
                                value: 'Smartphone',
                            },
                            {
                                label: 'Ecran',
                                value: 'Ecran',
                            },
                            {
                                label: 'Chargeur',
                                value: 'Chargeur',
                            },
                            {
                                label: 'Câble',
                                value: 'Câble',
                            },
                            {
                                label: 'Console',
                                value: 'Console',
                            },
                            {
                                label: 'Manettes',
                                value: 'Manettes',
                            },
                        ]}
                        style={{ ...pickerSelectStyles }}
                    />
                </View>
            </View>

            <View>
                <TextInput style={styles.input}
                    placeholder="Description"
                    multiline={true}
                    numberOfLines={6}
                    onChangeText={desc => setDescriptionAnnonce(desc)}
                />
            </View>

            <View style={{ flex: -3, alignItems: 'center', justifyContent: 'center' }}>

                <Button style={styles.addButton} type="clear"
                    icon={
                        <Icon
                            name="add-circle"
                            size={50}
                            color="orange"
                        />
                    }
                    onPress={uploadAnnonce}
                />
            </View>

        </SafeAreaView>
    );
}


export default AddAnnonceScreen;

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'white'
    },
    image_container: {
    },
    body_container: {
        flex: -3,
        marginTop: 30
    },
    container: {
        flex: 1,
        paddingTop: 25,
        alignItems: "center",
        flexDirection: 'row'
    },
    image: {
        height: 200,
        borderWidth: 1,
        borderRadius: 15,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        paddingLeft: 10,
        marginTop: 5
    },
    addButton: {
        backgroundColor: 'white',
        width: 100,
        justifyContent: 'center'
    },
    picker_container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 10,
    },
    categorie_picker: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sous_categ_picker: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
        borderWidth: 1
    }

})
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        width: 200,
        height: 30,
    }
});