import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { 
    Container, 
    Header,
    Left, 
    Body, 
    Right, 
    Button, 
    Icon
    // Title 
} from 'native-base';

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Text>Header</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

export const NavHeader = App