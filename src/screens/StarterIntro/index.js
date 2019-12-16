import React from 'react';

import {
  Container,
  WelComeImage,
  WelComeLogo,
  WelComeText,
  BeginConfig,
  Buttom,
  TextButtom,
} from './styles';

function StarterIntro(props) {
  function start() {
    props.navigation.navigate('StarterName');
  }

  return (
    <Container>
      <WelComeText>Bem vindo(a) ao Devfit</WelComeText>
      <WelComeImage>
        <WelComeLogo source={require('../../assets/boneco.png')} />
      </WelComeImage>
      <BeginConfig>
        <Buttom
          width="100%"
          color="#0072c0"
          underlayColor="#0b7ac6"
          onPress={start}>
          <TextButtom>Iniciar configuração</TextButtom>
        </Buttom>
      </BeginConfig>
    </Container>
  );
}

StarterIntro.navigationOptions = {
  header: null,
};

export default StarterIntro;
