import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
import { actions, States } from '../store'

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
      username: 'admin',
      password: 'secret'
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
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
        />
        <TextInput
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button
          title="login"
          onPress={() => {
            doLogin(this.state.username, this.state.password)
          }}
        />

        <Button
          title="Back"
          onPress={() => {
            this.props.goBack()
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
})

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

