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
  TabBarIOS,
  Linking,
  WebView
} from 'react-native';

import Header from '../Header';
import SportIcon from '../SportIcon';
import NavBar from '../NavBar';
import MenSports from '../MenSports';
import WomenSports from '../WomenSports';
import SportTabBar from '../SportTabBar';
import ThreeTabSlider from '../ThreeTabSlider';
import BaseballRoster from './BaseballRoster';
import TeamStats from '../TeamStats';
import Stats from '../Stats';
import Game from '../Game';
import Icon from 'react-native-vector-icons/Ionicons';

export default class BaseballPage extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    return(
      <View style = {{flex:1}}>

        <SportTabBar
          sport = "Baseball"
          previous = "men"
          page = {this}
        />

        <ThreeTabSlider
          games = {<Game index = '0'/>}
          roster = {<BaseballRoster />}
          stats = "baseball"
        />

      </View>

    );
  }
};


AppRegistry.registerComponent('BaseballPage', () => BaseballPage);
