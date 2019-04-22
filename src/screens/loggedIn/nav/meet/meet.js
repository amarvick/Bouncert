import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native'
import { 
} from 'native-base';

import Swipe from './swipe'

class App extends Component {
  render() {
    return (
      <View>
        <Text>Swipe right/left</Text>
        <Swipe/>
      </View>
    );
  }
}

export const Meet = App