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

import { NavHeader } from './header'

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
    var fullName = this.props.fullName

    // Display greeting with user full name displayed
    return (
      <View>
        <NavHeader/>
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
    fullName: state.user.fullName
})
  
export const MainLI = connect(mapStateToProps, mapDispatchToProps)(App)