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
import WWaterPoloRoster from './WRosters/WWaterPoloRoster';

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

        <Slider
          games = "Games will go here"
          roster = {<WWaterPoloRoster/>}
          stats = "Stats will go here"
        />

      </View>
    );
  }
}

AppRegistry.registerComponent('WomenWaterPolo', () => WomenWaterPolo);
