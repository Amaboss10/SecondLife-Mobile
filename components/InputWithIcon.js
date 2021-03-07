import React from 'react'


import { Icon } from 'react-native-elements'
import { View, TextInput } from 'react-native'

const InputWithIcon = (props) => {


    return (
        <View style={localStyles.container}>
            <TextInput onChangeText={(value) => { props.getText(value) }} placeholder={props.placeHolder} maxLength={props.length} style={{ flex: 1, paddingLeft: 10, borderRadius: 5, height: '100%', width: 10 }}></TextInput>
            <Icon name={props.iconName} type={props.iconType} style={localStyles.icon} size={20} color="#737373" />
        </View >
    )
}


export default InputWithIcon

const localStyles = {
    container: {
        // flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e6e6e6',
        flexDirection: 'row',
        height: 50,
        width: 100,
        marginTop: 5
    },
    icon: {
        flex: 1,
        marginTop: 12,
        paddingRight: 5,
    }
}