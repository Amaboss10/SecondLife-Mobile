import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StyleSheet, Image , Text,View} from 'react-native';
//import { Button } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchBar} from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
//import { SliderBox } from "react-native-image-slider-box";
import { LinearGradient } from 'expo-linear-gradient';





const Favorite = () => {
        const [value, setValue] = React.useState("");
  return (
    <View>
      <LinearGradient
       colors={['#ffffff', '#c6f6ff', '#ff6347']}
       style={styles.background}
      >
      <View style={{}}>
      <View  style={{ alignItems: 'center', justifyContent: 'center', alignItems: 'center'}}>
      <Image
  source={{ uri: 'https://media.discordapp.net/attachments/697960252011970600/805578022891421706/Logo_Khbur_cmp.png' }}
  style={{ width: 113, height: 60, justifyContent: 'center', margin:17}}
/>
</View>
<View style={{margin:-13 ,marginLeft:1 , padding:-29 }}>
    <SearchBar
      platform="android"
      containerStyle={{paddingBottom:-10 , paddingTop:-10}}
      inputContainerStyle={{}}
      inputStyle={{}}
      leftIconContainerStyle={{}}
      rightIconContainerStyle={{}}
      loadingProps={{}}
      onChangeText={newVal => setValue(newVal)}
      onClearText={() => console.log(onClearText())}
      placeholder="Rechercher ici"
      placeholderTextColor="#888"
      cancelButtonTitle="Cancel"
      cancelButtonProps={{}}
      onCancel={() => console.log(onCancel())}
      value={value}
    />
    </View>
    <View style={{textAlign:'left',margin:20}}>
    <Text style={{color:'#000000' , fontWeight:'500' , fontSize:'20'}} >Les Favoris :</Text>
    </View>
    </View>
    </LinearGradient>
     <View style={{width: 150, height: 150}}> 
      
      </View>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00f',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Favorite;