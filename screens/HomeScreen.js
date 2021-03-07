import { Image,StyleSheet,ActivityIndicator , FlatList, SafeAreaView,Text, View , ScrollView , TextInput} from 'react-native';
import React , { useState }from "react";
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
import '../global';



//-----------------------------------------
const getUsersFromApi = () => {
  return fetch('http://10.189.116.41:3000/annonce')
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

export  class HomeScreen extends React.Component {
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
        <View style={{ borderRadius: 5, borderWidth: 1, margin: 5, borderColor: '#e0e0e0' }} >
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
                    <ModalDropdown  options={['Consulter', 'Contacter','Favoris','Signaler']}>
             
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
        /> )
      
      
      table.push(<View style={styles.container}>{children}</View>)
  }
  return table
}

  async componentDidMount() {

    // mettez  votre adresse IP
    const url = "http://10.189.116.41:3000/utilisateur";

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
      return <Text>Pas d'annonce pour le moment :(</Text>;
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
    
    {this.createTable()}
  </View>    
    </ScrollView>
   <View style={{height: 177}}>
       {/* navbar  */}
   </View>
    </LinearGradient>
        </View>
        
    );
  }
}

////////////////////////////////////////////////////////////////////////////////
                            //DETAILS ANNONCE

                            export  class DetailsAnnonce extends React.Component {
                              state = {
                                loading: true,
                                // navigation : navigation,
                                person: null
                              };
                              
                              createTable = () => {
                              const { navigation,route } = this.props;
                              let table = []
                              // Outer loop to create parent
                              for (let i = 0; i < 1; i++) {
                                const data = [1]
                                let children = []
                                //Inner loop to create children
                            
                                
                                  children.push( <View style={{ flex: 1, alignItems: 'center'}}>
     
                                  <Card containerStyle={{width:390 , height:'100%'  }} wrapperStyle={{}}>
                            
                                  <View style={{}}>
                                    <View style={{paddingLeft:333}}>
                                  <Icon name="information-circle" style={styles.infoIcon} size={22} />
                                  </View>
                                  <Card.Title style={{ textAlign:'left' , fontSize:20}}>{global.annonce[route.params?.A].titre_annonce}</Card.Title>
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
                                    <Text style={{fontSize:20 , fontWeight:'700' ,color:'red', textAlign:'right'}}>{global.annonce[route.params?.A].prix_annonce} EUR</Text>
                                 </View>
                                    <Text style={{fontSize:15 , fontWeight:'700' , borderBottomWidth:15}}>Catégorie : {global.annonce[route.params?.A].categorie}</Text>
                                  
                                    <Text style={{fontSize:15 , fontWeight:'700', borderBottomWidth:15}}>Sous catégorie : {global.annonce[route.params?.A].sous_categorie}</Text>
                                  
                                    <Text style={{fontSize:15 , fontWeight:'700', borderBottomWidth:15}}>Marque : {global.annonce[route.params?.A].marque}</Text>
                                  
                                    <Text style={{fontSize:15 , fontWeight:'700', borderBottomWidth:15}}>Date : {global.annonce[route.params?.A].date_publi_annonce}</Text>
                                    <Card.Divider/>
                                  <Card.Title  style={{ textAlign:'left' , fontSize:20}}>Information du vendeur</Card.Title>
                                 {/* {let Ba = global.users[global.annonce[route.params?.A].utilisateur].nom_personne - 1 } */}
                                 <Text style={{fontSize:15 , fontWeight:'700' , borderBottomWidth:15}}>Nom : {global.users[global.annonce[route.params?.A].utilisateur].nom_personne}</Text>
                               
                                 <Text style={{fontSize:15 , fontWeight:'700', borderBottomWidth:15}}>Prenom : {global.users[global.annonce[route.params?.A].utilisateur].prenom_personne}</Text>
                                                            
                                 <Text style={{fontSize:15 , fontWeight:'700', borderBottomWidth:15}}>Moyens de contact : {global.users[global.annonce[route.params?.A].utilisateur].mail_personne}</Text>  
                                    
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
                                </View> )
                                  
                                  
                                  table.push(<View style={styles.container}>{children}</View>)
                              }
                              return table
                            }
                            
                              async componentDidMount() {
                            
                                // mettez  votre adresse IP
                                const url = "http://10.189.116.41:3000/utilisateur";
                            
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
                                  return <Text>Annonce introuvable :(</Text>;
                                }
                                
                                return (
                                  
                                    <View style={styles.container}>
                            
                            
                            <LinearGradient
                             colors={['#ffffff', '#c6f6ff', '#ff6347']}
                             style={styles.background}
                            >
                            <ScrollView >
    
                            <View>
                            {this.createTable()}
                            </View>
                  
    </ScrollView>
    
    <View style={{height: 177}}>
       {/* { navbar  } */}
   </View>
    </LinearGradient>
                                    </View>
                                    
                                );
                              }
                            }

///////////////////////////////////////FAQ/////////////////////////////
export  class FaqScreen extends React.Component {
  state = {
    loading: true,
    // navigation : navigation,
    person: null
  };
  createTable = () => {
  let table = []

  // Outer loop to create parent
  for (let i = 0; i < 1; i++) {
    const data = [1]
    let children = []
    const { navigation } = this.props;
    //Inner loop to create children

    
      children.push(<Text>hello 1</Text> )
  }
  return table
}


  async componentDidMount() {

    // mettez  votre adresse IP
    const url = "http://10.189.116.41:3000/utilisateur";

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
      return <Text>FAQ non disponible pour le moment :(</Text>;
    }
    const { navigation } = this.props;
    return (
      
        <View style={styles.container}>
<LinearGradient
       colors={['#ffffff', '#c6f6ff', '#ff6347']}
       style={styles.background}
      >
        <ScrollView>
        <View style={{ textAlign: 'left', marginTop:10 , paddingLeft:10 }}>
             <Text style={{ color: '#000000', fontWeight: '500', fontSize: 16 }} >Faire aux questions :</Text>
        </View>
          <Divider style={{ width: "80%", margin: 20  }} />
        <View style={{ flex: 1, paddingTop: 5 }}>
    

              <View style={{paddingBottom:10}}>
              <Button style={{ }}
              color="green" 
              icon="" 
              mode="contained" 
              onPress={() => navigation.navigate('Créer un compte')}>
              Comment créer un compte ? 
              </Button>
              </View>
              <View style={{paddingBottom:10}}>
              <Button style={{   }}
              color="green" 
              icon="" 
              mode="contained" 
              onPress={() => navigation.navigate('Créer une annonce')}>
              Comment créer une annonce ?
              </Button>
              </View>
              <View style={{paddingBottom:10}}>
              <Button style={{   }}
              color="green" 
              icon="" 
              mode="contained" 
              onPress={() => navigation.navigate('Contacter un vendeur')}>
              Comment contacter un vendeur ?
              </Button>
              </View>
              <View style={{paddingBottom:10}}>
              <Button style={{   }}
              color="green" 
              icon="" 
              mode="contained" 
              onPress={() => navigation.navigate('Modifier une annonce')}>
              Comment modifier une annonce ?
              </Button>
              </View>
              <View style={{paddingBottom:10}}>
              <Button style={{   }}
              color="green" 
              icon="" 
              mode="contained" 
              onPress={() => navigation.navigate('Modifier son mot de passe')}>
              Comment modifier son mot de passe ? 
              </Button>
              </View>
              <View style={{ textAlign: 'left', marginTop:10 , paddingLeft:10 }}>
             <Text style={{ color: '#000000', fontWeight: '500', fontSize: 16 }} >Nous contacter :</Text>
        </View>
          <Divider style={{ width: "80%", margin: 20  }} />
    
          <View style={{ paddingLeft:5}}>
                <TextInput style={styles.input} placeholder="Nom" />
                <TextInput style={styles.input} placeholder="Prénom" />
                <TextInput style={styles.input} placeholder="E-mail" />
                <TextInput style={styles.input} placeholder="Sujet" />
                <TextInput style={styles.inputmess} placeholder="Message" multiline={true} numberOfLines={6} />
            </View>

            <View style={{paddingLeft:294 , paddingTop:5}}>
            <Button style={{ width:110}}
              color="green" 
              icon="" 
              mode="contained" 
              onPress={() => navigation.navigate('Reponse1')}>
              Envoyer 
              </Button>
              </View>
        </View>
        <Divider style={{ width: "80%", margin: 20  }} />
        <View style={{ textAlign: 'left', paddingBottom:20 , paddingLeft:10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Qui sommes-nous?')}>
             <Text style={{ color: '#000000', fontWeight: '500', textDecorationLine:'underline' ,fontSize: 16 }} >Qui sommes-nous?</Text>
             </TouchableOpacity>
        </View>
          
    </ScrollView>
   <View style={{height: 179}}>
       {/* navbar  */}
   </View>
    </LinearGradient>
        </View>
        
    );
  }
}

//////////////////////////////////////////////////////////////////
export  class Quisommesnous extends React.Component {
  state = {
    loading: true,
    // navigation : navigation,
    person: null
  };
  
  async componentDidMount() {

    // mettez  votre adresse IP
    const url = "http://10.189.116.41:3000/utilisateur";

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
      return <Text>FAQ non disponible pour le moment :(</Text>;
    }
    const { navigation } = this.props;
   // const video = React.useRef(null);
   
    return (
      
      <LinearGradient
      colors={['#ffffff', '#c6f6ff', '#ff6347']}
      style={styles.background}
     >
        <ScrollView>
     <View style={{}}>
       <Card>
         <Text >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
       </Card>
   </View>
   <Divider style={{ width: "80%", margin: 20  }} />
   <Card>
         <Text >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
       </Card>
       <Divider style={{ width: "80%", margin: 20  }} />
   <Card>
         <Text >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
       </Card>
   </ScrollView>
   <View style={{height: 185}}>
      {/* navbar  */}
  </View>
   </LinearGradient>
        
    );
  }
}

//////////////////////////////////////////////////////////////////

export  class ReponseUne extends React.Component {
  state = {
    loading: true,
    // navigation : navigation,
    person: null
  };
  
  async componentDidMount() {

    // mettez  votre adresse IP
    const url = "http://10.189.116.41:3000/utilisateur";

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
      return <Text>FAQ non disponible pour le moment :(</Text>;
    }
    const { navigation } = this.props;
   // const video = React.useRef(null);
   
    return (
      
      <LinearGradient
      colors={['#ffffff', '#c6f6ff', '#ff6347']}
      style={styles.background}
     >
        <ScrollView>
     <View style={{}}>
   <Text style={{fontSize:16, paddingTop:10 , paddingLeft:13}}>Comment créer un compte ?</Text>
       <Card>
         <Text >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
       </Card>
   <Text style={{fontSize:16, paddingTop:10,paddingBottom:10 , paddingLeft:13}}>Regarder le tutoriel :</Text>
   <View style={styles.container}>
      <Video
       // ref={video}
        style={styles.video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
      //  onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
   
   </View>
   </ScrollView>
   <View style={{height: 185}}>
      {/* navbar  */}
  </View>
   </LinearGradient>
        
    );
  }
}

export  class ReponseDeux extends React.Component {
  state = {
    loading: true,
    // navigation : navigation,
    person: null
  };
  
  async componentDidMount() {

    // mettez  votre adresse IP
    const url = "http://10.189.116.41:3000/utilisateur";

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
      return <Text>FAQ non disponible pour le moment :(</Text>;
    }
    const { navigation } = this.props;
    //const video = React.useRef(null);
    return (
      
      <LinearGradient
      colors={['#ffffff', '#c6f6ff', '#ff6347']}
      style={styles.background}
     >
        <ScrollView>
     <View style={{}}>
     <Text style={{fontSize:16, paddingTop:10 , paddingLeft:13}}>Comment créer une annonce ?</Text>
       <Card>
         <Text >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
       </Card>
   <Text style={{fontSize:16, paddingTop:10,paddingBottom:10 , paddingLeft:13}}>Regarder le tutoriel :</Text>
   <View style={styles.container}>
      <Video
       // ref={video}
        style={styles.video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
      //  onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
   
   </View>
   </ScrollView>
   <View style={{height: 185}}>
      {/* navbar  */}
  </View>
   </LinearGradient>
        
    );
  }
}
export  class ReponseTrois extends React.Component {
  state = {
    loading: true,
    // navigation : navigation,
    person: null
  };
  
  async componentDidMount() {

    // mettez  votre adresse IP
    const url = "http://10.189.116.41:3000/utilisateur";

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
      return <Text>FAQ non disponible pour le moment :(</Text>;
    }
    const { navigation } = this.props;
    //const video = React.useRef(null);
    return (
      
      <LinearGradient
      colors={['#ffffff', '#c6f6ff', '#ff6347']}
      style={styles.background}
     >
        <ScrollView>
     <View style={{}}>
     <Text style={{fontSize:16, paddingTop:10 , paddingLeft:13}}>Comment contacter un vendeur ?</Text>
       <Card>
         <Text >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
       </Card>
   <Text style={{fontSize:16, paddingTop:10,paddingBottom:10 , paddingLeft:13}}>Regarder le tutoriel :</Text>
   <View style={styles.container}>
      <Video
       // ref={video}
        style={styles.video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
      //  onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
   
   </View>
   </ScrollView>
   <View style={{height: 185}}>
      {/* navbar  */}
  </View>
   </LinearGradient>
        
    );
  }
}
export  class ReponseQuatre extends React.Component {
  state = {
    loading: true,
    // navigation : navigation,
    person: null
  };
  
  async componentDidMount() {

    // mettez  votre adresse IP
    const url = "http://10.189.116.41:3000/utilisateur";

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
      return <Text>FAQ non disponible pour le moment :(</Text>;
    }
    const { navigation } = this.props;
    //const video = React.useRef(null);
    return (
      
      <LinearGradient
      colors={['#ffffff', '#c6f6ff', '#ff6347']}
      style={styles.background}
     >
        <ScrollView>
     <View style={{}}>
     <Text style={{fontSize:16, paddingTop:10 , paddingLeft:13}}>Comment modifier une annonce ?</Text>
       <Card>
         <Text >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
       </Card>
   <Text style={{fontSize:16, paddingTop:10,paddingBottom:10 , paddingLeft:13}}>Regarder le tutoriel :</Text>
   <View style={styles.container}>
      <Video
       // ref={video}
        style={styles.video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
      //  onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
   
   </View>
   </ScrollView>
   <View style={{height: 185}}>
      {/* navbar  */}
  </View>
   </LinearGradient>
        
    );
  }
}
export  class ReponseCinq extends React.Component {
  state = {
    loading: true,
    // navigation : navigation,
    person: null
  };
  
  async componentDidMount() {

    // mettez  votre adresse IP
    const url = "http://10.189.116.41:3000/utilisateur";

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
      return <Text>FAQ non disponible pour le moment :(</Text>;
    }
    const { navigation } = this.props;
    //const video = React.useRef(null);
    return (
      
      <LinearGradient
      colors={['#ffffff', '#c6f6ff', '#ff6347']}
      style={styles.background}
     >
        <ScrollView>
     <View style={{}}>
     <Text style={{fontSize:16, paddingTop:10 , paddingLeft:13}}>Comment modifier son mot de passe ?</Text>
       <Card>
         <Text >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
       </Card>
   <Text style={{fontSize:16, paddingTop:10,paddingBottom:10 , paddingLeft:13}}>Regarder le tutoriel :</Text>
   <View style={styles.container}>
      <Video
       // ref={video}
        style={styles.video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
      //  onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
   
   </View>
   </ScrollView>
   <View style={{height: 185}}>
      {/* navbar  */}
  </View>
   </LinearGradient>
        
    );
  }
}
//////////////////////////////////////////////////////////////////////


                            const Stack = createStackNavigator();

                            function Home() {
                              return (
                               
                                <Stack.Navigator initialRouteName="Home">
                                <Stack.Screen name="Accueil" component={HomeScreen} />
                                <Stack.Screen name="Annonce" component={DetailsAnnonce} initialParams={{ A: 0 }} />
                                <Stack.Screen name="FAQ / Aide" component={FaqScreen} />
                                <Stack.Screen name="Créer un compte" component={ReponseUne} />
                                <Stack.Screen name="Créer une annonce" component={ReponseDeux} />
                                <Stack.Screen name="Contacter un vendeur" component={ReponseTrois} />
                                <Stack.Screen name="Modifier une annonce" component={ReponseQuatre} />
                                <Stack.Screen name="Modifier son mot de passe" component={ReponseCinq} />
                                <Stack.Screen name="Qui sommes-nous?" component={Quisommesnous} />
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
      position: 'relative',
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
  