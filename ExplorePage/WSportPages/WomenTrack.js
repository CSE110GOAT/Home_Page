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
import WTrackRoster from './WRosters/WTrackRoster'

export default class WomenTrack extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style = {{flex: 1}}>

        <SportTabBar
          sport = "Track & Field"
          previous = "women"
          page = {this}
        />

        <Slider
          games = "Track and Field Meets will go here"
          roster = {<WTrackRoster/>}
          stats = "Track and Field Stats will go here"
        />

      </View>
    );
  }
}

AppRegistry.registerComponent('WomenTrack', () => WomenTrack);
