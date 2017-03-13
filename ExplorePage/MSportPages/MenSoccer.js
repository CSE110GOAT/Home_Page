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
import MSoccerRoster from './MSoccerRoster';
import Game from '../Game';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MenSoccer extends Component {

  constructor() {
    super()
  }

  render() {
    return(
      <View style = {{flex:1}}>

        <SportTabBar
          sport = "Soccer"
          previous = "men"
          page = {this}
        />

        <ThreeTabSlider
        games = {<Game index = '6'/>}
        roster = {<MSoccerRoster />}
        stats = "menSoccer" />

      </View>

    );
  }
};


AppRegistry.registerComponent('MenRowing', () => MenRowing);
