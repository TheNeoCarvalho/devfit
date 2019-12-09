import {StackActions, NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';

const Preload = props => {
  props.navigation.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'StarterStack'})],
    }),
  );
  // if (!props.name) {
  //   props.navigation.dispath(
  //     StackActions.reset({
  //       index: 0,
  //       actions: [NavigationActions.navigate({routeName: 'StaterStack'})],
  //     }),
  //   );
  // } else {
  //   props.navigation.dispath(
  //     StackActions.reset({
  //       index: 0,
  //       actions: [NavigationActions.navigate({routeName: 'AppTab'})],
  //     }),
  //   );
  // }

  return null;
};

const mapStateToProps = state => {
  return {
    name: state.userReducer.name,
  };
};

export default connect(mapStateToProps)(Preload);
