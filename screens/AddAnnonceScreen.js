import React, { useState, useEffect } from 'react';
import { View, Platform, StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput,Text, TouchableOpacity } from 'react-native-gesture-handler';
import { Image, Button, Icon } from 'react-native-elements'
import ImagePlaceHolder from '../components/ImagePlaceHolder';


const AddAnnonceScreen = () => {
 
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
        <SafeAreaView style={styles.main_container}>
            <TouchableOpacity onPress={pickImage}>
                <View style={styles.image_container}>
                    <Image style={styles.image} source={{ uri: image }} PlaceholderContent={<ImagePlaceHolder />} />
                </View>
            </TouchableOpacity>
            <View style={styles.body_container}>
                <TextInput style={styles.input} placeholder="Titre de l'annonce"/>
                <TextInput style={styles.input} placeholder="Référence"/>
                <TextInput style={styles.input} placeholder="Catégorie"/>
                <TextInput style={styles.input} placeholder="Lieu"/>
                <TextInput style={styles.input}
                 placeholder="Prix"
                 keyboardType= 'numeric'

                 />
               
               

                {/* <TextInput style={styles.input} placeholder=""> </TextInput> */}

                {/* iconName = focused ? 'add-circle' : 'add-circle-outline'; */}
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button style={styles.addButton} type="clear"
                        icon={
                            <Icon
                                name="add-circle"
                                size={50}
                                color="orange"
                            />
                        }
                    />
                </View>
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
        flex: 1,
        marginTop: 30,
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
    }
})