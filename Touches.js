import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

export default class Touches extends Component {
    render() {
        return (
            <Button onPress={()=>{
                Alert.alert('You tapped the button!')
            }}
            title="Press Me"
            />
        )
    }
}