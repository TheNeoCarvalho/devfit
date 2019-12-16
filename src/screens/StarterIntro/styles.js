import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  border: none;
  align-items: center;
  background-color: #fff;
  margin-left: 30px;
  margin-right: 30px;
`;

export const WelComeText = styled.Text`
  margin-top: 30px;
  font-size: 28px;
  color: #333;
`;
export const WelComeImage = styled.View`
  flex: 1;
  justify-content: center;
`;
export const WelComeLogo = styled.Image`
  width: 200px;
  height: 200px;
`;
export const BeginConfig = styled.View`
  width: 100%;
  margin-bottom: 50px;
`;

export const Buttom = styled.TouchableHighlight`
  width: ${props => props.width || 'auto'};
  background-color: ${props => props.color || '#ccc'};
  padding: 15px 30px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

export const TextButtom = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
