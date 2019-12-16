import React from 'react';

import {
  Container,
  HeaderText,
  BoldText,
  NextButton,
  DefaultButtom,
  DaysArea,
  Text,
  Lottie,
} from './styles';
import LottieView from 'lottie-react-native';

const animation = require('../../animations/fitness.json');

import {connect} from 'react-redux';

function StarterNivel(props) {
  function level(day) {
    let level = [...props.level];

    props.setLevel(level);
  }

  return (
    <Container>
      <HeaderText>
        Muito bem <BoldText>{props.name}</BoldText>, em qual nível voce estar?
      </HeaderText>
      <HeaderText>Selecione o nível.</HeaderText>

      <DaysArea>
        <DefaultButtom
          underlayColor="#0072c0"
          color={props.level == 'beginner' ? '#0072c0' : false}
          onPress={() => level('beginner')}
          width={100}>
          <Text>Iniciante / Frango</Text>
        </DefaultButtom>

        <DefaultButtom
          underlayColor="#0072c0"
          color={props.level == 'intermediate' ? '#0072c0' : false}
          onPress={() => level('intermediate')}
          width={100}>
          <Text>Intermediário / Me viro</Text>
        </DefaultButtom>

        <DefaultButtom
          underlayColor="#0072c0"
          color={props.level == 'advanced' ? '#0072c0' : false}
          onPress={() => level('advanced')}
          width={100}>
          <Text>Avançado / Nível The Rock</Text>
        </DefaultButtom>
      </DaysArea>
      <Lottie>
        <LottieView source={animation} autoPlay loop />
      </Lottie>
    </Container>
  );
}

StarterNivel.navigationOptions = ({navigation}) => {
  function nextAction() {
    navigation.navigate('StarteNivel');
  }

  return {
    title: '',
    headerRight: <NextButton title="Próximo" onPress={nextAction} />,
    headerRightContainerStyle: {
      marginRight: 5,
    },
  };
};

const mapStateToProps = state => {
  return {
    name: state.userReducer.name,
    workoutDays: state.userReducer.workoutDays,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({type: 'SET_NAME', payload: {name}}),
    setLevel: level => dispatch({type: 'SET_LEVEL', payload: {level}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarterNivel);
