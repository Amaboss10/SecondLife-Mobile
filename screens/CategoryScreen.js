import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryItem from '../components/CategoryItem';
import CategoryTitleItem from '../components/CategoryTitleItem';


const list = [
    { title: 'Téléphonie', data: ['Smartphone', 'Ecran', 'Batterie', 'Chargeur', 'Câbles'] },
    { title: 'Jeux', data: ['Console', 'Câbles', 'Manettes'] },
]

const CategoryScreen = () => {
    return (
        <SafeAreaView>
            <SectionList
                sections={list}
                renderItem={({ item }) => <CategoryItem title={item} />}
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
