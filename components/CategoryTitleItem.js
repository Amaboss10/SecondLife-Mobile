import React from 'react'
import { Text } from 'native-base'
import { StyleSheet } from 'react-native'




const CategoryTitleItem = ({ title }) => {
    return (
        <Text style={styles.title}>{title}</Text>
    )
}


export default CategoryTitleItem

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        padding: 5,
    }
})