import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../../components/log/Background'
import Logo from '../../components/log/Logo'
import Header from '../../components/log/Header'
import Button from '../../components/log/Button'
import TextInput from '../../components/log/TextInput'
import { LinearGradient } from 'expo-linear-gradient';

import BackButton from '../../components/log/BackButton'
// import { theme } from '../core/theme'

import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }


    alert('bienvenue :' +email.value)
    global.connecter = true;
    navigation.replace('Compte')
    navigation.navigate('Accueil') 
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Dashboard' }],
    // })
  }
  
  return (
    <LinearGradient
       colors={['#ffffff', '#c6f6ff', '#ff6347']}
       style={styles.background}
      >
         <Background>
      {/* <BackButton goBack={navigation.goBack} /> */}
      <Logo  />
      <Header>S'identifier</Header>
      <TextInput
        label="Nom"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
        style={{height:40}}
      />

<TextInput
        label="Prenom"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
        style={{height:40}}
      />


      <TextInput
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
        style={{height:40}}
      />
      <TextInput
        label="Mot de passe"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        onCancel={(text) => setPassword({ value: text, error: '' })}// hadi ??
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        style={{height:40}}
      />
      <Button
        mode="contained"
        color="tomato"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        S'inscrire
      </Button>
      <View style={styles.row}>
        <Text>Vous avez déjà un compte? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={styles.link}>Connexion</Text>
        </TouchableOpacity>

      </View>
    </Background>
          
  
    </LinearGradient>

  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
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

export default RegisterScreen
