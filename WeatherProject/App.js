import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Forecast from './src/Forecast'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      zip: '',
      forecast: {
        main: 'Clouds',
        description: 'few clouds',
        temp: 45.7
      }
    };
  }

  handleTextChange(event) {
    this.setState({
      zip: event.nativeEvent.text
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You input {this.state.zip}.
        </Text>
        <Forecast style={styles.forecast} main={this.state.forecast.main} description={this.state.forecast.description} temp={this.state.forecast.temp}></Forecast>
        <TextInput style={styles.input} onSubmitEditing={(e) => this.handleTextChange(e)}></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#CCC',
  },
  welcome: {
    flex: 1,
    fontSize: 20, 
    textAlign: 'center',
    borderWidth: 1
  },
  input: {
    flex: 1,
    fontSize: 20,
    borderWidth: 1,
    height: 40    
  },
  forecast: {
    flex: 1
  }
});
