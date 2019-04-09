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
import { actions, States } from '../store'
import { MainLI } from './loggedIn/main'
import { MainNLI } from './notLoggedIn/main'

/**
 * Main component. Display greeting when user is logged in,
 * otherwise it will display the login screen.
 * 
 * @class App
 * @extends {Component}
 */
class App extends Component {
  constructor(props) {
    super(props) 
  }

  render() {
    const { doLogout, loggedIn, fullName } = this.props
    var screen

    // Display login screen when user is not logged in
    if (loggedIn) screen = (<MainNLI/>)
    else screen = (<MainLI/>)

    return (
      <View style={styles.mainView}>
        { screen }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  button: {
    marginTop: 10,
    width: "100%"
  }
})  

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
  startup: () => dispatch(StartupActions.startup()),
  doLogout: () => dispatch(actions.user.logout())
})

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn
})

export const Main = connect(mapStateToProps, mapDispatchToProps)(App)