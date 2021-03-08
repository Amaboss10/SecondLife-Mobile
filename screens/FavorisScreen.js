import { Image,StyleSheet,ActivityIndicator , FlatList, SafeAreaView,Text, View , ScrollView , TextInput} from 'react-native';
import React , { useState }from "react";
import { Ionicons as Icon } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchBar } from "react-native-elements";
import { SliderBox } from "react-native-image-slider-box";
import { LinearGradient } from 'expo-linear-gradient';
import { Divider } from "react-native-elements";
import { Card } from "react-native-elements";
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { OptionsButton } from 'react-native-options-button'
import { List, Button } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import ModalDropdown from 'react-native-modal-dropdown';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Textarea } from 'native-base';
import '../global'
import { MON_IP } from '../assets/constantes';

//-----------------------------------------
const getUsersFromApi = () => {
  return fetch('http://10.212.156.25:3000/annonce')
    .then((response) => response.json())
    .then((json) => {
      global.annonce = json;
    })
    .catch((error) => {
      console.error(error);
    });
};
getUsersFromApi()
//-----------------------------------------

export class FavorisScreen extends React.Component {
  state = {
    loading: true,
    // navigation : navigation,
    person: null
  };
  createTable = () => {
    let table = []

    // Outer loop to create parent
    for (let i = 0; i < 3; i++) {
      const data = [1]
      let children = []
      //Inner loop to create children

    const { navigation,route } = this.props;
      children.push(<FlatList 
        data={data}
        renderItem ={(item) =>   
        <View style={{ borderRadius: 5, borderWidth: 1 , margin: 5, borderColor: '#e0e0e0' }} >
                 <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={
                    // () => alert(i)
                    () => navigation.navigate('Annonce', { A: i })
                  }>
                
                
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
                  onPress={
                    () => finduser(i),
                    () => navigation.navigate('Annonce', { A: i })
                    
                  }
                  left={props =>
                  <View style={{ justifyContent: 'center',
                  alignItems: 'center' }}> 
                 
                  </View>
                }
                right={props =>
                  <View>
                    <View style={{}}>
                      <View style={{paddingLeft:95}}>
                    <ModalDropdown  options={['Consulter', 'Contacter','Signaler']}>
             
             <View style={styles.quizAttrRight}>
               <View style={{paddingLeft:100}}>
                 <Icon name="ios-list" style={styles.infoIcon} size={20} />
                 <Text style={styles.infoText}>{item.NumberQuestions}</Text>
               </View>
             </View>
            
            </ModalDropdown>
            </View>
                      <View style={{paddingBottom:0}}>
                    <Text style={{fontSize:20 , fontWeight:'500'}}>
                    {global.annonce[i].titre_annonce}
                    </Text>
                    </View>
                    <Text style={{textAlign:'left' , color:'red'}}>
                    {global.annonce[i].prix_annonce} EUR
                    </Text>
                    <Text>
                    Catégorie : {global.annonce[i].categorie}
                    </Text>
                    <Text>
                      Marque : {global.annonce[i].marque} 
                    </Text>
                    </View>
                    <Button style={{ marginTop: 38 ,alignItems:'center' ,paddingLeft:10 , alignContent:'center'  , height:35 , justifyContent:'center'  }}
                  color="tomato"
                   
                  mode='outlined' 
                  onPress={() => alert("favoris")}>
                    Retirer
                  </Button>
                  
                  </View>
                }
              />


            </View>

          </View>
        }
      />)


      table.push(<View style={styles.container}>{children}</View>)
    }
    return table
  }

  async componentDidMount() {

    // mettez  votre adresse IP
    const url = "http://10.212.156.25:3000/utilisateur";

    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="tomato" />
        </View>
      );
    }

    if (!this.state.person) {
      return <Text>Pas de favoris pour le moment :(</Text>;
    }
    const { navigation,route } = this.props;
    return (

      <View style={styles.container}>


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


            <View style={{ flexDirection: 'row' }}>
              <View style={{ margin: -13, marginLeft: 1, width: 375, padding: -29, justifyContent: 'center' }}>
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
                <View style={{ paddingLeft: 15 }}>
                  <Icon name="help-circle" style={styles.infoIcon} size={30} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ textAlign: 'left', marginTop: 10, paddingLeft: 10, height: 7 }}>

            </View>
          </View>
          <ScrollView>
            <View>

            </View>


            <View style={{ flexDirection: 'row' }}>
              <View style={{ textAlign: 'left', marginTop: 10, paddingLeft: 10 }}>
                <Text style={{ color: '#000000', fontWeight: '500', fontSize: 16 }} >Les Favoris :</Text>

              </View>

              
            </View>

            <Divider style={{ width: "80%", margin: 20 }} />

            <View style={{ flex: 1, paddingTop: 5, backgroundColor: 'rgba(242, 250, 250, 42)' }}>

              {this.createTable()}
            </View>
          </ScrollView>
          <View style={{ height: 177 }}>
            {/* navbar  */}
          </View>
        </LinearGradient>
      </View>

    );
  }
}

////////////////////////////////////////////////////////////////////////////////



const Stack = createStackNavigator();

function Fave() {
  return (

    <Stack.Navigator initialRouteName="Fave">
      <Stack.Screen name="Favoris" component={FavorisScreen} /> 
    </Stack.Navigator>
  );
}

export default Fave;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,

  },
  cont: {
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
    position: 'relative',
    left: 0,
    right: 0,
    top: 0,
    height: 800,

  },
  quizAttrContent: {
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
  quizAttrLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 2
  },
  quizAttrMid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  quizAttrRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },
  infoText: {
    color: '#676767',
    fontSize: 25,

  },
  infoIcon: {
    color: "#676767",
    marginRight: 5,

  },
  input: {
    height: 35,
    width: 400,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    marginTop: 5,
    backgroundColor: 'white',
    paddingLeft: 10
  },
  inputmess: {
    height: 85,
    width: 400,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    marginTop: 5,
    backgroundColor: 'white',
    paddingLeft: 10
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
    width: 50,
    height: 10,
  },
});
