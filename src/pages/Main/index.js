import React, {Component} from 'react';

import {Card, ScrollView} from './styles';
import Header from '../../Components/Header';
import Circular from '../../Components/Circular';
import CardHeader from '../../Components/Information/CardHeader';
import Graph from '../../Components/Information/Graph';
import Map from '../../Components/Map';

export default class Main extends Component {
  render() {
    return (
      <ScrollView>
        <Header />
        <Circular />
        <Card>
          <CardHeader />
          <Graph />
        </Card>
        <Card>
          <Map></Map>
        </Card>
      </ScrollView>
    );
  }
}
