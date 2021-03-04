import { Icon, Text, View } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'





const CategoryItem = ({ title, navigation }) => {
    // console.log(navigation)


    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate(title, { screenTitle: title })
        }}>
            <View style={localStyles.container} >
                <Text style={localStyles.title}>{title}</Text>
                <Icon style={localStyles.icon} name="chevron-forward-outline" />
            </View>
        </TouchableOpacity>
    )
}


export default CategoryItem


const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        marginBottom: 5,
        paddingLeft: 10,
        borderBottomColor: '#d9d9d9',
        borderBottomWidth: 1,

    },
    title: {
        paddingLeft: 5,
        flex: 1,
    },
    icon: {
        color: '#d5d8e0'
    }
})