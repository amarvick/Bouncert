import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { actions, States } from '../store'
import { Login } from './login'
// import { Signup } from './signup'

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

    this.state = {
      screenDisplayStatus: 'Main'
    }

    this.displayMain = this.displayMain.bind(this)
  }

  displayMain() {
    this.setState({ screenDisplayStatus: 'Main'})
  }

  displaySignUp() {
    this.setState({ screenDisplayStatus: 'Sign Up'})
  }

  displayLogin() {
    this.setState({ screenDisplayStatus: 'Login'})
  }

  render() {
    const { doLogout, loggedIn, fullName } = this.props

    var screenDisplayStatus = this.state.screenDisplayStatus
    var screenDisplay

    // AM - make this in to a component itself 'Select Options' to reduce code.
    if (screenDisplayStatus === 'Main') screenDisplay = (
      <View>
        <Button
          style={styles.button}
          title="Sign Up"
          onPress={() => {
            this.displaySignUp()
          }}
        />

        <Button
          style={styles.button}
          title="Log In"
          onPress={() => {
            this.displayLogin()
          }}
        />
      </View>
    )

    else if (screenDisplayStatus === 'Login') screenDisplay = (
      <Login goBack={this.displayMain}/>
    )
    
    else if (screenDisplayStatus === 'Sign Up') screenDisplay = (
      <SignUp goBack={this.displayMain}/>
    )

    // Display login screen when user is not logged in
    if (!loggedIn) {
      return (
        <View style={styles.mainView}>
          <Image source={logo}/>

          { screenDisplay }
        </View>
      )
    }

    // Display greeting with user full name displayed
    return (
      <View>
        <Text>Welcome {fullName}!</Text>
        <Button
          title="logout"
          onPress={() => {
            doLogout()
          }}
        >
          Logout
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
    width: 100
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
  
export const Main = connect(mapStateToProps, mapDispatchToProps)(App)