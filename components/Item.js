import React from 'react'
import { Text, View } from 'native-base'
import { AirbnbRating, Button, Image } from 'react-native-elements'
import { BASE_URL } from '../assets/constantes'
// import { Image } from 'react-native'


/**
 * KAMIL BEN
 * 
 * @param {result} param0 
 * ArticleItem retourne la vue que l'on va voir sur toutes les categories
 * Si on choisie une categorie, c'est ce component qui être afficher
 * dans toutes vues de chaque categories en affichant les informations 
 * de chaque article de la categorie selectionnée
 * 
 */
const ArticleItem = ({ result }) => {
    // console.log(result.imageURL)

    return (
        <View style={localStyles.container}>
            <View style={localStyles.img_container}>
                <Image style={localStyles.img} source={{ uri: BASE_URL + result.imageURL }} />
                {/* <Image style={localStyles.img} source={{ uri: BASE_URL + "/annonces/iphone_12.png" }} /> */}
            </View>
            <View style={localStyles.body}>
                <View style={localStyles.textContent}>
                    <Text style={localStyles.text}>Titre annonce: {result.title}</Text>
                    <Text style={localStyles.text}>Marque: {result.brand}</Text>
                    <Text style={localStyles.text}>Prix: {result.price} €</Text>
                    <Text style={localStyles.text}>Etat: {result.state}</Text>
                    <Text style={localStyles.text}>Description: {result.description}</Text>
                    <Text style={localStyles.text}>Marque: {result.brand}</Text>
                    <AirbnbRating
                        count={5}
                        reviews={["Terrible", "Meh", "OK", "Bien", "Très bien"]}
                        defaultRating={5}
                        size={20}
                    />
                </View>
                <View style={localStyles.buyButtonContainer}>
                    <Button title="Acheter" buttonStyle={localStyles.buyButton} color="#f0bd32" />
                </View>

            </View>
        </View >
    )
}


export default ArticleItem

const localStyles = {
    fontSize: 15,
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        borderRadius: 5,
        height: '90%',
        marginLeft: 40,
    },
    title: {

    },
    text: {
        fontSize: 15
    },
    img_container: {
        flex: 1,
        padding: 5,
    },
    img: {
        width: '100%',
        height: '100%',
        // width: 100,
        // height: 100,
        borderRadius: 15,
    },
    body: {
        flex: 1,
    },
    buyButtonContainer: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 10,
        width: '100%',
    },
    buyButton: {
        borderRadius: 20,
        width: '100%',
        height: 60,
        position: 'relative',

    },
    textContent: {
        padding: 15,
    }

}