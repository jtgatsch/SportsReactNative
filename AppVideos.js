import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Picker } from 'react-native';
import { Card, ListItem, Button, Header } from 'react-native-elements';

const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 }
]

export default class App extends React.Component {
  render() {
    return (
      <View>

        <View>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'BSPORTS', style: { color: '#fff', marginRight: 200, marginBottom: 4 } }}
            backgroundColor={'#383938'}
          />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 7 }}>
          <Text style={{ marginLeft: 10, marginTop: 11, fontSize: 16, shadowOpacity: 0.8, shadowRadius: 5 }}>Deporte: </Text>
          <Picker
            style={{ width: '50%' }}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Picker.Item label="Fútbol" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
