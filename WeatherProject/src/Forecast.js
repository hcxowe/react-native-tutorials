import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// <Text style={styles.bigText}>
// {this.props.main}
// </Text>
// <Text style={styles.mainText}>
// {this.props.description}
// </Text>
// <Text style={styles.bigText}>
// {this.props.temp}℃
// </Text>
export default class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.bigText}>
                    {this.props.main}
                </Text>
                <Text style={styles.mainText}>
                    {this.props.description}
                </Text>
                <Text>
                    {this.props.temp}℃
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCC',
    },
    bigText: {
        flex: 1,
        fontSize: 20
    },
    mainText: {
        flex: 2,
        fontSize: 16
    }
});