import React, { Component } from 'react'
import { 
  StyleSheet, 
  View, 
  Image, 
  Text,
  ScrollView
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

import { Feed } from './nav/feed/feed'
import { Profile } from './nav/profile/profile'
import { Messages } from './nav/messages/messages'
import { Connections } from './nav/connections/connections'
import { Meet } from './nav/meet/meet'
import { Events } from './nav/events/events'

import { NavHeader } from './header'
import { FooterTabs } from './footer'

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

    this.state = {
      screen: 'Feed'
    }

    this.switchTabs = this.switchTabs.bind(this)
    this.props.saveData = this.props.saveData.bind(this)
  }

  componentDidMount = () => {
    if (this.props.user.queried_users !== undefined && this.props.user.queried_users.length === 0) {
      // Only query users who aren't already current connections or ones you aren't interested in
      this.props.getUsers(this.props.user)
    } else {
      // otherwise, re-query users so they update. AM - could be a bad practice; definitely a more intricate solution but do this for now.
      // AM - to make function for this
    }
  }

  switchTabs = (tab) => {
    this.setState({ screen: tab })
  }

  render() {
    var screen

    if (this.state.screen === 'Feed') {
      screen = (
        <Feed
        />
      )
    } else if (this.state.screen === 'Profile') {
      screen = (
        <Profile
          saveData={this.props.saveData}
          user={this.props.user}
        />
      )
    } else if (this.state.screen === 'Messages') {
      screen = (
        <Messages
        />
      )
    } else if (this.state.screen === 'Connections') {
      screen = (
        <Connections
          connections={this.props.user.connections}
        />
      )
    } else if (this.state.screen === 'Meet') {
      screen = (
        <Meet
          saveData={this.props.saveData}
          user={this.props.user}
        />
      )
    } else if (this.state.screen === 'Events') {
      screen = (
        <Events
        />
      )
    }
    
    return (
      <View style={styles.screen}>
        <NavHeader style={styles.header}/>
        
        <ScrollView>
          { screen }
        </ScrollView>

        <FooterTabs
          switchTabs={this.switchTabs}
          style={styles.footer}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    flex: 1
  },
  button: {
    marginTop: 10,
    width: "100%"
  }
})  

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch,
    startup: () => dispatch(StartupActions.startup()),
    getUsers: (user, userProps) => dispatch(actions.user.getUsers(user, userProps)),
    saveData: (user, id) => dispatch(actions.user.saveData(user, id)),
    doLogout: () => dispatch(actions.user.logout())
})
  
const mapStateToProps = (state) => ({
    user: state.user.user
})
  
export const MainLI = connect(mapStateToProps, mapDispatchToProps)(App)