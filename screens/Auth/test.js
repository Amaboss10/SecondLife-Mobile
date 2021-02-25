import { Text, View, StyleSheet } from 'react-native';
import React from "react";

export default class Test extends React.Component {
  state = {
    loading: true,
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
      return <Text>loading...</Text>;
    }

    if (!this.state.person) {
      return <Text>didn't get a person</Text>;
    }

    return (
        <View style={styles.container}>
            <Text>{this.state.person[1].id_personne}</Text>
            <Text>{this.state.person[1].pseudo_user}</Text>
            <Text>{this.state.person[1].adresse_user}</Text>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        // alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        flex: 1
    },

  });
