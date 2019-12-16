import {createStackNavigator} from 'react-navigation-stack';

import StarterIntro from '../screens/StarterIntro';
import StarterName from '../screens/StarterName';
import StarterDias from '../screens/StarterDias';
import StarterNivel from '../screens/StarterNivel';

export default createStackNavigator({
  StarterIntro,
  StarterName,
  StarterNivel,
  StarterDias,
});
