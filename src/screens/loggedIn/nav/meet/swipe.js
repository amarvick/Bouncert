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
      queried_users: this.props.user.queried_users,
      uninterested_users: this.props.user.uninterested_users,
      interested_users: this.props.user.interested_users,
    };
  }
 
  onSwipe(gestureName, users) {
    const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_LEFT:
        // Remove user from your recommendations permanently (User has a 'left swipe' array?)
        let uninterested_user = users[0]
        users.slice(0, 1)
        this.setState({ 
          queried_users: users
        })

        this.setState(prevState => ({
          uninterested_users: [...prevState.uninterested_users, uninterested_user]
        }))
        break;
      case SWIPE_RIGHT:
        // Put user in 'right swipe' array. Check if you are in theirs; if yes, add to connections; if no, do nothing
        let interested_user = users[0]
        
        this.setState({ 
          queried_users: users
        })

        this.setState(prevState => ({
          interested_users: [...prevState.interested_users, interested_user]
        }))
        break;
    }

    if (gestureName === SWIPE_LEFT || gestureName === SWIPE_RIGHT) {
      this.props.saveData(this.state, this.props.user.id)
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
        onSwipe={(direction, state) => this.onSwipe(direction, this.state.queriedUsers)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor
        }}
        >
        <Text>
          {this.state.myText}
        </Text>
        <Text>
          { this.state.queriedUsers[0].name }
        </Text>
        <Text>
          { this.state.queriedUsers[0].location }
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
