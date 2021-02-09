// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import React from 'react';
import { Image } from 'react-native';
//import { Button } from 'native-base';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchBar } from "react-native-elements";
// import { Ionicons } from '@expo/vector-icons';
import { SliderBox } from "react-native-image-slider-box";
import { LinearGradient } from 'expo-linear-gradient';
import { Divider } from "react-native-elements";
import { Card } from "react-native-elements";

import { shouldUseActivityState } from 'react-native-screens';
import TopBar from '../components/TopBar';
import { SafeAreaView } from 'react-native-safe-area-context';


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


const Home = () => {
  const [value, setValue] = React.useState("");
  return (
    <SafeAreaView>

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
            <Text style={{ color: '#000000', fontWeight: '500', fontSize: '20' }} >Les Annonces :</Text>
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
            <Card containerStyle={{ width: 180, height: 290 }} wrapperStyle={{}}>
              <Card.Title style={{ textAlign: 'left', fontSize: 15 }}>100 EUR </Card.Title>
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
        <View style={{ height: 120 }}>
          {/* navbar  */}
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
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
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 800,

  },
});

export default Home;
// lkhubri 






