import * as React from 'react';
import { useState } from 'react';
import { Image, StyleSheet, SafeAreaView, Text, View, ScrollView, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchBar } from "react-native-elements";
import { SliderBox } from "react-native-image-slider-box";
import { LinearGradient } from 'expo-linear-gradient';
import { Divider } from "react-native-elements";
import { Card } from "react-native-elements";
import { TouchableOpacity } from 'react-native-gesture-handler';
//import Icon from 'react-native-vector-icons/FontAwesome';



const img = {
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

        <View style={{ textAlign: 'left', margin: 20 }}>
          <Text style={{}} >Les Annonces :</Text>
        </View>
      </View>
      <ScrollView>
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
        <Divider style={{ width: "80%", margin: 20 }} />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Annonce')}>
            <Card containerStyle={{ width: 180, height: 290 }} wrapperStyle={{}} >
              <Card.Title style={{ textAlign: 'left', fontSize: 15 }} >100 EUR </Card.Title>
              <View
                style={{
                  position: "relative",
                }}
              >
                <View style={{ alignItems: 'center', alignContent: 'center' }}>
                  <Image
                    style={{ width: 150, height: 190 }}
                    resizeMode="contain"
                    source={{
                      uri:
                        "https://www.numerama.com/content/uploads/2020/10/img_5310.jpg"
                    }}
                  />
                </View>
                <Card.Divider />
                <Text style={{ fontSize: 10 }}>Lieu :</Text>
                <Text style={{ fontSize: 10 }}>Date :</Text>
              </View>
            </Card>
          </TouchableOpacity>

          <Card containerStyle={{ width: 180, height: 290 }} wrapperStyle={{}}>
            <Card.Title style={{ textAlign: 'left', fontSize: 15 }}>500 EUR</Card.Title>
            <View
              style={{
                position: "relative",
              }}
            >
              <View style={{ alignItems: 'center', alignContent: 'center' }}>
                <Image
                  style={{ width: 160, height: 190 }}
                  resizeMode="contain"
                  source={{
                    uri:
                      "https://i.ebayimg.com/images/g/1YgAAOSwy~JfzAGN/s-l300.jpg"
                  }}
                />
              </View>
              <Card.Divider />
              <Text style={{ fontSize: 10 }}>Lieu :</Text>
              <Text style={{ fontSize: 10 }}>Date :</Text>
            </View>
          </Card>
        </View>

        <Card containerStyle={{ width: 180, height: 290 }} wrapperStyle={{}}>
          <Card.Title style={{ textAlign: 'left', fontSize: 15 }}>30 EUR</Card.Title>
          <View
            style={{
              position: "relative",
            }}
          >
            <View style={{ alignItems: 'center', alignContent: 'center' }}>
              <Image
                style={{ width: 160, height: 190 }}
                resizeMode="contain"
                source={{
                  uri:
                    "https://global-img.gamergen.com/razer-cynosa-test-note-avis-review-photo-gamergen-com-clint008-2_0190000000886876.jpg"
                }}
              />
            </View>
            <Card.Divider />
            <Text style={{ fontSize: 10 }}>Lieu :</Text>
            <Text style={{ fontSize: 10 }}>Date :</Text>
          </View>
        </Card>

      </ScrollView>
      <View style={{ height: 185 }}>
        {/* navbar  */}
      </View>
    </LinearGradient>

  );
}

// function DetailsAnnonce({ navigation }) {
//   const [shouldShow, setShouldShow] = useState(false);
//   return (
//     <LinearGradient
//       colors={['#ffffff', '#c6f6ff', '#ff6347']}
//       style={styles.background}
//     >
//       <ScrollView>
//         <View style={{ flex: 1, alignItems: 'center' }}>

//           <Card containerStyle={{ width: 390, height: 700 }} wrapperStyle={{}}>
//             <Card.Title style={{ textAlign: 'left', fontSize: 20 }}>Titre Annonce</Card.Title>
//             <View
//               style={{
//                 position: "relative",
//               }}
//             >
//               <View style={{ alignItems: 'center', alignContent: 'center' }}>
//                 <Image
//                   style={{ width: 350, height: 200 }}
//                   resizeMode="contain"
//                   source={{
//                     uri:
//                       "https://www.numerama.com/content/uploads/2020/10/img_5310.jpg"
//                   }}
//                 />


//               </View>
//               <Card.Divider />


//               <Text style={{ fontSize: 20, fontWeight: 700, color: '#FF6347', textAlign: 'right' }}>100 EUR</Text>

//               <Text style={{ fontSize: 15, fontWeight: 700, borderBottomWidth: 15 }}>Categorie :</Text>

//               <Text style={{ fontSize: 15, fontWeight: 700, borderBottomWidth: 15 }}>Reference :</Text>

//               <Text style={{ fontSize: 15, fontWeight: 700, borderBottomWidth: 15 }}>Lieu :</Text>

//               <Text style={{ fontSize: 15, fontWeight: 700, borderBottomWidth: 15 }}>Date :</Text>
//               <Card.Divider />
//               <Card.Title style={{ textAlign: 'left', fontSize: 20 }}>Information du vendeur</Card.Title>

//               <Text style={{ fontSize: 15, fontWeight: 700, borderBottomWidth: 15 }}>Nom :</Text>

//               <Text style={{ fontSize: 15, fontWeight: 700, borderBottomWidth: 15 }}>Prenom :</Text>

//               <Text style={{ fontSize: 15, fontWeight: 700, borderBottomWidth: 15 }}>Pays - Ville :</Text>

//               <Text style={{ fontSize: 15, fontWeight: 700, borderBottomWidth: 15 }}>Nombre d'annonces publiees :</Text>

//               <Text style={{ fontSize: 15, fontWeight: 700, borderBottomWidth: 15 }}>Moyens de contact :</Text>

//             </View>

//             <Text style={{ borderWidth: 1, borderColor: 'grey', backgroundColor: '#FF6347', width: 100, height: 36, justifyContent: 'center', marginLeft: 260 }}>
//               <Button
//                 title="Contacter"
//                 color='#FFFFFF'
//               />
//             </Text>

//           </Card>
//           <SafeAreaView style={{ flex: 1 }}>
//             <View style={styles.container}>
//               {/*Here we will return the view when state is true 
//         and will return false if state is false*/}
//               {shouldShow ? (
//                 <View style={{ padding: 15 }}>
//                   <View>
//                     <View>
//                       <SliderBox
//                         images={img.images}
//                         onCurrentImagePressed={index =>
//                           console.warn(`image ${index} pressed`)
//                         }
//                       />
//                     </View>
//                   </View>
//                   <Divider style={{ width: "80%", margin: 20 }} />
//                   <View style={{ flexDirection: 'row' }}>
//                     <Card containerStyle={{ width: 180, height: 290 }} wrapperStyle={{}}>
//                       <Card.Title style={{ textAlign: 'left', fontSize: 15 }}>500 EUR</Card.Title>
//                       <View
//                         style={{
//                           position: "relative",
//                         }}
//                       >
//                         <View style={{ alignItems: 'center', alignContent: 'center' }}>
//                           <Image
//                             style={{ width: 160, height: 190 }}
//                             resizeMode="contain"
//                             source={{
//                               uri:
//                                 "https://i.ebayimg.com/images/g/1YgAAOSwy~JfzAGN/s-l300.jpg"
//                             }}
//                           />
//                         </View>
//                         <Card.Divider />
//                         <Text style={{ fontSize: 10 }}>Lieu :</Text>
//                         <Text style={{ fontSize: 10 }}>Date :</Text>
//                       </View>
//                     </Card>


//                     <Card containerStyle={{ width: 180, height: 290 }} wrapperStyle={{}}>
//                       <Card.Title style={{ textAlign: 'left', fontSize: 15 }}>30 EUR</Card.Title>
//                       <View
//                         style={{
//                           position: "relative",
//                         }}
//                       >
//                         <View style={{ alignItems: 'center', alignContent: 'center' }}>
//                           <Image
//                             style={{ width: 160, height: 190 }}
//                             resizeMode="contain"
//                             source={{
//                               uri:
//                                 "https://global-img.gamergen.com/razer-cynosa-test-note-avis-review-photo-gamergen-com-clint008-2_0190000000886876.jpg"
//                             }}
//                           />
//                         </View>
//                         <Card.Divider />
//                         <Text style={{ fontSize: 10 }}>Lieu :</Text>
//                         <Text style={{ fontSize: 10 }}>Date :</Text>
//                       </View>
//                     </Card>
//                   </View>
//                 </View>
//               ) : null}
//               <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
//                 <View style={{ alignItems: 'center', alignContent: 'center' }}>
//                   <Text style={{ textAlign: 'center', color: '#0066CC', fontSize: 15 }}>Plus d'annonces</Text>
//                   <Image
//                     style={{ width: 20, height: 20, paddingTop: 20 }}

//                     source={{
//                       uri:
//                         "https://home.edurio.com/wp-content/uploads/2019/02/arrow-down-icon-png-3.png"
//                     }}
//                   />
//                 </View>
//               </TouchableOpacity>

//             </View>
//           </SafeAreaView>

//         </View>
//       </ScrollView>
//       <View style={{ height: 185 }}>
//         {/* navbar  */}
//       </View>
//     </LinearGradient>
//   );
// }




export default HomeScreen


const styles = StyleSheet.create({
  background: {

  }
})






