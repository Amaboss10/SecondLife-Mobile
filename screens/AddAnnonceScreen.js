import React, { useState, useEffect } from 'react';
import { View, Platform, Text, TextInput, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Image, Button, Icon } from 'react-native-elements'
import ImagePlaceHolder from '../components/ImagePlaceHolder';
import RNPickerSelect from 'react-native-picker-select';
import { BASE_URL } from '../assets/constantes';
import axios from 'axios';

import API from '../assets/constantes'



const AddAnnonceScreen = () => {

    //Les states permettent de stoker tous les champs des textInput
    const [titreAnnonce, setTittreAnnonce] = useState('');
    const [refAnnonce, setRefAnnonce] = useState('');
    const [lieu, setLieu] = useState('');
    const [prixAnnonce, setPrixAnnonce] = useState(0);
    const [poidsAnnonce, setPoidsAnnonce] = useState(0);
    const [etatAnnonce, setEtatAnnonce] = useState('');
    const [descriptionAnnonce, setDescriptionAnnonce] = useState('');
    const [selectCategorie, setSelectCategorie] = useState('');
    const [selectSousCategorie, setSelectSousCategorie] = useState('');
    const [image, setImage] = useState(null);
    const [data, setData] = useState()

    useEffect(() => {
        //requete pour la recuperation d'une image à partir du smartphone
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
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1

        });

        if (!result.cancelled) {
            console.log(result)
            setImage(result);
        }
    };

    //Uploade des informations entrees par le client
    //TODO::ajouter datetime
    const uploadAnnonce = () => {
        // console.log(image)

        //les données doivent être au format FormData

        let uploadData = new FormData()
        uploadData.append('title', titreAnnonce)
        uploadData.append('description', descriptionAnnonce)
        uploadData.append('price', prixAnnonce)
        uploadData.append('weight', poidsAnnonce)
        uploadData.append('state', etatAnnonce)
        uploadData.append('isValid', true)
        uploadData.append('image', { type: 'image/jpg', uri: image.uri, name: 'upload_file.jpg' })
        // uploadData.append('imageURL', image)
        uploadData.append('brand', "DORADE")

        axios({
            method: 'post',
            url: BASE_URL + '/api/posts/post',
            headers: {
                'Content-Type': 'multipart/form-data',
                // 'Accept': 'application/ld+json'
            },
            data: uploadData

        }).then((response) => { console.log() })
            .catch((error) => { console.log() })
    }


    return (
        <SafeAreaView style={styles.main_container}>
            <TouchableOpacity onPress={pickImage}>
                <View style={styles.image_container}>
                    <Image style={styles.image} source={{ uri: image }} PlaceholderContent={<ImagePlaceHolder />} />
                </View>
            </TouchableOpacity>
            <View style={styles.body_container}>
                <TextInput style={styles.input} placeholder="Titre de l'annonce" onChangeText={value => setTittreAnnonce(value)} />
                <TextInput style={styles.input} placeholder="Référence" onChangeText={value => setRefAnnonce(value)} />
                <TextInput style={styles.input} placeholder="Lieu" onChangeText={value => setLieu(value)} />
                <TextInput style={styles.input} placeholder="Prix" keyboardType='numeric' onChangeText={value => setPrixAnnonce(value)} />
                <TextInput style={styles.input} placeholder="Etat" onChangeText={value => setEtatAnnonce(value)} />
                <TextInput style={styles.input} placeholder="Poids" keyboardType='numeric' onChangeText={value => setPoidsAnnonce(value)} />
            </View>

            <View style={styles.picker_container}>
                <View style={styles.categorie_picker}>
                    <Text style={styles.label}> Categorie: </Text>
                    <RNPickerSelect
                        onValueChange={(value) => setSelectCategorie(value)}
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
                        onValueChange={(value) => setSelectSousCategorie(value)}
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

            <View style={{ marginTop: 40 }}>
                <TextInput style={styles.input}
                    placeholder="Description"
                    multiline={true}
                    numberOfLines={6}
                    onChangeText={desc => setDescriptionAnnonce(desc)}
                />
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>

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

        </SafeAreaView >
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
        marginTop: 5
    },
    container: {
        flex: 1,
        paddingTop: 25,
        alignItems: "center",
        flexDirection: 'row'
    },
    image: {
        height: 150,
        borderWidth: 1,
        borderRadius: 15,
    },
    input: {
        height: 50,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'gray',
        paddingLeft: 10,
        marginTop: 3
    },
    addButton: {
        backgroundColor: 'white',
        width: 75,
        justifyContent: 'center',
    },
    picker_container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 5,
    },
    categorie_picker: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 5,
    },
    sous_categ_picker: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'flex-start',

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
        textAlign: 'left',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        width: 200,
        height: 20,
        paddingRight: 20,
        paddingLeft: 50,
        justifyContent: 'flex-start',
        marginLeft: 5
    }
});