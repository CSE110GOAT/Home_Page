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
import WBasketballRoster from './WRosters/WBasketballRoster';

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
/*
        <ThreeTabSlider
          games = "Games will go here"
          roster = {<WBasketballRoster/>}
          stats = "Stats will go here"
        />*/

      </View>
    );
  }
}

AppRegistry.registerComponent('WomenBasketball', () => WomenBasketball);
