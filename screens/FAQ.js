import * as React from 'react';
//import Component from 'react';
//import SearchInput, { createFilter } from 'react-native-search-filter';
import { useState } from 'react';
//import { Ionicons as Icon } from '@expo/vector-icons';
import { Image,StyleSheet , FlatList, SafeAreaView,Text, View , ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
//import { SearchBar} from "react-native-elements";
//import { SliderBox } from "react-native-image-slider-box";
import { LinearGradient } from 'expo-linear-gradient';
import { Divider } from "react-native-elements";
//import { Card} from "react-native-elements";
//import { TouchableOpacity } from 'react-native-gesture-handler';
//import { OptionsButton } from 'react-native-options-button'
//import { List, Button } from 'react-native-paper';
//import RNPickerSelect from 'react-native-picker-select';
//import ModalDropdown from 'react-native-modal-dropdown';
//import ImageView from 'react-native-image-view';

//import Icon from 'react-native-vector-icons/FontAwesome';




function FaqScreen({ navigation }) {
  
  return (
    <LinearGradient
       colors={['#ffffff', '#c6f6ff', '#ff6347']}
       style={styles.background}
      >
        <ScrollView>
        <View style={{ textAlign: 'left', marginTop:10 , paddingLeft:10 }}>
             <Text style={{ color: '#000000', fontWeight: '500', fontSize: 16 }} >FAQ :</Text>
        </View>
          <Divider style={{ width: "80%", margin: 20  }} />
        <View style={{ flex: 1, paddingTop: 5 , backgroundColor: 'rgba(242, 250, 250, 42)'}}>
    



{/* code faq  */}



    
        </View>
    </ScrollView>
   <View style={{height: 177}}>
       {/* navbar  */}
   </View>
    </LinearGradient>
    
  );
}

function ReponseUne({ navigation }) {
 
  return (
    <LinearGradient
       colors={['#ffffff', '#c6f6ff', '#ff6347']}
       style={styles.background}
      >
         <ScrollView>
      <View style={{}}>
     
     
    {/* code reponse 1  */}
    



    </View>
    </ScrollView>
    <View style={{height: 185}}>
       {/* navbar  */}
   </View>
    </LinearGradient>
  );
}



function ReponseDeux({ navigation }) {
    
    return (
      <LinearGradient
         colors={['#ffffff', '#c6f6ff', '#ff6347']}
         style={styles.background}
        >
           <ScrollView>
        <View style={{}}>
       
       
      {/* code reponse 2  */}
  
  
  
      </View>
      </ScrollView>
      <View style={{height: 185}}>
         {/* navbar  */}
     </View>
      </LinearGradient>
    );
  }
  

  function ReponseTrois({ navigation }) {
    
    return (
      <LinearGradient
         colors={['#ffffff', '#c6f6ff', '#ff6347']}
         style={styles.background}
        >
           <ScrollView>
        <View style={{}}>
       
       
      {/* code reponse 3  */}
  
  
  
      </View>
      </ScrollView>
      <View style={{height: 185}}>
         {/* navbar  */}
     </View>
      </LinearGradient>
    );
  }
  

  function ReponseQuatre({ navigation }) {
   
    return (
      <LinearGradient
         colors={['#ffffff', '#c6f6ff', '#ff6347']}
         style={styles.background}
        >
           <ScrollView>
        <View style={{}}>
       
       
      {/* code reponse 4  */}
  
  
  
      </View>
      </ScrollView>
      <View style={{height: 185}}>
         {/* navbar  */}
     </View>
      </LinearGradient>
    );
  }
  
  function ReponseCinq({ navigation }) {
    
    return (
      <LinearGradient
         colors={['#ffffff', '#c6f6ff', '#ff6347']}
         style={styles.background}
        >
           <ScrollView>
        <View style={{}}>
       
       
      {/* code reponse 5  */}
  
  
  
      </View>
      </ScrollView>
      <View style={{height: 185}}>
         {/* navbar  */}
     </View>
      </LinearGradient>
    );
  }
  



const Stack = createStackNavigator();

function Faq() {
  return (
   
      <Stack.Navigator initialRouteName="Faq">
        <Stack.Screen name="FaqAccueil" component={FaqScreen} />
        <Stack.Screen name="Reponse1" component={ReponseUne} />
        <Stack.Screen name="Reponse2" component={ReponseDeux} />
        <Stack.Screen name="Reponse3" component={ReponseTrois} />
        <Stack.Screen name="Reponse4" component={ReponseQuatre} />
        <Stack.Screen name="Reponse5" component={ReponseCinq} />
      </Stack.Navigator>
   
  );
}

export default Faq;



const styles = StyleSheet.create({
  container: {
      flex: 1,
      
  },
    cont : { 
      flex: 1,
      justifyContent: 'center',
      marginTop: 16,
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#70EE9C",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold" 
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 800,
     
    },
    quizAttrContent:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center', 
      flex: 1,
      borderTopWidth: 1,
      borderTopColor: '#e0e0e0',
      height: 25,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      margin: 5,
      paddingTop: 3
    },
    quizAttrLeft:{
      flexDirection: 'row',
      alignItems: 'center', 
      justifyContent: 'center',
      marginLeft: 2
    },
    quizAttrMid:{
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'row',
    },
    quizAttrRight:{
      flexDirection: 'row',
      alignItems: 'center', 
      justifyContent: 'center',
      marginRight: 2,
    },
    infoText:{
      color: '#676767',
      fontSize: 25,
      
    },
    infoIcon:{
      color: "#676767",
      marginRight: 5,
      
    }
    
});


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      fontSize: 16,
      paddingTop: 13,
      paddingHorizontal: 10,
      paddingBottom: 12,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      backgroundColor: 'white',
      color: 'black',
      width:50,  
      height:10,
  },
});


