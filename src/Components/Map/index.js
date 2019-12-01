import React, {Component} from 'react';

import {View, StyleSheet} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';

import BYCICLE from '../../assets/invalid-name.png';
import car from '../../assets/noun-driving-2750433.png';
import fitbit from '../../assets/fitbit.png';
import running from '../../assets/running-icon2323.png';
import {
  MapFooter,
  MapHeader,
  Text,
  Connected,
  Fitbit,
  Icon,
  Title,
  Bycicle,
  Car,
  CircleBike,
  CircleCar,
  CircleRunning,
  Running
} from './styles';

export default class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}>
          <Polyline
            coordinates={[
              {latitude: 37.8025259, longitude: -122.4351431},
              {latitude: 37.7896386, longitude: -122.421646},
              {latitude: 37.7665248, longitude: -122.4161629},
              {latitude: 37.7734153, longitude: -122.4577787},
            ]}
            strokeColor="#465BDE" // fallback for when `strokeColors` is not supported by the map-provider
            strokeWidth={4}
            lineJoin="round"
            lineCap="round"
          />
          <Polyline
            coordinates={[
              {latitude: 37.8003745, longitude: -122.4183052},
              {latitude: 37.750363, longitude: -122.421646},
              {latitude: 37.7734153, longitude: -122.4577787},
            ]}
            strokeColor="#369ADA" // fallback for when `strokeColors` is not supported by the map-provider
            strokeWidth={4}
            lineJoin="round"
            lineCap="round"
          />
          <Polyline
            coordinates={[
              {latitude: 37.7951327, longitude: -122.398717},
              {latitude: 37.8019194, longitude: -122.4049389},
              {latitude: 37.7688719, longitude: -122.390039},
              {latitude: 37.7635478, longitude: -122.3983944},
            ]}
            strokeColor="#16D4D8" // fallback for when `strokeColors` is not supported by the map-provider
            strokeWidth={4}
            lineJoin="round"
            lineCap="round"
          />
        </MapView>

        <LinearGradient
          colors={[
            'rgba(76,102,159, 0.4)',
            'rgba(255,255,255, 0.4)',
            'rgba(25,47,106, 0.5)',
          ]}
          style={styles.linearGradient}>
          <MapHeader>
            <Title>Trips and travels</Title>
            <Connected>
              <Title>Connected</Title>
            </Connected>
            <Fitbit source={fitbit} />
          </MapHeader>
          <MapFooter>
            <Icon>
              <CircleRunning>
                <Running source = {running}></Running>
              </CircleRunning>
              <Text>RUNNING{'\n'} 8.6 hours</Text>
            </Icon>
            <Icon>
              <CircleBike>
                <Bycicle source={BYCICLE} />
              </CircleBike>

              <Text> BYCICLE{'\n'} 1.1 hours</Text>
            </Icon>
            <Icon>
              <CircleCar>
                <Car source={car} />
              </CircleCar>

              <Text> TRAVEL{'\n'}39 minutes</Text>
            </Icon>
          </MapFooter>
        </LinearGradient>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  map: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    height: 1,
    borderRadius: 5,
  },
});
