import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';

const MainNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  Home: {
    screen: Home,
  },
});

export default MainNavigator;
