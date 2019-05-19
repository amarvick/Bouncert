'use strict';
 
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
 
class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      backgroundColor: '#fff'
    };
  }
 
  onSwipeLeft(gestureState) {
    this.setState({myText: 'You swiped left!'});
  }
 
  onSwipeRight(gestureState) {
    this.setState({myText: 'You swiped right!'});
  }
 
  onSwipe(gestureName, gestureState) {
    const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_LEFT:
        // Remove user from your recommendations permanently (User has a 'left swipe' array?)
        this.setState({backgroundColor: 'blue'});
        this.props.user.push(allUsers[0])
        allUsers[0].slice(0, 1)
        break;
      case SWIPE_RIGHT:
        // Put user in 'right swipe' array. Check if you are in theirs; if yes, add to connections; if no, do nothing
        this.setState({backgroundColor: 'yellow'});
        break;
    }
  }
 
  render() {
    console.log(this.props.allUsers)
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
 
    if (this.props.allUsers !== null && this.props.allUsers.length === 0) {
      return (
        <TouchableHighlight>
          <Text>
            No recommendations right now. Click to refresh.
          </Text>
        </TouchableHighlight>
      )
    }

    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor
        }}
        >
        <Text>{this.state.myText}</Text>
        <Text>
          { this.props.allUsers[0].name }
        </Text>
        <Text>
          { this.props.allUsers[0].location }
        </Text>
        <Text>
          onSwipe callback received gesture: {this.state.gestureName}
        </Text>
      </GestureRecognizer>
    );
  }
}
 
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
  startup: () => dispatch(StartupActions.startup()),
  saveData: (user, id) => dispatch(actions.user.saveData(user, id))
})

const mapStateToProps = (state) => ({
  loading: state.user.loading
})

export const Swipe = connect(mapStateToProps, mapDispatchToProps)(App)
