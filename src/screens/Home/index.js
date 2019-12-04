import React from 'react';

import {Container, Text} from './styles';

export default function Home({navigation}) {
  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
}
  
Home.navigationOptions = {
  title: 'Home',
};
