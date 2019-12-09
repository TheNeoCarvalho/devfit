import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Preload from '../screens/Preload';
import StarterStack from './StarterStack';
// import Apptab from './AppTab';

const MainStack = createStackNavigator(
  {
    Preload,
    StarterStack,
    // Apptab,
  },
  {
    initialRouteName: 'Preload',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(MainStack);
