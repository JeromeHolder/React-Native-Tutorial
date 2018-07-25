import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import HelloWorld from './HelloWorld';
import Bananas from './Bananas';
import LotsOfGreetings from './LotsOfGreetings';
import Layout from './Layout';
import PizzaTranslator from './PizzaTranslator';
import Touches from './Touches';
// import Blink from './Blink';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HelloWorld/>
        <Bananas/>
        <LotsOfGreetings/>
        {/* <Blink/> */}
        <Layout />
        <PizzaTranslator/>
        <Touches/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
