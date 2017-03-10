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

import Header from './Header';
import SportIcon from './SportIcon';
import NavBar from './NavBar';
import MenSports from './MenSports';
import WomenSports from './WomenSports';
import SportTabBar from './SportTabBar';
import Slider from './Slider.js';
import BaseballRoster from './BaseballRoster';
import TeamStats from './TeamStats';
import Article from '../NewsPage_2/Article';

import Icon from 'react-native-vector-icons/Ionicons';

export default class BaseballPage extends Component {

  constructor() {
    super()

  }

  render() {
    return(
      <View style = {{flex:1}}>

        <SportTabBar
          sport = "Baseball"
          previous = "men"
          page = {this}
        />

        <Slider games = "hi" roster = "http://www.ucsdtritons.com/SportSelect.dbml?&DB_OEM_ID=5800&SPID=2331&SPSID=29814"
        stats = "hope it works" />

      </View>

    );
  }
};


AppRegistry.registerComponent('BaseballPage', () => BaseballPage);
