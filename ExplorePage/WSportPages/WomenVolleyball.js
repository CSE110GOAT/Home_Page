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
import WVolleyballRoster from './WRosters/WVolleyballRoster'

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

        <Slider
          games = "Women Volleyball Games will go here"
          roster = {<WVolleyballRoster/>}
          stats = "Women Volleyball stats will go here"
        />

      </View>
    );
  }
}

AppRegistry.registerComponent('WomenVolleyball', () => WomenVolleyball);
