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
import TwoTabSlider from '../TwoTabSlider'
import WFencingRoster from './WRosters/WFencingRoster'
import Game from '../Game';

export default class WomenFencing extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style = {{flex: 1}}>

        <SportTabBar
          sport = "Fencing"
          previous = "women"
          page = {this}
        />

        <TwoTabSlider
          games = {<Game index = '14' />}
          roster = {<WFencingRoster/>}
        />

      </View>
    );
  }
}

AppRegistry.registerComponent('WomenFencing', () => WomenFencing);
