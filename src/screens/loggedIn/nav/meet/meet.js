import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native'
import { 
} from 'native-base';

import Swipe from './swipe'

class App extends Component {
  constructor(props) {
    super(props) 
  }
  render() {
    return (
      <View>
        <Text>Swipe right/left</Text>
        <Swipe
          allUsers={this.props.queryResults}
          user={this.props.user}
        />
      </View>
    );
  }
}

export const Meet = App