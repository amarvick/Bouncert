import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator
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
import { actions, States } from '../../../store'

/**
 * A login component that display username and password text field.
 * Loading indicator will show up when login is in process.
 * 
 * @class App
 * @extends {Component}
 */

class App extends Component {
  constructor() {
    super()
  }

  render() {
    // display login screen
    return (
      <View>
        <Button
          block rounded
          style={styles.button}
          title="Sign Up"
          onPress={() => {
            this.props.displaySignUp()
          }}
        ><Text>Sign Up</Text></Button>

        <Button
          block rounded
          style={styles.button}
          title="Log In"
          onPress={() => {
            this.props.displayLogin()
          }}
        ><Text>Log in</Text></Button>
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
      width: "95%" // AM - May be a better way, but good for now
    }
  });

export const Main = App