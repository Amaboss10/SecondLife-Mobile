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
       marginTop: 5,
   },
   background: {
       position: 'absolute',
       left: 0,
       right: 0,
       top: 0,
       height: '100%',
   },
   btn : { 
       marginTop: 15,
       width:'70%',
       height:55,
       backgroundColor:'tomato',
       borderRadius: 40,
       justifyContent: 'center',
       left:'45%'
   }
}
// const AuthContext = React.createContext();

let connecte = true ;

function Login({ navigation }) {
    
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
                
                <View style={styles.ico}>
                    <Ionicons style={{padding:12,paddingTop:15}} name="person" size={20} color="#000"/>
                    <TextInput 
                        nativeID="user"
                        style={styles.input} 
                        placeholder="Login"  
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>
                <View style={styles.ico}>     
                   <Ionicons style={{padding:12,paddingTop:15}} name="lock-open" size={20} color="#000"/>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Mot de passe"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={setPassword}

                    />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                    source={{ uri: 'https://media.discordapp.net/attachments/697960252011970600/805578022891421706/Logo_Khbur_cmp.png' }}
                    style={{ width: 130, height: 70, justifyContent: 'center', margin: 17 }}
                    />
                </View>
                <View style={styles.buttons}>
                    <Button  style={styles.btn} 
                        onPress={  
                            // () =>navigation.push('Comptes'),
                            () =>loginsucc
                        }
                          >
                        <Text style={{color:'white'}}> Se connecter </Text>             
                    </Button>

                    <Button  style={styles.btn} 
                    onPress={() => navigation.push('Register')}    >
                        <Text style={{color:'white'}} > S'inscrire</Text>             
                    </Button>

                </View>
            </View>

            </LinearGradient>
        </View>
    );
}
function  loginsucc(){
    
    // alert();
    connecte = true;
    alert('connected'+ connecte );
    
    // navigation.goBack('Compte');
}


export default Login;
export  {connecte};
