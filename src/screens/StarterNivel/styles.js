import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  border: none;
  align-items: center;
  background-color: #fff;
  margin-left: 30px;
  margin-right: 30px;
`;

export const HeaderText = styled.Text`
  font-size: 18px;
  color: #333;
  margin: 30px 0 20px;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const BoldText = styled.Text`
  font-weight: bold;
  margin: 30px 0 20px;
`;

export const DaysArea = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const NextButton = styled.Button``;

export const DefaultButtom = styled.TouchableHighlight`
  width: ${props => `${props.width}%` || 'auto'};
  background-color: ${props => props.color || '#ccc'};
  padding: 15px 30px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  margin: 20px 20px 0 0;
`;

export const Lottie = styled.View`
  width: 400px;
  height: 400px;
  padding: 30px 10px;
`;
