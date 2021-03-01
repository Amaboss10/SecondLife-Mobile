import { Image,StyleSheet,ActivityIndicator , FlatList, SafeAreaView,Text, View , ScrollView , TextInput} from 'react-native';
import React from "react";
import { useState } from 'react';
import { Ionicons as Icon } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchBar} from "react-native-elements";
import { SliderBox } from "react-native-image-slider-box";
import { LinearGradient } from 'expo-linear-gradient';
import { Divider } from "react-native-elements";
import { Card} from "react-native-elements";
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { OptionsButton } from 'react-native-options-button'
import { List, Button } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import ModalDropdown from 'react-native-modal-dropdown';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Textarea } from 'native-base';


const data = [1]

export  class HomeScreen extends React.Component {
  state = {
    loading: true,
    annonce: null,
  };

  async componentDidMount() {

    // mettez  votre adresse IP
    const url = "http://10.212.156.25:3000/annonce";

    const response = await fetch(url);
    const data = await response.json();
    this.setState({ annonce: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="tomato" />
        </View>
      );
    }

    if (!this.state.annonce) {
      return <Text>Pas d'annonce pour le moment</Text>;
    }
    const { navigation } = this.props;
    return (
<LinearGradient
       colors={['#ffffff', '#c6f6ff', '#ff6347']}
       style={styles.background}
      >

        <View >
          <View style={{ alignItems: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={{ uri: 'https://media.discordapp.net/attachments/697960252011970600/805578022891421706/Logo_Khbur_cmp.png' }}
              style={{ width: 113, height: 60, justifyContent: 'center', margin: 17 }}
            />
          </View>
          

            <View style={{flexDirection:'row'}}>
          <View style={{ margin: -13, marginLeft: 1, width:375,padding: -29 , justifyContent:'center' }}>
            <SearchBar
              platform="android"
              containerStyle={{ paddingBottom: -10, paddingTop: -10 }}
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
              //value={value}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('FAQ / Aide')}>
          <View style={{paddingLeft:15}}>
            <Icon name="help-circle" style={styles.infoIcon} size={30} />
            </View>
            </TouchableOpacity>
          </View>
          <View style={{ textAlign: 'left', marginTop:10 , paddingLeft:10 , height:7}}>
           
          </View>
        </View>
        <ScrollView>
          <View>
            
    </View>
    

    <View style={{flexDirection:'row' }}>
              <View style={{ textAlign: 'left', marginTop:10 , paddingLeft:10 }}>
            <Text style={{ color: '#000000', fontWeight: '500', fontSize: 16 }} >Les Annonces :</Text>
            
          </View>

<View style={{paddingTop:10 ,  paddingLeft:135 , flexDirection:'row'}}>
  <Text style={{fontSize:16 , fontWeight:'500' , color:'#000000'}}>Filtrer avec :  </Text>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
              {
                label: 'Pertinence',
                value: 'pertinence',
            },
                {
                    label: 'Prix croissant',
                    value: 'croissant',
                },
                {
                    label: 'Prix décroissant',
                    value: 'decroissant',
                },
                {
                    label: 'Les dernières nouveautés',
                    value: 'nouveautes',
                },
            ]}
            style={{ ...pickerSelectStyles }}
        />
</View>
</View>

          <Divider style={{ width: "80%", margin: 20  }} />
    
    <View style={{ flex: 1, paddingTop: 5 , backgroundColor: 'rgba(242, 250, 250, 42)'}}>
    
    <FlatList 
    data={data}
    renderItem ={(item) =>   
    <View style={{ borderRadius: 5, borderWidth: 1, margin: 5, borderColor: '#e0e0e0' }} >
             <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Annonce')}>
            
            
             <Image
          style={{ width: 160, height: 190 }}
          resizeMode='cover'
          source={{
            uri:
              "https://i.ebayimg.com/images/g/1YgAAOSwy~JfzAGN/s-l300.jpg"
          }}
        />
             </TouchableOpacity>
              <List.Item              
              title={""}
              onPress={() => navigation.navigate('Annonce')}
              left={props =>
              <View style={{ justifyContent: 'center',
              alignItems: 'center' }}> 
             
              </View>
              }
              right={props =>
              <View>
                <View style={{}}>
                  <View style={{paddingLeft:95}}>
                <ModalDropdown  options={['Consulter', 'Contacter','Favoris','Signaler']}>
         
         <View style={styles.quizAttrRight}>
           <View style={{paddingLeft:100}}>
             <Icon name="ios-list" style={styles.infoIcon} size={20} />
             <Text style={styles.infoText}>{item.NumberQuestions}</Text>
           </View>
         </View>
        
        </ModalDropdown>
        </View>
                  <View style={{paddingBottom:15}}>
                <Text style={{fontSize:20 , fontWeight:'500'}}>
                {this.state.annonce[0].titre_annonce}
                </Text>
                
                </View>
                <Text style={{textAlign:'left' , color:'red'}}>
                {this.state.annonce[0].prix_annonce} EUR
                </Text>
                <Text>
                Catégorie : {this.state.annonce[0].categorie}
                </Text>
                <Text>
                  Marque : {this.state.annonce[0].marque} 
                </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  
              
                <View style={{paddingLeft:155}}>
              <Button style={{ marginTop: 38 ,alignItems:'center' ,paddingLeft:10 , alignContent:'center'  , height:35 , justifyContent:'center'  }}
              color="yellow"
              icon="star" 
              mode='contained' 
              onPress={() => alert("favoris")}>
              </Button>
              </View>
              
              </View>
              </View>
              }
            />

            </View>
           
      </View>
  }
    />
    
  </View>    
    </ScrollView>
   <View style={{height: 300}}>
       {/* navbar  */}
   </View>
    </LinearGradient>




    );
  }
}



export  class DetailsAnnonce extends React.Component {
  state = {
    loading: true,
    annonce: null,
  };

  async componentDidMount() {

    // mettez  votre adresse IP
    const url = "http://10.212.156.25:3000/annonce";

    const response = await fetch(url);
    
    const data = await response.json();
    this.setState({ annonce: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="tomato" />
        </View>
      );
    }

    if (!this.state.annonce) {
      return <Text>Pas d'annonce pour le moment</Text>;
    }
    return (
<LinearGradient
       colors={['#ffffff', '#c6f6ff', '#ff6347']}
       style={styles.background}
      >
         <ScrollView >
      <View style={{ flex: 1, alignItems: 'center'}}>
     
      <Card containerStyle={{width:390 , height:'100%'  }} wrapperStyle={{}}>

      <View style={{}}>
        <View style={{paddingLeft:333}}>
      <Icon name="information-circle" style={styles.infoIcon} size={22} />
      </View>
      <Card.Title style={{ textAlign:'left' , fontSize:20}}>{this.state.annonce[0].titre_annonce}</Card.Title>
      <ModalDropdown  options={['Favoriser','Signaler']}>
         
                <View style={styles.quizAttrRight}>
                  <View style={{paddingLeft:160  }}>
                   
                    <Text style={styles.infoText}></Text>
                  </View>
                </View>
               
               </ModalDropdown>
               </View>
      
      
      <View
        style={{
          position: "relative",
        }}
      >
          <View style={{ alignItems:'center' , alignContent:'center'}}>
          <Image
          style={{ width: 350, height: 200 }}
          resizeMode="cover"
          source={{
            uri:
              "https://i.ebayimg.com/images/g/1YgAAOSwy~JfzAGN/s-l300.jpg"
          }}
        />

        
        </View>
        <Card.Divider />
       
        <View style={{}}>
        <Text style={{fontSize:20 , fontWeight:'700' ,color:'red', textAlign:'right'}}>{this.state.annonce[0].prix_annonce} EUR</Text>
     </View>
        <Text style={{fontSize:15 , fontWeight:'700' , borderBottomWidth:15}}>Catégorie : {this.state.annonce[0].categorie}</Text>
      
        <Text style={{fontSize:15 , fontWeight:'700', borderBottomWidth:15}}>Sous catégorie : {this.state.annonce[0].sous_categorie}</Text>
      
        <Text style={{fontSize:15 , fontWeight:'700', borderBottomWidth:15}}>Marque : {this.state.annonce[0].marque}</Text>
      
        <Text style={{fontSize:15 , fontWeight:'700', borderBottomWidth:15}}>Date : {this.state.annonce[0].date_publi_annonce}</Text>
        <Card.Divider/>
      <Card.Title  style={{ textAlign:'left' , fontSize:20}}>Information du vendeur</Card.Title>
     
     <Text style={{fontSize:15 , fontWeight:'700' , borderBottomWidth:15}}>Nom :</Text>
   
     <Text style={{fontSize:15 , fontWeight:'700', borderBottomWidth:15}}>Prenom :</Text>
   
     <Text style={{fontSize:15 , fontWeight:'700', borderBottomWidth:15}}>Pays - Ville :</Text>
   
     <Text style={{fontSize:15 , fontWeight:'700', borderBottomWidth:15}}>Nombre d'annonces publiees :</Text>
    
     <Text style={{fontSize:15 , fontWeight:'700', borderBottomWidth:15}}>Moyens de contact :</Text>  
        
        </View>
       
        
        <View style={{flexDirection:'row', justifyContent:'center'}}>
              <Button style={{   }}
              color="green" 
              icon="" 
              mode="contained" 
              onPress={() => navigation.navigate('Annonce')}>
              Contacter
              </Button>
                <View style={{paddingLeft:7}}>
              <Button style={{alignItems:'center' ,paddingLeft:10 , alignContent:'center'  , height:35 , justifyContent:'center'  }}
              color="yellow"
              icon="star" 
              mode='contained' 
              onPress={() => alert("favoris")}>
              </Button>
              </View>
              </View>
              
      

    </Card>
    </View>
    <View>
            <View style={{ textAlign: 'left', marginTop:10 , paddingLeft:10 }}>
            <Text style={{ color: '#000000', fontWeight: '500', fontSize: 16,paddingTop:15 , paddingLeft:10 }} >Plus d'annonces :</Text>
          </View>
        <Divider style={{ width: "80%", margin: 10 }} />
         <FlatList
         horizontal
         data={data}
         renderItem={({ item: rowData }) => {
           return (
             <View style={{width:190}}>
             <Card
               title={null}
               image={{ uri: rowData.imageUrl }}
               containerStyle={{ padding: 0,alignItems:'center',height:212, width: 180 }}
             >
               <View style={{ marginBottom: 10,marginTop:10 }}>
               <Text style={{ fontWeight:'700'}} >
               {this.state.annonce[1].titre_annonce}
               </Text>
               <Text style={{color:'red'}}>
               {this.state.annonce[1].prix_annonce} EUR 
               </Text>
               </View>
               <Image
           style={{ width: 150, height: 150 }}
           resizeMode='cover'
           source={{
             uri:
               "https://i.ebayimg.com/images/g/1YgAAOSwy~JfzAGN/s-l300.jpg"
           }}
         />
             </Card>
             </View>
           );
         }}
         keyExtractor={(item, index) => index}
       />
       </View>
    </ScrollView>
    <View style={{height: 185}}>
       {/* { navbar  } */}
   </View>
    </LinearGradient>
    );
  }
}



const Stack = createStackNavigator();

function Home() {
  return (
   
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Accueil" component={HomeScreen} />
        <Stack.Screen name="Annonce" component={DetailsAnnonce} />
      </Stack.Navigator>
   
  );
}

export default Home;



const styles = StyleSheet.create({
  container: {
    height:'100%',
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
      
    },
    input: {
      height: 35,
      width:400,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'gray',
      marginTop: 5,
      backgroundColor:'white',
      paddingLeft:10
  },
  inputmess: {
    height: 85,
    width:400,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    marginTop: 5,
    backgroundColor:'white',
    paddingLeft:10
},
video: {
  alignSelf: 'center',
  width: 360,
  height: 220,
},
buttons: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
},
horizontal: {
  flexDirection: "row",
  justifyContent: "center",
  padding: 10
},
    
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
  