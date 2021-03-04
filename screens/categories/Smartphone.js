import axios from 'axios'
import { View } from 'native-base'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'
import { BASE_URL } from '../../assets/constantes'
import ArticleItem from '../../components/Item'
import { ActivityIndicator } from 'react-native'


const Smartphone = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [carouselItems, setCarouselItems] = useState([])
    const [isLoading, setIsloading] = useState(true)

    const loadItems = () => {
        axios({
            method: 'get',
            url: BASE_URL + '/api/annonces',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/ld+json'
            }
        }).then((response) => {
            //on met les données dans le carouselItems
            setCarouselItems(response.data["hydra:member"])
            setIsloading(false)
        }).catch((error) => {
            console.log(error)
        });
    }


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
            {/* {isLoading ? <ActivityIndicator size="large" color="tomato" /> : null} */}
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



export default Smartphone

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