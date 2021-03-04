import React, { useState } from 'react'
import { Text, View } from 'native-base'
import { Button, Image } from 'react-native-elements'
import ImagePlaceHolder from './ImagePlaceHolder'

const ArticleItem = ({ result }) => {

    console.log("les items")
    // console.log(props.result.description)
    return (
        <View style={localStyles.container}>
            <View style={localStyles.img_container}>
                <Image style={localStyles.img} PlaceholderContent={<ImagePlaceHolder />} />
            </View>
            <View style={localStyles.body}>
                <Text style={localStyles.text}>Titre annonce: {result.titre}</Text>
                <Text style={localStyles.text}>Marque: {result.marque}</Text>
                <Text style={localStyles.text}>Ref: #12HFSFD</Text>
                <Text style={localStyles.text}>Prix: {result.prix} €</Text>
                <Text style={localStyles.text}>Etat: {result.etat}</Text>
                <Text style={localStyles.text}>Description: {result.description}</Text>
                <Button
                    title="Acheter"
                />
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
        backgroundColor: 'cyan',
        borderRadius: 5,
        height: '90%',
        paddig: 50,
        marginLeft: 25,
        marginRight: 24

    },
    title: {

    },
    text: {
        fontSize: 15
    },
    img_container: {
        flex: 1,
        padding: 5,
        borderWidth: 1,
        borderColor: 'dark',
    },
    img: {
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor: 'yellow'
    },
    body: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black'
    }
}