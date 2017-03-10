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

import Header from './Header';
import SportIcon from './SportIcon';
import NavBar from './NavBar';
import MenSports from './MenSports';
import WomenSports from './WomenSports';
import SportTabBar from './SportTabBar';
import Slider from './Slider.js';
import BaseballRoster from './BaseballRoster';

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

        <Slider games = "hi" roster = {<BaseballRoster/>} stats = "hope this works" />

      </View>

    );
  }
};

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('BaseballPage', () => BaseballPage);
