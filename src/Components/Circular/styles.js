import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

export const Circle = styled.View`
  width: 100px;
  height: 100px; 
  border-radius: 100
  border-width: 2px;
  border-left-width: 0.1px;
  border-top-width: 0.1px;
  border-style: solid;
  margin: 2%
  align-items: center;
  border-right-color: #4266DE
  border-bottom-color: #26A7DA
  border-top-color:#4266DE
  border-left-color: #000

`;

export const Text = styled.Text`
margin-top: 6%
  color: #A6B2BD
  font-size: 11px
`;

export const Title = styled.Text`
margin-top: 3%
  color: #A6B2BD
  font-size: 20px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
margin-top: 3%
  color: #A6B2BD
  font-size: 14px
`;
