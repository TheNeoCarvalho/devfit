import React from 'react';

import {
  Container,
  HeaderText,
  BoldText,
  NextButton,
  DefaultButtom,
  DaysArea,
  Text,
} from './styles';

import {connect} from 'react-redux';

function StarterDias(props) {
  function toggleDay(day) {
    let newWorkoutDays = [...props.workoutDays];
    if (!props.workoutDays.includes(day)) {
      newWorkoutDays.push(day);
    } else {
      newWorkoutDays = newWorkoutDays.filter(i => i != day);
    }
    props.setWorkoutDays(newWorkoutDays);
  }

  return (
    <Container>
      <HeaderText>
        Opa <BoldText>{props.name}</BoldText>, tudo bem?
      </HeaderText>
      <HeaderText>
        Quais <BoldText>dias da semana</BoldText> voce pretende treinar?
      </HeaderText>

      <DaysArea>
        <DefaultButtom
          underlayColor="#0072c0"
          color={props.workoutDays.includes(1) ? '#0072c0' : false}
          onPress={() => toggleDay(1)}
          width={100}>
          <Text>Segunda</Text>
        </DefaultButtom>

        <DefaultButtom
          underlayColor="#0072c0"
          color={props.workoutDays.includes(2) ? '#0072c0' : false}
          onPress={() => toggleDay(2)}
          width={100}>
          <Text>Terça</Text>
        </DefaultButtom>

        <DefaultButtom
          underlayColor="#0072c0"
          color={props.workoutDays.includes(3) ? '#0072c0' : false}
          onPress={() => toggleDay(3)}
          width={100}>
          <Text>Quarta</Text>
        </DefaultButtom>

        <DefaultButtom
          underlayColor="#0072c0"
          color={props.workoutDays.includes(4) ? '#0072c0' : false}
          onPress={() => toggleDay(4)}
          width={100}>
          <Text>Quinta</Text>
        </DefaultButtom>

        <DefaultButtom
          underlayColor="#0072c0"
          color={props.workoutDays.includes(5) ? '#0072c0' : false}
          onPress={() => toggleDay(5)}
          width={100}>
          <Text>Sexta</Text>
        </DefaultButtom>

        <DefaultButtom
          underlayColor="#0072c0"
          color={props.workoutDays.includes(6) ? '#0072c0' : false}
          onPress={() => toggleDay(6)}
          width={100}>
          <Text>Sábado</Text>
        </DefaultButtom>

        <DefaultButtom
          underlayColor="#0072c0"
          color={props.workoutDays.includes(0) ? '#0072c0' : false}
          onPress={() => toggleDay(0)}
          width={100}>
          <Text>Domingo</Text>
        </DefaultButtom>
      </DaysArea>
    </Container>
  );
}

StarterDias.navigationOptions = ({navigation}) => {
  function nextAction() {
    navigation.navigate('StarterNivel');
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
    setWorkoutDays: workoutDays =>
      dispatch({type: 'SET_WORKOUTDAYS', payload: {workoutDays}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarterDias);
