
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
 * A signup component that displays a form for user to make an account.
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
      name: '',
      username: '',
      dateOfBirth: '',
      email: '',
      password: '',
      passwordVerify: ''
    }
  }

  render() {
    const { loading, doSignup } = this.props

    // show only loading indicator if loading state is true
    if (loading) {
      return <ActivityIndicator />
    }


    // display login screen
    return (
      <View style={styles.mainView}>
        <Text>Sign Up</Text>
     
        <View style={styles.form}>
          <Label>Name</Label>
          <TextInput
            style={styles.textInput}
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />

          <Label>Username</Label>
          <TextInput
            style={styles.textInput}
            onChangeText={username => this.setState({ username })}
            value={this.state.username}
          />

          <Label>Date of Birth</Label>
          <TextInput
            style={styles.textInput}
            onChangeText={dateOfBirth => this.setState({ dateOfBirth })}
            value={this.state.dateOfBirth}
          />

          <Label>Email</Label>
          <TextInput
            style={styles.textInput}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />

          <Label>Password</Label>
          <TextInput
            style={styles.textInput}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />

          <Label>Confirm Password</Label>
          <TextInput
            style={styles.textInput}
            onChangeText={passwordVerify => this.setState({ passwordVerify })}
            value={this.state.passwordVerify}
          />
        </View>

        <Button
          block rounded
          style={styles.button}
          title="login"
          onPress={() => {
            doSignup(this.state.name, this.state.username, this.state.dateOfBirth, this.state.email, this.state.password, this.state.passwordVerify)
          }}
        ><Text>Sign Up</Text></Button>


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
  doSignup: (name, username, dateOfBirth, email, password, passwordVerify) => dispatch(actions.user.signup(name, username, dateOfBirth, email, password, passwordVerify))
})

const mapStateToProps = (state) => ({
  loading: state.user.loading
})

/**
 * Login screen.
 */
export const SignUp = connect(mapStateToProps, mapDispatchToProps)(App)