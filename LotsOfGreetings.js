import React, { Component } from 'react';
import { View } from 'react-native';
import Greeting from './Greeting'

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems:'center'}}>
                <Greeting name='Jerome' />
                <Greeting name='Erica' />
                <Greeting name='Shawn' />
            </View>
        );
    }
}