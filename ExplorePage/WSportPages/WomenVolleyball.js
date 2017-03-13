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
import WVolleyballRoster from './WRosters/WVolleyballRoster';
import Game from '../Game';

export default class WomenVolleyBall extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style = {{flex: 1}}>

        <SportTabBar
          sport = "Volleyball"
          previous = "women"
          page = {this}
        />

        <ThreeTabSlider
          games = {<Game index = '21' />}
          roster = {<WVolleyballRoster/>}
          stats = "womenVolleyball"
        />

      </View>
    );
  }
}

AppRegistry.registerComponent('WomenVolleyball', () => WomenVolleyball);
