import React, { Component } from 'react';
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

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button onPress={() => this.props.switchTabs('Meet')}>
            <Icon name="people" />
          </Button>
          <Button onPress={() => this.props.switchTabs('Connections')}>
            <Icon name="chatboxes" />
          </Button>
          <Button onPress={() => this.props.switchTabs('Feed')}>
            <Icon name="paper" />
          </Button>
          <Button onPress={() => this.props.switchTabs('Events')}>
            <Icon active name="calendar" />
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