import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Hello world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  }
})