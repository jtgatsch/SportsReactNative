import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView
} from 'react-native';
import { Button } from 'react-native-elements';

export default class BackgroundImage extends Component {
  render() {

    return (
      	<Button
        raised
        icon={{name: 'cached'}}
        title='BUTTON WITH ICON' />
    );
  }
}

const styles = StyleSheet.create({

	logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20
  },

  input: {
    height: 40,
		width: '80%',
  	alignSelf: 'center',
  	marginTop: 30,
  	backgroundColor: 'black',
  	opacity: 0.4,
  	color: 'white',
  	paddingLeft: 20
  },

  fondo: {
    backgroundColor: '#ccc',
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },

  button: {
    alignItems: 'center',
    padding: 10,
    width: '80%',
    height: 50,
    paddingTop: 11,
    alignSelf: 'center',
    backgroundColor: '#b6a32c',
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 20
  }
})