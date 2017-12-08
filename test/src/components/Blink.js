import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Blink extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            index: 0,
            showText: true
        };

        setInterval(() => {
            this.setState({
                showText: !this.state.showText
            });

            if (!this.state.showText) {
                this.setState({
                    index: this.state.index + 1
                });
            }
        }, this.props.time);
    }

    render() {
        let display = this.state.showText ? this.props.text[this.state.index % this.props.text.length] : '';

        return (
            <Text>{ display }</Text>
        );
    }
}