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
import { actions, States } from '../../store'

/**
 * A login component that display username and password text field.
 * Loading indicator will show up when login is in process.
 * 
 * @class App
 * @extends {Component}
 */

class App extends Component {
  constructor(props) {
    super(props)

    // init local state
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    const { loading, doLogin } = this.props

    // show only loading indicator if loading state is true
    if (loading) {
      return <ActivityIndicator />
    }


    // display login screen
    return (
      <View style={styles.mainView}>
        <Text>Login</Text>
     
        <View style={styles.form}>
          <Label>Username</Label>
          <TextInput
            style={styles.textInput}
            onChangeText={username => this.setState({ username })}
            value={this.state.username}
          />

          <Label>Password</Label>
          <TextInput
            style={styles.textInput}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </View>
    
        <Button
          block rounded
          style={styles.button}
          title="login"
          onPress={() => {
            doLogin(this.state.username, this.state.password)
          }}
        ><Text>Log in</Text></Button>


        <Button
          block rounded
          style={styles.button}
          title="Back"
          onPress={() => {
            this.props.goBack()
          }}
        ><Text>Back</Text></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#ff7d0c',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },

  textInput: {
    backgroundColor: 'white',
    marginTop: 3
  },

  form: {
    alignSelf: 'stretch'
  },

  button: {
    marginTop: 10,
    width: "100%"
  }
});

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
  startup: () => dispatch(StartupActions.startup()),
  doLogin: (username, password) => dispatch(actions.user.login(username, password))
})

const mapStateToProps = (state) => ({
  loading: state.user.loading
})

/**
 * Login screen.
 */
export const Login = connect(mapStateToProps, mapDispatchToProps)(App)

