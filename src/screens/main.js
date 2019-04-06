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
  Label,
  P
} from 'native-base'
import { connect } from 'react-redux'
import { actions, States } from '../store'
// import { MainLI } from './loggedIn/main'
import { MainNLI } from './notLoggedIn/main'

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
    const { doLogout, loggedIn, fullName } = this.props

    // Display login screen when user is not logged in
    if (!loggedIn) {
      return (
        <View style={styles.mainView}>
          <MainNLI/>
        </View>
      )
    }

    // Display greeting with user full name displayed
    return (
      <View>
        <P>
          eeeee
        </P>
        {/* <MainLI/> */}
        {/* <Text>Welcome {fullName}!</Text>
        <Button
          block rounded
          style={styles.button}
          title="logout"
          onPress={() => {
            doLogout()
          }}
        >
          <Text>Logout</Text>
        </Button> */}
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