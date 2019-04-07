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
import { Login } from './nav/login'
import { SignUp } from './nav/signup'
import { Main } from './nav/main'

var logo = require('../../../assets/logo1.png')

/**
 * Main component. Display greeting when user is logged in,
 * otherwise it will display the login screen.
 * 
 * @class App
 * @extends {Component}
 */
export class MainNLI extends Component {
  constructor() {
    super() 

    this.state = {
      screenDisplayStatus: 'Main'
    }

    this.displayMain = this.displayMain.bind(this)
    this.displaySignUp = this.displaySignUp.bind(this)
    this.displayLogin = this.displayLogin.bind(this)
  }

  displayMain() { this.setState({ screenDisplayStatus: 'Main'}) }
  displaySignUp() { this.setState({ screenDisplayStatus: 'Sign Up'}) }
  displayLogin() { this.setState({ screenDisplayStatus: 'Login'}) }

  render() {

    var screenDisplayStatus = this.state.screenDisplayStatus
    var screenDisplay

    if (screenDisplayStatus === 'Main') screenDisplay = ( <Main displaySignUp={this.displaySignUp} displayLogin={this.displayLogin}/> )
    else if (screenDisplayStatus === 'Login') screenDisplay = ( <Login goBack={this.displayMain}/> )
    else if (screenDisplayStatus === 'Sign Up') screenDisplay = ( <SignUp goBack={this.displayMain}/> )


    return (
      <View style={styles.mainView}>
        <Image source={logo}/>

        { screenDisplay }
      </View>
    )
  }
}

const styles = StyleSheet.create({
    mainView: {
      backgroundColor: '#ff7d0c',
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    button: {
      marginTop: 10,
      width: "100%"
    }
});