import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SectionList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BASE_URL } from '../assets/constantes';
import CategoryItem from '../components/CategoryItem';
import CategoryTitleItem from '../components/CategoryTitleItem';


const list = [
    { title: 'Téléphonie', data: ['Smartphone', 'Ecran', 'Batterie', 'Chargeur', 'Câbles'] },
    { title: 'Jeux', data: ['Console', 'Câbles', 'Manettes'] },
]

const CategoryScreen = ({ navigation }) => {

    const [categorieList, setCategorieList] = useState(null)
    const [sousCategorieList, setSousCategorieList] = useState(null)

    //permet de charger les catégories à partir de l'API
    const loadCategories = () => {
        axios({
            method: 'get',
            url: BASE_URL + '/api/categories',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/ld+json'
            }
        }).then((response) => {
            // console.log(response);
        }).catch((error) => {
            console.log(error)
        });
    }

    // on charge les categories avant que le component se lance
    useEffect(() => {
        loadCategories()
    }, [])


    return (
        <SafeAreaView>
            <SectionList
                sections={list}
                renderItem={({ item }) => <CategoryItem title={item} navigation={navigation} />}
                renderSectionHeader={({ section }) => <CategoryTitleItem title={section.title} />}
                keyExtractor={(item, index) => index}
            />
        </SafeAreaView>
    )
}


export default CategoryScreen;




const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
