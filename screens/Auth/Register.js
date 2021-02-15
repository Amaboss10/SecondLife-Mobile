import React, { Component } from 'react';
import { Text, View, Image, StyleSheet,TextInput, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Button, Row } from 'native-base';
import { Directions } from 'react-native-gesture-handler';
const styles = {
    ico: {
    flexDirection: 'row',
    },
    screen: {
       height: '100%',
       width:'100%',
       alignItems: 'center',
       justifyContent: 'center',
   },
   body_container:{
        flexDirection: 'column',
        height: '100%',
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
   },
   buttons : {
    paddinTop: 10,
    flexDirection: 'column',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
   },
   input: {
       height: 50,
       width:300,
       borderWidth: 1,
       borderRadius: 5,
       borderColor: 'gray',
       paddingLeft: 10,
       marginTop: 10,
   },
   background: {
       position: 'absolute',
       left: 0,
       right: 0,
       top: 0,
       height: '100%',
   },
   btn : { 
       marginTop: 30,
       width:'70%',
       height:55,
       backgroundColor:'tomato',
       borderRadius: 40,
       justifyContent: 'center',
       left:'72%'
   }
}
// const AuthContext = React.createContext();


function  loginsucc(){

    alert('inscrit');
    //navigation.navigate('Annonce');
}

 function Register({ navigation }) {
   
    const [nom, setNom] = React.useState('');
    const [prenom, setPrenom] = React.useState('');
    const [mail, setMail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    // const { signIn } = React.useContext(AuthContext);

   
    return (
        <View style={styles.screen}>
            <LinearGradient
                colors={['#ffffff', '#c6f6ff', '#ff6347']}
                style={styles.background}
            >

            <View style={styles.body_container}>
                <Text>
                    Crée un compte 
                </Text>
                <View style={styles.ico}>
                    {/* <Ionicons style={{padding:12,paddingTop:15}} name="person" size={20} color="#000"/> */}
                    <TextInput 
                        style={styles.input} 
                        placeholder="Nom"  
                        value={nom}
                        onChangeText={setNom}
                    />
                </View>
                <View style={styles.ico}>
                    {/* <Ionicons style={{padding:12,paddingTop:15}} name="person" size={20} color="#000"/> */}
                    <TextInput 
                        style={styles.input} 
                        placeholder="prenom"  
                        value={prenom}
                        onChangeText={setPrenom}
                    />
                </View>
                <View style={styles.ico}>
                    {/* <Ionicons style={{padding:12,paddingTop:15}} name="person" size={20} color="#000"/> */}
                    <TextInput 
                        style={styles.input} 
                        placeholder="mail"  
                        value={mail}
                        onChangeText={setMail}
                    />
                </View>
                <View style={styles.ico}>
                    {/* <Ionicons style={{padding:12,paddingTop:15}} name="person" size={20} color="#000"/> */}
                    <TextInput 
                        style={styles.input} 
                        placeholder="date"  
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>
                <View style={styles.ico}>     
                   {/* <Ionicons style={{padding:12,paddingTop:15}} name="lock-open" size={20} color="#000"/> */}
                    <TextInput 
                        style={styles.input} 
                        placeholder="Mot de passe"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={setPassword}

                    />
                </View>
                <View style={styles.ico}>     
                   {/* <Ionicons style={{padding:12,paddingTop:15}} name="lock-open" size={20} color="#000"/> */}
                    <TextInput 
                        style={styles.input} 
                        placeholder="confirmer mot de passe"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={setPassword}

                    />
                </View>
                {/* <View style={{ alignItems: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                    source={{ uri: 'https://media.discordapp.net/attachments/697960252011970600/805578022891421706/Logo_Khbur_cmp.png' }}
                    style={{ width: 130, height: 70, justifyContent: 'center', margin: 17 }}
                    />
                </View> */}
                <View style={styles.buttons}>
                    {/* <Button  style={styles.btn}   >
                        <Text style={{color:'white'}} 
                        
                        > Se connecter </Text>             
                    </Button> */}

                    <Button  style={styles.btn}   >
                        <Text style={{color:'white'}}
                           onPress={loginsucc}
                            // onPress={() => navigation.push('Edit')}  
                        > S'inscrire</Text>             
                    </Button>

                </View>
            </View>

            </LinearGradient>
        </View>
    );
}


export default Register;
