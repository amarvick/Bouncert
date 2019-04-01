import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/home/home';
import MainScreen from './src/screens/mainScreen/mainScreen';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  MainScreen: { screen: MainScreen},
});

export default AppNavigator;