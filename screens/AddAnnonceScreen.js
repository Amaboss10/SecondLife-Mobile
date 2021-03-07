import React, { useState, useEffect } from 'react';
import { View, Platform, Text, TextInput, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Image, Button, Icon, Input } from 'react-native-elements'
import ImagePlaceHolder from '../components/ImagePlaceHolder';
import RNPickerSelect from 'react-native-picker-select';
import { BASE_URL } from '../assets/constantes';
import axios from 'axios';
import InputWithIcon from '../components/InputWithIcon'



const AddAnnonceScreen = () => {

    //Les states permettent de stoker tous les champs des textInput
    const [titreAnnonce, setTittreAnnonce] = useState('');
    const [marqueAnnonce, setMarqueAnnonce] = useState('');
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
            setImage(result.uri);
        }

    };

    const getPrixFromInput = (prix) => {
        setPrixAnnonce(prix)
    }

    const getPoidsFromInput = (poids) => {
        setPoidsAnnonce(poids)
    }


    const resetAction = () => {
        setTittreAnnonce('')
        setPrixAnnonce(0)
        setPoidsAnnonce(0)
        setDescriptionAnnonce('')
        setMarqueAnnonce('')
        setEtatAnnonce('')
        setSelectCategorie('')
        setSelectSousCategorie('')
    }






    //Uploade des informations entrees par le client
    //TODO::ajouter datetime
    const uploadAnnonce = () => {
        // console.log(image.split('/').pop())

        //les données doivent être au format FormData
        // let localUri = new URL(image.uri);
        // let filename = image.split('/').pop()

        // let match = /\.(\w+)$/.exec(filename);
        // let type = match ? `image/${match[1]}` : `image`;
        // console.log(type)


        let uploadData = new FormData()
        uploadData.append('title', titreAnnonce)
        uploadData.append('description', descriptionAnnonce)
        uploadData.append('price', prixAnnonce)
        uploadData.append('weight', poidsAnnonce)
        uploadData.append('state', etatAnnonce)
        uploadData.append('isValid', true)
        uploadData.append('image', { type: "image/jpg", uri: image.path, name: 'uploadedImg.jpg' });
        uploadData.append('brand', marqueAnnonce)

        console.log(prixAnnonce)

        axios({
            method: 'post',
            url: BASE_URL + '/api/posts/post',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            data: uploadData
        }).then((response) => { console.log() })
            .catch((error) => { console.log() })


        resetAction()

    }



    return (
        <SafeAreaView style={styles.main_container}>
            <TouchableOpacity onPress={pickImage}>
                <View style={styles.image_container}>
                    <Image style={styles.image} source={{ uri: image }} placeholderStyle={styles.main_container} PlaceholderContent={<ImagePlaceHolder />} />
                </View>
            </TouchableOpacity>
            <View style={styles.body_container}>
                <TextInput value={titreAnnonce} style={styles.input} placeholder="Titre de l'annonce" onChangeText={value => setTittreAnnonce(value)} maxLength={25} />
                <TextInput value={etatAnnonce} style={styles.input} placeholder="Etat" onChangeText={value => setEtatAnnonce(value)} maxLength={25} />
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <InputWithIcon value={prixAnnonce} inputStyle={styles.inputText} iconName="eur" iconType="font-awesome" placeHolder="Prix" length={4} getText={getPrixFromInput} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <InputWithIcon value={poidsAnnonce} inputStyle={styles.inputText} iconName="balance-scale" iconType="font-awesome" placeHolder="Poids" length={4} getText={getPoidsFromInput} />
                    </View>
                </View>
            </View>

            <View style={styles.picker_container}>
                <View style={styles.categorie_picker}>
                    <Text style={styles.label}> Categorie: </Text>
                    <RNPickerSelect
                        value={selectCategorie}
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
                        value={selectSousCategorie}
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

            <View style={styles.desc}>
                <TextInput value={marqueAnnonce} style={styles.input} placeholder="Marque" onChangeText={value => setMarqueAnnonce(value)} maxLength={25} />
                <TextInput style={styles.inputDesc}
                    value={descriptionAnnonce}
                    placeholder="Description"
                    multiline={true}
                    numberOfLines={5}
                    maxLength={20}
                    onChangeText={desc => setDescriptionAnnonce(desc)}
                />
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                <Button style={styles.addButton} type="clear"
                    icon={
                        <Icon
                            name="add-circle"
                            size={50}
                            color="tomato"
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
        // backgroundColor: 'white'
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
        borderColor: 'tomato',
        // backgroundColor: "white"
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#bfbfbf',
        paddingLeft: 10,
        marginTop: 3
    },
    inputDesc: {
        height: 94,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#bfbfbf',
        paddingLeft: 10,
        marginTop: 3
    },
    inputText: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e6e6e6',
        paddingLeft: 10,
        marginTop: 3,
        width: 100,
        justifyContent: 'flex-start'
    },
    Text: {
        fontSize: 30,
        fontWeight: '400',
        fontStyle: 'italic'
    },
    addButton: {
        backgroundColor: 'white',
        width: 75,
        justifyContent: 'center',
    },
    picker_container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 5
    },
    categorie_picker: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
        flex: -1
    },
    sous_categ_picker: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'flex-start',
        flex: -2

    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 800,

    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
        borderWidth: 1,
        borderColor: '#e6e6e6'
    },
    desc: {
        marginTop: 5,
        flex: 2
    }

})
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        textAlign: 'left',
        borderWidth: 1,
        borderColor: '#e6e6e6',
        borderRadius: 4,
        color: 'black',
        // backgroundColor: 'tomato',
        width: 200,
        height: 25,
        paddingRight: 20,
        paddingLeft: 50,
        justifyContent: 'flex-start',
        marginLeft: 5
    }
});