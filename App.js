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

    return (
      	<Image style={styles.fondo} source={require('./img/Fondo2.png')}>

	      	<StatusBar hidden />

	      	<Image style={styles.logo} source={require('./img/Logo2.png')}></Image>

	      	<TextInput style={styles.input} placeholder={'Nombre de Usuario'} placeholderTextColor={'white'} underlineColorAndroid={'yellow'} 
	      	inlineImagePadding={10} selectionColor={'green'} />

	      	<TextInput style={styles.input} placeholder={'Clave'} placeholderTextColor={'white'} underlineColorAndroid={'yellow'} 
	      	inlineImagePadding={10} selectionColor={'green'} secureTextEntry={true} />

	   		<TouchableOpacity style={styles.button} onPress={this.onPress}>
	        	<Text style={{color: 'white', fontSize: 18}}> Ingresar </Text>
	       	</TouchableOpacity>

	       	<Text style={{color: 'white', fontSize: 15, alignSelf: 'center', bottom: 60}}> Recuperar Clave </Text>
	       	<Text style={{color: '#b6a32c', fontSize: 18, fontWeight: 'bold', alignSelf: 'center', bottom: 30}}> Regístrate </Text>

      	</Image>
    );
  }
}

const styles = StyleSheet.create({

	logo: {
    	width: 100,
    	height: 100,
    	alignSelf: 'center',
    	bottom: 120
  	},


  	input: {
		height: 50, 
		width: '80%',
  		alignSelf: 'center', 
  		bottom: 100,
  		marginTop: 20,
  		backgroundColor: 'black',
  		opacity: 0.4,
  		color: 'white',
  		borderRadius: 10,
  		fontWeight: 'bold',
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
    	bottom: 70
  	}
})