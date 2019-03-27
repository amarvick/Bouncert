import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const logo = require('../../../assets/logo1.png')

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7F00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
