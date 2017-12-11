import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
  Image,
	TextInput
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
						<View style={ {flex: 1, width: '100%', flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'} }>
							<Text style={ {textAlign: 'left', backgroundColor:'#ccc'} }>Hello World!</Text>
							<Text style={ {textAlign: 'left', backgroundColor:'#ccc'} }>Hello World!</Text>
							<Text style={ {textAlign: 'left', backgroundColor:'#ccc'} }>Hello World!</Text>
						</View>
						<View style={ {flex:1, alignItems: 'center'} }>
							<Image source={ pic } style={ [styles.pic, {flex:1, alignItems: 'center'}] }></Image>
						</View>
						<View style={ {flex:1, alignItems: 'stretch'} }>
							<TextInput style={ {height: 40} } placeholder="please input something？"></TextInput>
							<Text></Text>
						</View>
						<View style={ {flex:1, alignItems: 'center'} }>
							<Greeting name="hcxowe"></Greeting>
							<Blink text={ ['I', 'LOVE', 'YOU'] } time={ 500 }></Blink>
						</View>
      		</View>
    	);
  	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	pic: {
		width: 193,
		height: 110
	}
});
