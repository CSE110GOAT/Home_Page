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

import MVolleyballRoster from './MVolleyballRoster';

import Icon from 'react-native-vector-icons/Ionicons';

export default class MenVolleyball extends Component {

  constructor() {
    super()
  }

  render() {
    return(
      <View style = {{flex:1}}>

        <SportTabBar
          sport = "Volleyball"
          previous = "men"
          page = {this}
        />


      </View>

    );
  }
};


AppRegistry.registerComponent('MenVolleyball', () => MenVolleyball);
