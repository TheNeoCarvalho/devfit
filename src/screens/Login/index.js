import React from 'react';

import {Container, Text, Button} from './styles';

export default function Login({navigation}) {
  function EfetuarLogin() {
    navigation.navigate('Home');
  }
  return (
    <Container>
      <Text>Login</Text>
      <Button title="Efetuar Login" onPress={EfetuarLogin}></Button>
    </Container>
  );
}

Login.navigationOptions = {
  title: 'Login',
};
