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
import MTFRoster from './MTFRoster';
import Game from '../Game';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MenTF extends Component {

  constructor() {
    super()
  }

  render() {
    return(
      <View style = {{flex:1}}>

        <SportTabBar
          sport = "Track & Field"
          previous = "men"
          page = {this}
        />

        <TwoTabSlider
        games = {<Game index = '9'/>}
        roster = {<MTFRoster />}/>

      </View>

    );
  }
};


AppRegistry.registerComponent('MenTF', () => MenTF);
