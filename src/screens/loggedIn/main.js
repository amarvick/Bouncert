import React, { Component } from 'react'
import { 
  StyleSheet, 
  View, 
  Image, 
  Text
} from 'react-native'
import { 
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Label
} from 'native-base'
import { connect } from 'react-redux'
import { actions, States } from '../../store'

import { Header } from './header'

var logo = require('../../assets/logo1.png')

/**
 * Main component. Display greeting when user is logged in,
 * otherwise it will display the login screen.
 * 
 * @class App
 * @extends {Component}
 */
class App extends Component {
  constructor() {
    super() 
  }

  render() {

    // Display greeting with user full name displayed
    return (
      <View>
        <Text>Welcome {fullName}!</Text>
        <Button
          block rounded
          style={styles.button}
          title="logout"
          onPress={() => {
            doLogout()
          }}
        >
          <Text>Logout</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#ff7d0c',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  button: {
    marginTop: 10,
    width: "100%"
  }
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch,
    startup: () => dispatch(StartupActions.startup()),
    doLogout: () => dispatch(actions.user.logout())
})
  
const mapStateToProps = (state) => ({
    loggedIn: state.user.loggedIn,
    fullName: state.user.fullName
})
  
export const MainLI = connect(mapStateToProps, mapDispatchToProps)(App)