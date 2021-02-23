import React, { Component } from 'react';
import { Text, View, Image, StyleSheet,TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'native-base';

let sizee = 30

const Perso = ({
    nom: "AZIZI",
    prenom: "Mohammed",
    profile:'./assets/prf.jpg',
    email: "AZIZI.mohammed@etu.unilim.fr",
    adresse: "La Borie Limoges",
    tel: "+3362552352 ",
    naiss:'01/01/1998'
});

function EditProScreen({navigation}) {
    const [nom, setNom] = React.useState('');
    const [prenom, setPrenom] = React.useState('');
    const [mail, setMail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
     <View >
      
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
         <View style={{width: 220, height: 60}} >
           {/* <Text style={{ opacity:0.5 }}>Mail </Text> */}
              <TextInput 
                  style={styles.input} 
                  placeholder="Mail"  
                  value={Perso.email}
                  onChangeText={setMail}
              />
           {/* <TextInput
             style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 }}
             // onChangeText={text => onChangeText(text)}
             value={Perso.email}
           /> */}
         </View>
       </View>
 
       
 
       <View style={{flex: 1, flexDirection: 'row'}}>
         <View style={styles.ico} >
           <Ionicons name='call' size={sizee}  color='tomato' />
         </View>
         <View style={{width: 220, height: 60}} >
           <Text style={{ opacity:0.5 }}>Telephone </Text>
           <TextInput 
                style={styles.input} 
                placeholder="Tel"  
                value={Perso.tel}
                onChangeText={setMail}
            />
         </View>
       </View>
 
       <View style={{flex: 1, flexDirection: 'row'}}>
         <View style={styles.ico} >
         <Ionicons name='calendar' size={sizee} color="tomato" />
         </View>
         <View style={{width: 220, height: 60}} >
           <Text style={{ opacity:0.5 }}>Date de naissance </Text>
           <TextInput
             style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 }}
             value={Perso.naiss}
           />
         </View>
       </View>
 
       <View style={{flex: 1, flexDirection: 'row'}}>
         <View style={styles.ico} >
           <Ionicons name='location-sharp' size={sizee} color='tomato' />
         </View>
         <View style={{width: 220, height: 60}} >
           <Text style={{ opacity:0.5 }}>Adresse </Text>
           <TextInput
             multiline = {true}
             numberOfLines = {3}
             style={{ height: 40,height:100, borderColor: 'gray', borderBottomWidth: 1,
             backgroundColor: "#FFF", textAlignVertical : "top" }}
             onChangeText={(text) => this.setState({text})}
             value={Perso.adresse}
           />
 
         </View>
       </View>
         
       </View>
       
       <View style={{flexDirection:'row',justifyContent:'center'}}>
       <View  style={styles.button}> 
         
           <Button  style={styles.btn}   
               onPress={() => navigation.goBack('Edit')}  
           >
             <Text style={{color:'white'}} > Sauvegarder </Text>             
         </Button>
       </View>
       <View  style={{position:'relative',
      paddingTop:620,
      paddingLeft:10}}> 
       <Button  style={{alignItems: 'center',
      textAlign: 'center',
      width:170,
      height:40,
      backgroundColor:'grey',
      borderRadius: 40,
      textAlign: 'center',
      justifyContent: 'center'}}   
               onPress={() => navigation.goBack('Edit')}  
           >
             <Text style={{color:'white'}} > Annuler </Text>             
         </Button>
         </View>
       </View>
     </View >
   );
 }
export default EditProScreen;


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
      top:300,
      paddingVertical: 8,
      paddingHorizontal: 45,
      fontSize: 30,
      fontWeight: "bold",
     },
     button : { 
      position:'relative',
      paddingTop:620,
      
     },
     btn : { 
      alignItems: 'center',
      textAlign: 'center',
      width:170,
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
  //   input: {
  //     height: 50,
  //     width:290,
  //     borderWidth: 1,
  //     borderRadius: 5,
  //     borderColor: 'gray',
  //     paddingLeft: 10,
  //     marginTop: 10,
  // }
  });