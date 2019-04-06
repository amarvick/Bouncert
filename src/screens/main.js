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
import { Login } from './notLoggedIn/login'
import { SignUp } from './notLoggedIn/signup'
import { MainOptions } from './notLoggedIn/mainOptions'

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
    this.displaySignUp = this.displaySignUp.bind(this)
    this.displayLogin = this.displayLogin.bind(this)
  }

  displayMain() { this.setState({ screenDisplayStatus: 'Main'}) }
  displaySignUp() { this.setState({ screenDisplayStatus: 'Sign Up'}) }
  displayLogin() { this.setState({ screenDisplayStatus: 'Login'}) }

  render() {
    const { doLogout, loggedIn, fullName } = this.props

    var screenDisplayStatus = this.state.screenDisplayStatus
    var screenDisplay

    if (screenDisplayStatus === 'Main') screenDisplay = ( <MainOptions displaySignUp={this.displaySignUp} displayLogin={this.displayLogin}/> )
    else if (screenDisplayStatus === 'Login') screenDisplay = ( <Login goBack={this.displayMain}/> )
    else if (screenDisplayStatus === 'Sign Up') screenDisplay = ( <SignUp goBack={this.displayMain}/> )

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
  
export const Main = connect(mapStateToProps, mapDispatchToProps)(App)