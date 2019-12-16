import React from 'react';

import {Container, HeaderText, NameInput, NextButtom} from './styles';
import LottieView from 'lottie-react-native';

const animation = require('../../animations/gympass-jump.json');

import {connect} from 'react-redux';

function StarterName(props) {
  function nextAction() {
    if (!props.name) {
      alert('Voce precisa de um nome!');
      return;
    }
    props.navigation.navigate('StarterDias');
  }

  function handleChangeName(text) {
    props.setName(text);
    props.navigation.setParams({name: text});
  }

  return (
    <Container>
      <HeaderText>Vamos lá...</HeaderText>
      <HeaderText>Qual seu nome?</HeaderText>
      <NameInput
        value={props.name}
        onChangeText={handleChangeName}
        autoFocus={true}
        autoCapitalize="words"
        onSubmitEditing={nextAction}
      />
      <LottieView source={animation} autoPlay loop />
    </Container>
  );
}

StarterName.navigationOptions = ({navigation}) => {
  function nextAction() {
    if (!navigation.state.params || !navigation.state.params.name) {
      alert('Voce precisa de um nome!');
      return;
    }

    navigation.navigate('StarterDias');
  }

  return {
    title: '',
    headerRight: <NextButtom title="Próximo" onPress={nextAction} />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

const mapStateToProps = state => {
  return {
    name: state.userReducer.name,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({type: 'SET_NAME', payload: {name}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarterName);
