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
                <TextInput style={styles.input} placeholder="Lieu"/>
                <TextInput style={styles.input}
                 placeholder="Prix"
                 keyboardType= 'numeric'
                />
         
         
               </View>
               <View style={{ borderColor: 'blue',borderWidth: 2, flex: 2, flexDirection:'row'}}>
              
               
                  
            
               </View>       
        
                
                 <View style={{ flex: -3, alignItems: 'center', justifyContent: 'center',
                  borderColor: 'yellow', borderWidth: 2 }}>
              
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
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: 2
    },
    image_container: {
    },
    body_container: {
        flex: -3,
        marginTop: 30,
        borderColor: 'green',
        borderWidth: 2
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
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
        width:50,  
        height:10,
    }
})
