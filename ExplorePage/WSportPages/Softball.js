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
import SoftballRoster from './WRosters/SoftballRoster'

export default class Softball extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style = {{flex: 1}}>

        <SportTabBar
          sport = "Softball"
          previous = "women"
          page = {this}
        />

        <Slider
          games = "Games will go here"
          roster = {<SoftballRoster/>}
          stats = "Stats will go here"
        />

      </View>
    );
  }
}

AppRegistry.registerComponent('Softball', () => Softball);
