import React from "react";
import { View , Text} from "react-native";
import {Picker} from '@react-native-picker/picker';

class PickerComponent extends Component {

    state = {
        Categorie: ''
    } 
    
    render(){

  return (
    <View >
    <Text>Categorie</Text>
      <Picker 
        selectedValue={this.state.Categorie}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => this.setState({Categorie: itemValue})} >
        <Picker.Item label="Télephonie" value="Telephonie" />
        <Picker.Item label="Jeux" value="Jeux" />
      </Picker>
    </View>
  );
}
}



export default PickerComponent;