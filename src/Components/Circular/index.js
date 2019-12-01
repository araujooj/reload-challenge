import React, {Component} from 'react';

import {Container, Text, Circle, Title, Subtitle} from './styles';

export default class Circular extends Component {
  render() {
    return (
      <Container>
        <Circle>
          <Text>Ran</Text>
          <Title>5.1</Title>
          <Subtitle>Miles</Subtitle>
        </Circle>

        <Circle>
          <Text>Pace</Text>
          <Title>10.8</Title>
          <Subtitle>Min/mi</Subtitle>
        </Circle>
        <Circle>
          <Text>Max hr</Text>
          <Title>144</Title>
          <Subtitle>Bpm</Subtitle>
        </Circle>
      </Container>
    );
  }
}
