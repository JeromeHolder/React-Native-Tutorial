import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

export default class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={styles.image} />
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 0.4,
        flexDirection: 'column',
        justifyContent: 'space-around',
        // width: 193,
        // height: 110,
        alignItems: 'stretch'
    }
})