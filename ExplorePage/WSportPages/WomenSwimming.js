import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  Navigator,
  TabBarIOS
} from 'react-native';

import NavBar from '../NavBar';
import SportTabBar from '../SportTabBar';
import TwoTabSlider from '../TwoTabSlider';
import WSwimmingRoster from './WRosters/WSwimmingRoster';
import Game from '../Game';

export default class WomenSwimming extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style = {{flex: 1}}>

        <SportTabBar
          sport = "Swimming & Diving"
          previous = "women"
          page = {this}
        />

        <TwoTabSlider
          games = {<Game index = '18' />}
          roster = {<WSwimmingRoster/>}
        />

      </View>
    );
  }
}

AppRegistry.registerComponent('WomenSwimming', () => WomenSwimming);
