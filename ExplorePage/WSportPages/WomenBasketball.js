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
import WBasketballRoster from './WRosters/WBasketballRoster';
import Game from '../Game';

export default class WomenBasketball extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style = {{flex:1}}>

        <SportTabBar
          sport = "Basketball"
          previous = "women"
          page = {this}
        />

        <ThreeTabSlider
          games = {<Game index = '12' />}
          roster = {<WBasketballRoster/>}
          stats = "womenBasketball"
        />

      </View>
    );
  }
}

AppRegistry.registerComponent('WomenBasketball', () => WomenBasketball);
