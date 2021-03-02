import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet,ScrollView ,View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../../components/log/Background'
import Logo from '../../components/log/Logo'
import Header from '../../components/log/Header'
import Button from '../../components/log/Button'
import TextInput from '../../components/log/TextInput'
import BackButton from '../../components/log/BackButton'
// import { theme } from '../core/theme'
import '../../global'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { LinearGradient } from 'expo-linear-gradient';

function verifConexion(mail,pswrd){
  var conn =false;
    for(i=0;i<5;i++)
    {
      if(mail==global.users[i].mail_personne && pswrd==global.users[i].mdp_personne)
      {
        
        conn = true
        global.perso.nom = global.users[i].nom_personne
        global.perso.prenom = global.users[i].prenom_personne
        global.perso.email = global.users[i].mail_personne
      
      }
    }
    return conn;
    
}

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    
    
    // if (email.value=='azizi@gmail.com' && password.value=='admin'){
    if (verifConexion(email.value,password.value)) {
      alert('connecter en tant que : ' +email.value)
      global.connecter = true;
      navigation.replace('Compte')
      navigation.navigate('Accueil') 
    }
   
  }

  return (
    
<LinearGradient
       colors={['#ffffff', '#c6f6ff', '#ff6347']}
       style={styles.background}
      >
         
           <View style={{paddingLeft:100}}>
         <Logo />
         </View>
      <Text style={{textAlign:'center' , fontSize:20}}>Bienvenue</Text>
     
      <View style={{paddingLeft:6}}>
     
      <TextInput
      style={{width:400 , height:40 }}
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
      style={{width:400 , height:40 }}
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      </View>

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          // onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <View style={{justifyContent:'center',
    textAlign:'center',
    alignContent:'center',
    alignItems:'center'}}>
          <Text style={styles.forgot}>Forgot your password?</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent:'center' }}>
      <Button style={{   }}
              color="tomato" 
              icon="" 
              mode="contained" >
              Login
              </Button>
      </View>
      <View style={styles.row}>
        <Text style={{textAlign:'center' }}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Register')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
  
    </LinearGradient>


  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent:'center',
    alignContent:'center',
    marginTop: 4,
  },
  forgot: {
    paddingRight:130,
    textAlign:'center',
    fontSize: 13,
    // color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    // color: theme.colors.primary,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
   
  },
})

export default LoginScreen
