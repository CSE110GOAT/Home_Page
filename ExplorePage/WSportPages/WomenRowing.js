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
import WRowingRoster from './WRosters/WRowingRoster';

export default class WomenRowing extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style = {{flex: 1}}>

        <SportTabBar
          sport = "Rowing"
          previous = "women"
          page = {this}
        />

        <TwoTabSlider
          games = "Games will go here"
          roster = {<WRowingRoster/>}
        />

      </View>
    );
  }
}

AppRegistry.registerComponent('WomenRowing', () => WomenRowing);
