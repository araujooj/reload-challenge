import React from 'react';
import {View, } from 'react-native';

import {
  Container,
  Top,
  Logo,
  Chat,
  User,
  Arrow,
  Box,
  Running,
  Connected,
  Text,
  Fitbit
} from './styles';

import chat from '../../assets/chat_icon.png';
import logo from '../../assets/grupo-73.png';
import user from '../../assets/94.jpg';
import arrow from '../../assets/layer-2.png';
import running from '../../assets/running.png';
import fitbit from '../../assets/fitbit.png'

export default function Header() {
  return (
    <View>
      <Container>
        <Top>
          <User source={user} />
          <Logo source={logo} />
          <Chat source={chat} />
        </Top>
      </Container>

      <Box>
        <Arrow source={arrow} />
        <Running source={running} />
        <Connected>
          <Text>Connected</Text>
        </Connected>
        <Fitbit source = {fitbit}/>
      </Box>
    </View>
  );
}
