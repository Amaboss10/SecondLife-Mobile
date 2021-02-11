import React from 'react'
import { Text, View } from 'native-base'
import { Icon } from 'react-native-elements'

const ImagePlaceHolder = () => {
    return (
        <View>
            <Icon name="image-outline" type="ionicon" size={40}></Icon>
            <Text>Ajouter une photo</Text>
        </View>
    )
}

export default ImagePlaceHolder