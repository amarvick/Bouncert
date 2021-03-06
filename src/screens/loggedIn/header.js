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
} from 'native-base';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export const NavHeader = App