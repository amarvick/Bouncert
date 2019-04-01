import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// componentDidMount() {
    
// }

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        Welcome to the app!
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
