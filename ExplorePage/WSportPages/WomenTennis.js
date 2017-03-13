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
import ThreeTabSlider from '../ThreeTabSlider';
import WTennisRoster from './WRosters/WTennisRoster';
import Game from '../Game';

export default class WomenTennis extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style = {{flex: 1}}>

        <SportTabBar
          sport = "Tennis"
          previous = "women"
          page = {this}
        />

        <ThreeTabSlider
          games = {<Game index = '19' />}
          roster = {<WTennisRoster/>}
          stats = "womenSoccer"
        />

      </View>
    );
  }
}

AppRegistry.registerComponent('WomenTennis', () => WomenTennis);
