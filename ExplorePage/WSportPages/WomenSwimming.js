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
import Slider from '../Slider.js';
import WSwimmingRoster from './WRosters/WSwimmingRoster'

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

        <Slider
          games = "Swim Meets will go here"
          roster = {<WSwimmingRoster/>}
          stats = "Swim Team stats will go here"
        />

      </View>
    );
  }
}

AppRegistry.registerComponent('WomenSwimming', () => WomenSwimming);
