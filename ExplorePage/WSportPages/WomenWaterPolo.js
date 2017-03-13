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
import WWaterPoloRoster from './WRosters/WWaterPoloRoster';
import Game from '../Game';

export default class WomenWaterPolo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style = {{flex: 1}}>

        <SportTabBar
          sport = "Water Polo"
          previous = "women"
          page = {this}
        />

        <ThreeTabSlider
          games = {<Game index = '22' />}
          roster = {<WWaterPoloRoster/>}
          stats = "WomenWaterPolo"
        />

      </View>
    );
  }
}

AppRegistry.registerComponent('WomenWaterPolo', () => WomenWaterPolo);
