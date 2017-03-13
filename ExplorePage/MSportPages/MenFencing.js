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
import TwoTabSlider from '../TwoTabSlider';
import MFencingRoster from './MFencingRoster';
import Game from '../Game';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MenFencing extends Component {

  constructor() {
    super()
  }

  render() {
    return(
      <View style = {{flex:1}}>

        <SportTabBar
          sport = "Fencing"
          previous = "men"
          page = {this}
        />

        <TwoTabSlider
        games = {<Game index = '3'/>}
        roster = {<MFencingRoster />}/>
      </View>

    );
  }
};


AppRegistry.registerComponent('MenFencing', () => MenFencing);
