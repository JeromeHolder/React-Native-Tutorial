import React, { Component } from 'react';
import { View } from 'react-native';
import BlinkText from './BlinkText'

export default class Blink extends Component {
    render() {
        return (
            <View>
                <BlinkText text='I blink!' />
                <BlinkText text='Me too!' />
            </View>
        );
    }
}