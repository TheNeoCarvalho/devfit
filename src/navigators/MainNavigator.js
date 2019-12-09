import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from '../screens/Home';
import Login from '../screens/Login';

const MainNavigator = createBottomTabNavigator(
  {
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#a35029',
      labelStyle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      style: {
        backgroundColor: 'tomato',
      },
    },
  },
);

export default MainNavigator;
