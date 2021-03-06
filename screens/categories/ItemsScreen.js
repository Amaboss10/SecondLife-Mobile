import axios from 'axios'
import { View } from 'native-base'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'
import { BASE_URL, getItemsFromApi } from '../../assets/constantes'
import ArticleItem from '../../components/Item'
import { ActivityIndicator } from 'react-native'


/**
 * KAMIL BEN
 * 
 * Represente la vue dans le quelle les items seront affichés
 * On fait appelle à la fonction getItemsFromApi pour recupérer
 * les données dans la BD ensuite, nous les affichons.
 * Si la vue est en chargment on affiche en premier le spinner
 * pour montrer le chargement
 */
const ItemsScreen = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [carouselItems, setCarouselItems] = useState([])
    const [isLoading, setIsloading] = useState(true)

    let loadItems = () => {
        getItemsFromApi().then(data => {
            setCarouselItems(data["hydra:member"])
            setIsloading(false)
        })
    }

    //Fonction s'executant avant le chargement de la vue ItemScreen
    useEffect(() => {
        loadItems()
    }, [])

    if (isLoading) {
        return (
            <SafeAreaView style={localStyles.safeA, [{ backgroundColor: 'none', alignContent: 'center', justifyContent: 'center' }]}>
                <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <ActivityIndicator size="large" color="tomato" />
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={localStyles.safeA} >
            <View style={localStyles.container}>
                <Carousel
                    layout={"default"}
                    data={carouselItems}
                    sliderWidth={300}
                    itemWidth={380}
                    renderItem={({ item }) => <ArticleItem result={item} />}
                    onSnapToItem={index => (setActiveIndex(index))}
                />
            </View>
        </SafeAreaView>
    )
}



export default ItemsScreen

const localStyles = {
    safeA: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white'
    }

}