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

import { Feed } from './nav/feed'
import { Profile } from './nav/profile'
import { Messages } from './nav/messages'
import { Connections } from './nav/connections'
import { Meet } from './nav/meet'
import { Events } from './nav/events'

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
  }

  switchTabs = (tab) => {
    // alert(tab)
    this.setState({ screen: tab })
  }

  render() {
    var fullName = this.props.fullName
    var screen

    if (this.state.screen === 'Feed') screen = (<Feed/>)
    else if (this.state.screen === 'Profile') screen = (<Profile/>)
    else if (this.state.screen === 'Messages') screen = (<Messages/>)
    else if (this.state.screen === 'Connections') screen = (<Connections/>)
    else if (this.state.screen === 'Meet') screen = (<Meet/>)
    else if (this.state.screen === 'Events') screen = (<Events/>)

    
    return (
      <View style={styles.screen}>
        <NavHeader style={styles.header}/>
        
        <ScrollView>
          { screen }
        </ScrollView>

        <FooterTabs
          switchTabs = {this.switchTabs}
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
    doLogout: () => dispatch(actions.user.logout())
})
  
const mapStateToProps = (state) => ({
    fullName: state.user.fullName
})
  
export const MainLI = connect(mapStateToProps, mapDispatchToProps)(App)