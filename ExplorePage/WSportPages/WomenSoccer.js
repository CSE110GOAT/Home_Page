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
import WSoccerRoster from './WRosters/WSoccerRoster'
import Game from '../Game'

export default class WomenSoccer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style = {{flex: 1}}>

        <SportTabBar
          sport = "Soccer"
          previous = "women"
          page = {this}
        />

        <ThreeTabSlider
          games = {<Game index = '16' />}
          roster = {<WSoccerRoster/>}
          stats = "womenSoccer"
        />

      </View>
    );
  }
}

AppRegistry.registerComponent('WomenSoccer', () => WomenSoccer);
