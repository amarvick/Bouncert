import React, { Component } from 'react';
import {
    // Text
} from 'react-native'
import { 
    Footer, 
    FooterTab, 
    Button, 
    Icon 
} from 'native-base';

class App extends Component {
  constructor(props) {
    super(props)
  }

  // selectFeedTab = (tab) => { this.props.switchTabs(tab) }

  render() {
    return (
      <Footer>
        <FooterTab>
          
          <Button onPress={() => this.props.switchTabs('Meet')}>
            <Icon name="apps" />
          </Button>
          <Button onPress={() => this.props.switchTabs('Connections')}>
            <Icon name="camera" />
          </Button>
          <Button onPress={() => this.props.switchTabs('Feed')}>
            <Icon name="apps" />
          </Button>
          <Button onPress={() => this.props.switchTabs('Events')}>
            <Icon active name="navigate" />
          </Button>
          <Button onPress={() => this.props.switchTabs('Profile')}>
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export const FooterTabs = App