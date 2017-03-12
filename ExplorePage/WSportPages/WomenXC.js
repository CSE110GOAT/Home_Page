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
import WXCRoster from './WRosters/WXCRoster'

export default class WomenXC extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style = {{flex: 1}}>

        <SportTabBar
          sport = "Cross Country"
          previous = "women"
          page = {this}
        />

        <TwoTabSlider
          games = "Games will go here"
          roster = {<WXCRoster/>}
        />

      </View>
    );
  }
}

AppRegistry.registerComponent('WomenXC', () => WomenXC);
