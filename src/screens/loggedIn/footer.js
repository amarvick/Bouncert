import React, { Component } from 'react';
import {
    // Text
} from 'react-native'
import { 
    Container, 
    Header, 
    Content, 
    Footer, 
    FooterTab, 
    Button, 
    Icon 
} from 'native-base';

class App extends Component {
  render() {
    return (
      <Container>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export const FooterTabs = App