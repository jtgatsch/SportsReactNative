import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';

export default class BackgroundImage extends Component {
  render() {
    const resizeMode = 'cover';

    return (
      <Image
        style={{
          backgroundColor: '#ccc',
          flex: 1,
          resizeMode,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        source={require('./img/Fondo2.png')}
      >
      <StatusBar hidden />
      <TextInput
        style={{
          height: 50, 
          width: '80%',
          alignSelf: 'center', 
          bottom: 100, 
          backgroundColor: 'black',
          opacity: 0.4, 
          color: 'white',
          borderBottomColor: '#b3b3b3',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderTopColor: '#b3b3b3',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderStyle: 'solid',
          fontWeight: 'bold',
          paddingLeft: 20
        }} 
        placeholder={'Nombre de Usuario'} placeholderTextColor={'white'} underlineColorAndroid={'yellow'} inlineImagePadding={10} selectionColor={'green'}
      />
      <TextInput
        style={{
          height: 50, 
          width: '80%',
          alignSelf: 'center', 
          bottom: 80, 
          backgroundColor: 'black',
          opacity: 0.4, 
          color: 'white',
          borderBottomColor: '#b3b3b3',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderTopColor: '#b3b3b3',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderStyle: 'solid',
          fontWeight: 'bold',
          paddingLeft: 20
        }} 
        placeholder={'Clave'} placeholderTextColor={'white'} underlineColorAndroid={'yellow'} inlineImagePadding={10} selectionColor={'green'}
        secureTextEntry={true}
      />
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text style={{color: 'white', fontSize: 18}}> Ingresar </Text>
       </TouchableOpacity>
       <Text style={{color: 'white', fontSize: 15, alignSelf: 'center', bottom: 35}}> Recuperar Clave </Text>
       <Text style={{color: '#b6a32c', fontSize: 18, fontWeight: 'bold', alignSelf: 'center'}}> Regístrate </Text>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    width: '80%',
    height: 50,
    paddingTop: 11,
    alignSelf: 'center',
    backgroundColor: '#b6a32c',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    bottom: 40
  }
})