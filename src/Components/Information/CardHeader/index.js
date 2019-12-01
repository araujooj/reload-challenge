import React, {Component} from 'react';

import {Container, Text, Icon, Routes, Running, Time} from './styles';
import routesicon from '../../../assets/routes-icon.png';
import timeicon from '../../../assets/clock.png'
import runningicon from '../../../assets/running-icon.png';
export default class CardHeader extends Component {
  render() {
    return (
      <Container>
        <Icon>
          <Routes source ={routesicon}/>
          <Text>10kms</Text>
        </Icon>
        <Icon>
          <Time source = {timeicon}/>
          <Text>38min</Text>
        </Icon>
        <Icon>
        <Time source = {runningicon}/>
          <Text>4:50/KM</Text>
        </Icon>
      </Container>
    );
  }
}
