

import * as React from 'react';
//import Component from 'react';
//import SearchInput, { createFilter } from 'react-native-search-filter';
import { useState } from 'react';
import { Ionicons as Icon } from '@expo/vector-icons';
import { Image,StyleSheet , FlatList, SafeAreaView,Text, View , ScrollView } from 'react-native';
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

//import Icon from 'react-native-vector-icons/FontAwesome';

const data = [1,2];

const img ={
  images: [
    'https://media.discordapp.net/attachments/697960252011970600/806052472250302484/Publicite.png?width=1191&height=670',
    'https://media.discordapp.net/attachments/697960252011970600/806053134199291914/Publicite_1.png?width=1191&height=670',
    'https://media.discordapp.net/attachments/697960252011970600/806053377254752286/Publicite_2.png?width=1191&height=670'
  ]
}

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};



function HomeScreen({ navigation }) {
  const [value, setValue] = React.useState("");
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
          <View style={{ margin: -13, marginLeft: 1, padding: -29 }}>
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
              value={value}
            />
          </View>
          <View style={{ textAlign: 'left', marginTop:10 , paddingLeft:10 , height:7}}>
           
          </View>
        </View>
        <ScrollView>
          <View>
            <View style={{marginTop:25}}>
              <SliderBox
                images={img.images}
                onCurrentImagePressed={index =>
                  console.warn(`image ${index} pressed`)
                }
              />
      </View>
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
                  <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:20 , fontWeight:'500'}}>
                PRIX
                </Text>

                
                <ModalDropdown style={{fontSize:20}} options={['Consulter', 'Contacter','Favoris','Signaler']}>
         
                <View style={styles.quizAttrRight}>
                  <View style={{paddingLeft:150}}>
                    <Icon name="ios-list" style={styles.infoIcon} size={20} />
                    <Text style={styles.infoText}>{item.NumberQuestions}</Text>
                  </View>
                </View>
               
               </ModalDropdown>
                
                </View>
                <Text style={{textAlign:'left'}}>
                  Lieu :
                </Text>
                <Text>
                  Date :
                </Text>
                </View>
                <View style={{paddingTop:40  ,flexDirection:'row'}}>
                  <View style={{flexDirection:'row'}}>
              <Button style={{ marginTop: 38 , paddingRight:-10   }}
              color="#7cd1e0" 
              icon="eye" 
              mode="contained" 
              onPress={() => navigation.navigate('Annonce')}>
              Contacter
              </Button>
                <View style={{paddingLeft:7}}>
              <Button style={{ marginTop: 38 ,alignItems:'center' ,paddingLeft:10 , alignContent:'center'  , height:35 , justifyContent:'center'  }}
              color="#faff79"
              icon="star" 
              mode='contained' 
              onPress={() => alert("favoris")}>
              </Button>
              </View>
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
   <View style={{height: 177}}>
       {/* navbar  */}
   </View>
    </LinearGradient>
    
  );
}

function DetailsAnnonce({ navigation }) {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <LinearGradient
       colors={['#ffffff', '#c6f6ff', '#ff6347']}
       style={styles.background}
      >
         <ScrollView>
      <View style={{ flex: 1, alignItems: 'center'}}>
     
      <Card containerStyle={{width:390 , height:700  }} wrapperStyle={{}}>
      <Card.Title style={{ textAlign:'left' , fontSize:20}}>Titre Annonce</Card.Title>
      <View
        style={{
          position: "relative",
        }}
      >
          <View style={{ alignItems:'center' , alignContent:'center'}}>
          <Image
          style={{ width: 350, height: 200 }}
          resizeMode="contain"
          source={{
            uri:
              "https://www.numerama.com/content/uploads/2020/10/img_5310.jpg"
          }}
        />

        
        </View>
        <Card.Divider />
       
        
        <Text style={{fontSize:20 , fontWeight:'700' ,color:'#FF6347', textAlign:'right'}}>100 EUR</Text>
     
        <Text style={{fontSize:15 , fontWeight:'700' , borderBottomWidth:15}}>Categorie :</Text>
      
        <Text style={{fontSize:15 , fontWeight:'700', borderBottomWidth:15}}>Reference :</Text>
      
        <Text style={{fontSize:15 , fontWeight:'700', borderBottomWidth:15}}>Lieu :</Text>
      
        <Text style={{fontSize:15 , fontWeight:'700', borderBottomWidth:15}}>Date :</Text>
        <Card.Divider/>
      <Card.Title  style={{ textAlign:'left' , fontSize:20}}>Information du vendeur</Card.Title>
     
     <Text style={{fontSize:15 , fontWeight:'700' , borderBottomWidth:15}}>Nom :</Text>
   
     <Text style={{fontSize:15 , fontWeight:'700', borderBottomWidth:15}}>Prenom :</Text>
   
     <Text style={{fontSize:15 , fontWeight:'700', borderBottomWidth:15}}>Pays - Ville :</Text>
   
     <Text style={{fontSize:15 , fontWeight:'700', borderBottomWidth:15}}>Nombre d'annonces publiees :</Text>
    
     <Text style={{fontSize:15 , fontWeight:'700', borderBottomWidth:15}}>Moyens de contact :</Text>  
        
        </View>
       
        <View style = {{borderWidth: 1, borderColor: 'grey', backgroundColor: '#FF6347', width:100,height:36,justifyContent:'center' , marginLeft:260}}>
        <Button
         title = 'Contacter'
         color='#FFFFFF'
      />
      </View>

    </Card>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/*Here we will return the view when state is true 
        and will return false if state is false*/}
        {shouldShow ? (
          <View style={{padding:15}}>
          <View>
          <View>
              <SliderBox
                    images={img.images}
                    onCurrentImagePressed={index =>
                      console.warn(`image ${index} pressed`)
                    }
                  />
          </View>
        </View>
        <View style={{ textAlign: 'left', marginTop:10 , paddingLeft:10 }}>
            <Text style={{ color: '#000000', fontWeight: '500', fontSize: 16 }} >Plus d'annonces :</Text>
          </View>
        <Divider style={{ width: "80%", margin: 20 }} />
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
                  <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:20 , fontWeight:'500'}}>
                PRIX
                </Text>
                <View style={styles.quizAttrRight}>
                  <View style={{paddingLeft:150}}>
                    <Icon name="ios-list" style={styles.infoIcon} size={20} />
                    <Text style={styles.infoText}>{item.NumberQuestions}</Text>
                  </View>
                </View>
                </View>
                <Text style={{textAlign:'left'}}>
                  Lieu :
                </Text>
                <Text>
                  Date :
                </Text>
                </View>
                <View style={{paddingTop:40  ,flexDirection:'row'}}>
                  <View style={{flexDirection:'row'}}>
              <Button style={{ marginTop: 38 , paddingRight:-10  }}
              color="#7cd1e0" 
              icon="call" 
              mode="contained" 
              onPress={() => navigation.navigate('Annonce')}>
              Contacter
              </Button>
                <View style={{paddingLeft:7}}>
              <Button style={{ marginTop: 38 ,alignItems:'center' ,paddingLeft:10 , alignContent:'center'  , height:35 , justifyContent:'center'  }}
              color="#faff79"
              icon="star" 
              mode='contained' 
              onPress={() => alert("favoris")}>
              </Button>
              </View>
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
        </View>
        ) : null}
        <TouchableOpacity  onPress={() => setShouldShow(!shouldShow)}  >
        <View style={{alignItems:'center' , alignContent:'center'}}>
        <Text style={{textAlign:'center', color:'#0066CC' ,fontSize:15} }>Plus d'annonces</Text>
        <Image
              style={{ width: 20, height: 20 , paddingTop:20}}
             
              source={{
                uri:
                  "https://home.edurio.com/wp-content/uploads/2019/02/arrow-down-icon-png-3.png"
              }}
            />
            </View>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
    
    </View>
    </ScrollView>
    <View style={{height: 185}}>
       {/* navbar  */}
   </View>
    </LinearGradient>
  );
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
      height: '100%',
      width:'100%',     
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
      marginRight: 2
    },
    infoText:{
      color: '#676767',
      fontSize: 15
    },
    infoIcon:{
      color: "#676767",
      marginRight: 5
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


