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
import WTrackRoster from './WRosters/WTrackRoster';
import Game from '../Game';

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

        <TwoTabSlider
          games = {<Game index = '20' />}
          roster = {<WTrackRoster/>}
        />

      </View>
    );
  }
}

AppRegistry.registerComponent('WomenTrack', () => WomenTrack);
