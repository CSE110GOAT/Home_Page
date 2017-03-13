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
import MWPRoster from './MWPRoster';

import Icon from 'react-native-vector-icons/Ionicons';

export default class MenWP extends Component {

  constructor() {
    super()
  }

  render() {
    return(
      <View style = {{flex:1}}>

        <SportTabBar
          sport = "Water Polo"
          previous = "men"
          page = {this}
        />

        <ThreeTabSlider
        roster = {<MWPRoster />}
        stats = "menWaterPolo" />

      </View>

    );
  }
};


AppRegistry.registerComponent('MenWP', () => MenWP);
