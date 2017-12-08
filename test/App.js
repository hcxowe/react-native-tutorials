import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
  Image
} from 'react-native';

import Greeting from './src/components/Greeting'
import Blink from './src/components/Blink'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: '双击R键进行重载,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
	render() {
		let pic = {
			uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
		};

    	return (
      		<View style={ styles.container }>
        		<Text style={ styles.welcome }>Hello World!</Text>
				<Image source={ pic } style={ styles.pic }></Image>
				<Greeting name="hcxowe"></Greeting>
				<Blink text={ ['I', 'LOVE', 'YOU'] } time={ 500 }></Blink>
      		</View>
    	);
  	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
  	},
  	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
  	},
  	pic: {
		width: 193,
		height: 110
	}
});
