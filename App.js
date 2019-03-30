import React from 'react';
// import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/components/home/home.js'
import MainScreen from './src/components/mainScreen/mainScreen.js'
import reducer from './src/reducers/reducers'

import store from './src/store'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userLoggedIn: false
    }
  }

  render() {

    var userLoggedIn = this.state.userLoggedIn;

    var displayScreen;

    if (!userLoggedIn) {
      displayScreen = (
        <MainScreen/> 
      );
    } else {
      displayScreen = (
        <Home/>
      );
    }

    return (
      <Provider store={store}>
        <View style={styles.container}>
          { displayScreen }    
        </View>
      </Provider>
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
