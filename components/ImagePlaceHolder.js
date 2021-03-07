import React from 'react'
import { Text, View } from 'native-base'
import { Icon } from 'react-native-elements'


/**
 * KAMIL BEN 
 * 
 * 
 * Ce component represente l'image qui sera par defaut
 * si l'on ne trouve pas une image dans la BD 
 */
const ImagePlaceHolder = () => {
    return (
        <View style={localStyles.container}>
            <Icon name="image-outline" type="ionicon" size={40} color={localStyles.color}></Icon>
            <Text style={localStyles.msgText}>Ajouter une photo</Text>
        </View>
    )
}

export default ImagePlaceHolder

const localStyles = {
    container: {
        backgroundColor: "white"
    },
    color: "tomato",
    msgText: {
        color: "tomato"
    }
}