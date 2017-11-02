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
  StatusBar,
  ScrollView
} from 'react-native';

export default class BackgroundImage extends Component {
  render() {

    return (
      	<Image style={styles.fondo} source={require('./img/Fondo3.png')}>

	      	<StatusBar hidden />

          <ScrollView>

	      	<Image style={styles.logo} source={require('./img/Logo2.png')}></Image>

	      	<TextInput style={styles.input} placeholder={'Nombre de Usuario'} placeholderTextColor={'white'} underlineColorAndroid={'yellow'} 
	      	inlineImagePadding={10} selectionColor={'green'} />

	      	<TextInput style={styles.input} placeholder={'Clave'} placeholderTextColor={'white'} underlineColorAndroid={'yellow'} 
	      	inlineImagePadding={10} selectionColor={'green'} secureTextEntry={true} />

          <TextInput style={styles.input} placeholder={'Rut'} placeholderTextColor={'white'} underlineColorAndroid={'yellow'} 
          inlineImagePadding={10} selectionColor={'green'} secureTextEntry={true} />

          <TextInput style={styles.input} placeholder={'Fecha de Nacimiento'} placeholderTextColor={'white'} underlineColorAndroid={'yellow'} 
          inlineImagePadding={10} selectionColor={'green'} secureTextEntry={true} />

          <TextInput style={styles.input} placeholder={'Email'} placeholderTextColor={'white'} underlineColorAndroid={'yellow'} 
          inlineImagePadding={10} selectionColor={'green'} secureTextEntry={true} />

          <TextInput style={styles.input} placeholder={'Clave'} placeholderTextColor={'white'} underlineColorAndroid={'yellow'} 
          inlineImagePadding={10} selectionColor={'green'} secureTextEntry={true} />

          <TextInput style={styles.input} placeholder={'Dirección'} placeholderTextColor={'white'} underlineColorAndroid={'yellow'} 
          inlineImagePadding={10} selectionColor={'green'} secureTextEntry={true} />

          <TextInput style={styles.input} placeholder={'Teléfono'} placeholderTextColor={'white'} underlineColorAndroid={'yellow'} 
          inlineImagePadding={10} selectionColor={'green'} secureTextEntry={true} />

          <TextInput style={styles.input} placeholder={'Estatura'} placeholderTextColor={'white'} underlineColorAndroid={'yellow'} 
          inlineImagePadding={10} selectionColor={'green'} secureTextEntry={true} />

          <TextInput style={styles.input} placeholder={'Peso'} placeholderTextColor={'white'} underlineColorAndroid={'yellow'} 
          inlineImagePadding={10} selectionColor={'green'} secureTextEntry={true} />

          <TextInput style={styles.input} placeholder={'Nacionalidad'} placeholderTextColor={'white'} underlineColorAndroid={'yellow'} 
          inlineImagePadding={10} selectionColor={'green'} secureTextEntry={true} />

	   		  <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={{color: 'white', fontSize: 18}}> Registrarse </Text>
	       	</TouchableOpacity>

          </ScrollView>

      	</Image>
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