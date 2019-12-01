import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  padding-top: 10px;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Box = styled.View`
  height: 50px;
  flex-direction: row;
  background: #ffffff;
  margin-top: 6%;
  border-style: solid;
  border-color: #f4f5f8;
  border-width: 2.5px;
  border-right-width: 0;
  border-left-width: 0;
  border-radius: 10
`;
export const Text = styled.Text`
margin-top: 3%
  color: #A6B2BD
  font-size: 14px
`;

export const Connected = styled.View`
margin-top: 3%
width: 25%
height: 45%
margin-left: 17%
border-style: solid;
border-color:#A6B2BD;
border-width: 1px;
border-radius: 100
align-items: center;
`;
export const Arrow = styled.Image`
  margin-top: 3%
  margin-left: 5%
`;
export const Running = styled.Image`
margin-top: 4%
  margin-left: 4%
`;
export const Logo = styled.Image`
  width: 100;
`;

export const Chat = styled.Image`
  width: 35;
  height: 35;
  margin-left: 20%;
`;

export const User = styled.Image`
  border-radius: 100;
  width: 40;
  height: 40;
  margin-right: 20%;
  border-color: #f4f4f5;
  border-width: 2px;

`;

export const Fitbit = styled.Image`
  margin-left: 3%;
  margin-top: 4%;
  width: 20%;
  height: 30%;
`;
