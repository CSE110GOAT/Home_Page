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

import Header from '../Header';
import SportIcon from '../SportIcon';
import NavBar from '../NavBar';
import MenSports from '../MenSports';
import WomenSports from '../WomenSports';
import SportTabBar from '../SportTabBar';
import ThreeTabSlider from '../ThreeTabSlider';
import MTennisRoster from './MTennisRoster';
import Game from '../Game';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MenTennis extends Component {

  constructor() {
    super()
  }

  render() {
    return(
      <View style = {{flex:1}}>

        <SportTabBar
          sport = "Tennis"
          previous = "men"
          page = {this}
        />

        <ThreeTabSlider
        games = {<Game index = '8'/>}
        roster = {<MTennisRoster />}
        stats = "menTennis" />

      </View>

    );
  }
};


AppRegistry.registerComponent('MenTennis', () => MenTennis);
