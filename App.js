import React from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './AppNavigator';
import reducer from './src/reducers/reducers';

import store from './src/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator
          screenProps = {{
            userLoggedIn: this.props.userLoggedIn
          }}
        />
      </Provider>
    );
  }
}