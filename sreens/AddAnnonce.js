import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Style, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Home  from './Home.js'


function _onCancel(){
    return this.Home = () => {}
}

const AddAnnonce = () => {
    return (
        <ScrollView>
        <View  style={{flexDirection: 'row'}}>
        <Button style={styles.Text} title= "Annuler" onPress={() => this._onCancel() } />
        <Text style={styles.Text1}>Ajoutez une annonce </Text>
        </View>


        <View style={styles.main_container}>
        <Text style={styles.title_text}>Titre de l'annonce </Text>
        <Image
          style={styles.image}
          source={{uri: ""}}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <TextInput style={styles.title_text1} placeholder= "Titre de l'Annonce" />
            </View>
            <View style={styles.header_container2}>
            <TextInput style={styles.title_text2} placeholder= "Prix" />
            </View>
            <View style={styles.header_container}>
            <TextInput style={styles.title_text1} placeholder= "Catégorie" />
            <TextInput style={styles.title_text1} placeholder= "Ref" />
            <TextInput style={styles.title_text1} placeholder= "Lieu/Date" />
          </View>
          
        </View>
      </View>
        </ScrollView>
  );
}
  


   
    
const styles = StyleSheet.create({
  main_container: {
    height: 190,
   // flexDirection: 'row',
    margin: 10,
  },
   content_container: {
    flex: 1,
    margin: 5
  },
  image: {
    width: 150,
    height: 100,
    alignItems:'center',
    justifyContent:'flex-start',
    backgroundColor: 'gray', 
    flex:1
  },
  header_container: {
    flex:7
  },
  header_container2: {
    flex:7,
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'flex-end'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 17,
    margin:-1 ,
    flex: 1
  },
  title_text1: {
    fontWeight: 'bold',
    fontSize: 13,
   flexWrap: 'wrap',
    paddingRight: 5,
  },
  title_text2: {
    fontWeight: 'bold',
    fontSize: 13,
   flexWrap: 'wrap',
    paddingRight: 5,
    flexDirection: 'row',
    alignItems:'flex-end'
  },
  Styles: {
       width: 113, 
       height: 60, 
       justifyContent: 'flex-start', 
       margin:17 
       },
    Text: {
      alignItems:'flex-start',
      justifyContent: 'flex-start',
      

    },
    Text1: {
      alignItems:'flex-end',
      justifyContent: 'flex-end',
      paddingLeft: 55,
      fontSize: 20,
      fontWeight: 'bold'

    }
});


export default AddAnnonce;