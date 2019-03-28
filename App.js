import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/components/home/home.js'
import MainScreen from './src/components/mainScreen/mainScreen.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreen/>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
