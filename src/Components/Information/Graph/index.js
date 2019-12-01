import React, {Component} from 'react';
import {LineChart} from 'react-native-chart-kit';

import {Container} from './styles';

export default class Graph extends Component {
  render() {
    return (
      <Container>
        <LineChart
          width={300}
          height={200}
          data={{
            labels: [
              Math.floor(Math.random() * 2).toFixed(2),
              Math.floor(Math.random() * 10).toFixed(2),
              Math.floor(Math.random() * 10).toFixed(2),
              Math.floor(Math.random() * 10).toFixed(2),
            ],
            datasets: [
              {
                data: [
                  Math.random() * 0,
                  Math.random() * 8,
                  Math.random() * 8,
                  Math.random() * 8,
                ],
              },
            ],
          }}
          xAxisLabel={'km/h'}
          yAxisSuffix={'km'}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(54, 216, 221, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#fff',
            },
          }}
          bezier
          style={{
            marginLeft: 4,
            borderRadius: 25,
            marginTop: 5,
          }}
        />
      </Container>
    );
  }
}
