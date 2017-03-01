/**
 * Trial  React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  Navigator
} from 'react-native';
import MyScene from './MyScene'
import Game from './Game'
import Header from './Header'
import NavBar from './NavBar'
import Indiv from './Indiv'
import HomeNav from './HomeNav'
import Explore from './Explore'


export default class TrialProject extends Component {
  constructor(){
    super()
    this.state = {
      numGames: 0,
      onStart: true
    }
  }


  render() {
    return (
    <NavBar/> )
  }
}


AppRegistry.registerComponent('TrialProject', () => TrialProject);
