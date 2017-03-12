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
import ThreeTabSlider from '../ThreeTabSlider.js';
import MBasketballRoster from './MBasketballRoster';

import Icon from 'react-native-vector-icons/Ionicons';

export default class MenBasketball extends Component {

  constructor() {
    super()
  }

  render() {
    return(
      <View style = {{flex:1}}>

        <SportTabBar
          sport = "Basketball"
          previous = "men"
          page = {this}
        />

        <ThreeTabSlider games = "why is this not working"
        stats = "menBasketball"
        />

      </View>

    );
  }
};


AppRegistry.registerComponent('MBasketball', () => MBasketball);
