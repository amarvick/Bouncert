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
// import { actions, States } from '../../../../store'

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

    this.state = {
      name: this.props.user.name,
      username: this.props.user.userName,
      password: this.props.user.password
    }
  }

  render() {
    const { loading, doSignup } = this.props

    // show only loading indicator if loading state is true
    if (loading) {
      return <ActivityIndicator />
    }

    return (
      <View style={styles.mainView}>
        <Text>Sign Up</Text>
     
        <View style={styles.form}>
          <View style={styles.formLabel}>
            <Label>Name</Label>
            <TextInput
              style={styles.textInput}
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
            />
          </View>

          <View style={styles.formLabel}>
            <Label>Username</Label>
            <TextInput
              style={styles.textInput}
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />
          </View>

          <View style={styles.formLabel}>
            <Label>Password</Label>
            <TextInput
              style={styles.textInput}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
          </View>
        </View>

        <Button
          block rounded
          style={styles.button}
          title="login"
          onPress={() => {
            doSignup(this.state.name, this.state.username, this.state.dateOfBirth, this.state.email, this.state.password, this.state.passwordVerify) // Save data here
          }}
        ><Text>Save</Text></Button>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },

  textInput: {
    backgroundColor: 'gray',
    marginHorizontal: 10,
    borderWidth: 0.5,
    borderRadius: 4
  },

  form: {
    alignSelf: 'stretch'
  },

  formLabel: {
    flexDirection: 'row'
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
export const Profile = connect(mapStateToProps, mapDispatchToProps)(App)