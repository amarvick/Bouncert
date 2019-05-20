import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux'
import { actions, States } from '../../../../store'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
 
class Swipe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      queried_users: this.props.user.queried_users,
      uninterested_users: this.props.user.uninterested_users,
      interested_users: this.props.user.interested_users,
    };
  }
 
  onSwipe(gestureName, users) {
    const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    if (gestureName === SWIPE_LEFT || gestureName === SWIPE_RIGHT) {
      switch (gestureName) {
        case SWIPE_LEFT:
          // Remove user from your recommendations permanently (User has a 'left swipe' array?)
          let uninterested_user = users[0]
          users.shift()
          let new_uninterested_users = this.state.uninterested_users.push(uninterested_user)

          this.setState(prevState => ({
            queried_users: users,
            uninterested_users: new_uninterested_users
          }))
          break;
        case SWIPE_RIGHT:
          // Put user in 'right swipe' array. Check if you are in theirs; if yes, add to connections; if no, do nothing
          let interested_user = users[0]
          users.shift()
          let new_interested_users = this.state.interested_users.push(interested_user)

          this.setState({
            queried_users: users,
            interested_users: new_interested_users
          })
          break;
      }

      alert(gestureName)
      console.log(this.state)
      this.props.saveData(this.state, this.props.user.id)
    }
  }
 
  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
 
    if (this.state.queried_users !== null && this.state.queried_users.length === 0) {
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
        onSwipe={(direction, state) => this.onSwipe(direction, this.state.queried_users)}
        config={config}
        style={{
          flex: 1
          // backgroundColor: this.state.backgroundColor
        }}
      >
        <Text>
          { this.state.queried_users[0].name }
        </Text>
        <Text>
          { this.state.queried_users[0].location }
        </Text> 
      </GestureRecognizer>
    );
  }
}
 
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
  startup: () => dispatch(StartupActions.startup())
})

const mapStateToProps = (state) => ({
  loading: state.user.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(Swipe)
