
import React, { useState } from "react";
import { Text, View, Image, StyleSheet,TextInput, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Ionicons as Icon } from '@expo/vector-icons';
import { Button } from 'native-base';
import Dialog from "react-native-dialog";
let sizee = 30;

import '../global'

// global.connecter = false;

// const Perso = ({
//     nom: "AZIZI",
//     prenom: "Mohammed",
//     profile:'./assets/prf.jpg',
//     email: "AZIZI.mohammed@etu.unilim.fr",
//     adresse: "La Borie Limoges",
//     tel: "+3362552352 ",
//     naiss:'01/01/1998'
// });
const Perso = global.perso;

//-----------------------------------------
const getUsersFromApi = () => {
  return fetch('http://10.212.156.25:3000/personne')
    .then((response) => response.json())
    .then((json) => {
      global.users = json;
    })
    .catch((error) => {
      console.error(error);
    });
};
getUsersFromApi()
//-----------------------------------------
function AccountScreen ({ navigation }) {
  const [visible, setVisible] = useState(false);
 
  const showDialog = () => {
    setVisible(true);
  };
 
  const handleCancel = () => {
    setVisible(false);
  };
 
  const handleDelete = () => {
    global.connecter =false;
    setVisible(false);
  };
  if (connecter){
    return (
      
        <View>
            <View >
              
              <Text style={styles.nomm} > {Perso.nom} {Perso.prenom} </Text>


                <Image
                  style={styles.prf}
                  source={require('../assets/prf.jpg')} 
                />
                  

              <Image
              style={styles.logo}
              source={require('../assets/Top_Background.png')} 
              />
         
            </View>
            <View style={styles.cont}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={styles.ico} >
                <Ionicons name='mail-open' size={sizee} color='tomato' />
              </View>
              <View style={{width: 350, height: 60 , padding:10}} >
                <Text style={{ opacity:0.5 }}>Mail </Text>
                <Text>{Perso.email}</Text>
              </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={styles.ico} >
                <Ionicons name='call' size={sizee}  color='tomato' />
              </View>
              <View style={{width: 350, height: 60 , padding:10}} >
                <Text style={{ opacity:0.5 }}>Telephone </Text>
                <Text>{Perso.tel}</Text>
              </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={styles.ico} >
              <Ionicons name='calendar' size={sizee} color="tomato" />
              </View>
              <View style={{width: 350, height: 60, padding:10}} >
                <Text style={{ opacity:0.5 }}>Date de naissance </Text>
                <Text>{Perso.naiss}</Text>
              </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={styles.ico} >
                <Ionicons name='location-sharp' size={sizee} color='tomato' />
              </View>
              <View style={{width: 350, height: 60 , padding:10}} >
                <Text style={{ opacity:0.5 }}>Adresse </Text>
                <Text>{Perso.adresse}</Text>
              </View>
            </View>

            </View>
            <View style={{alignItems:'center'}}>
            <View  style={styles.button}> 

              <Button  style={styles.btn} 
              // onPress={fetchData}
               onPress={() => navigation.push('Edit')}    
               >
                  <Text style={{color:'white'}}
                     
                  > Modifier </Text>             
              </Button>

            </View>
            </View>

            <View style={{paddingLeft:370}}>
            <Icon name="log-out" style={styles.infoIcon} size={40} onPress={showDialog} />
            <Dialog.Container visible={visible}>
        <Dialog.Title>Deconnexion</Dialog.Title>
        <Dialog.Description>
          Etes-vous sur de vouloir se deconnecter ? :(
        </Dialog.Description>
        <Dialog.Button label="Annuler" onPress={handleCancel} />
        <Dialog.Button label="Se deconnecter" onPress={handleDelete} />
      </Dialog.Container>

            </View>

          </View>

    );
  }
  else{
    return(
      <View>
        {/* <Text>teexxt </Text> */}
        {alert('veuillez vous connectez ! ')}
        {navigation.push('Login')}
      </View>
    );
    
  }
}

export default AccountScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    logo: {
      position: 'absolute',
      top: 0,
      left:0,
      margin:0,padding:0,
      width:420,
      height:260,
      resizeMode: 'stretch',
    },
    prf: {
      position: 'absolute',
      top: 150,
      left:250,
      margin:0,padding:0,
      width:100,
      height:100,
      zIndex: 2,
      borderRadius: 50,   
    },
    nomm : { 
      position: 'absolute',
      top: 130,
      left: 30,
      margin:0,padding:0,
      fontWeight: "bold", 
      zIndex: 2,
      color:'white',
     },
    cont : { 
      position:'absolute',
      top:350,
      paddingVertical: 8,
      paddingHorizontal: 45,
      fontSize: 30,
      fontWeight: "bold",
     },
     button : { 
      position:'relative',
      top:'1000%',
      paddingTop:20,
      justifyContent:'center'
     },
     btn : { 
      alignItems: 'center',
      textAlign: 'center',
      width:200,
      height:40,
      backgroundColor:'tomato',
      borderRadius: 40,
      textAlign: 'center',
      justifyContent: 'center',
    },
    ico : {
      width: 56,
      height:56,
      padding:12,
      marginRight:30,
      borderRadius: 60,
      borderWidth:1,
      borderColor:'#DADADA',
      shadowColor: "#000",
      shadowOffset: {
        width: 6,
        height: 6,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
  
      elevation: 24,
    },
    infoText:{
      color: '#676767',
      fontSize: 25,
      
    },
    infoIcon:{
      
      color: "#FFFFFF",
      marginRight: 5,
      
    }
  });
