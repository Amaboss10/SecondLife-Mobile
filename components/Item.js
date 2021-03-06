import React from 'react'
import { Text, View } from 'native-base'
import { AirbnbRating, Button, Image } from 'react-native-elements'
import ImagePlaceHolder from './ImagePlaceHolder'

const ArticleItem = ({ result }) => {

    console.log("les items")
    // console.log(props.result.description)
    return (
        <View style={localStyles.container}>
            <View style={localStyles.img_container}>
                <Image style={localStyles.img} source={{ uri: "https://i.ebayimg.com/images/g/1YgAAOSwy~JfzAGN/s-l300.jpg" }} />
            </View>
            <View style={localStyles.body}>
                <View style={localStyles.textContent}>
                    <Text style={localStyles.text}>Titre annonce: {result.titre}</Text>
                    <Text style={localStyles.text}>Marque: {result.marque}</Text>
                    <Text style={localStyles.text}>Ref: #12HFSFD</Text>
                    <Text style={localStyles.text}>Prix: {result.prix} €</Text>
                    <Text style={localStyles.text}>Etat: {result.etat}</Text>
                    <Text style={localStyles.text}>Description: {result.description}</Text>
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
        // backgroundColor: 'cyan',
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

        // borderWidth: 1,
        // borderColor: 'dark',
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        // borderWidth: 1,
        // borderColor: 'yellow'
    },
    body: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'black',

    },
    buyButtonContainer: {
        // borderWidth: 1,
        // borderColor: 'red',
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