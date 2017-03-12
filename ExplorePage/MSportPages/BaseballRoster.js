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
import Slider from '../Slider.js';
import BaseballPage from './BaseballPage.js';
import RosterIcon from '../RosterIcon.js';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class BaseballRoster extends Component {

  render() {
    return (

        <View style = {{flex: 1, marginTop: 10}}>


        <View style = {{flex:1, flexDirection: 'row'}}>
          <TouchableHighlight>
            <View>
              <RosterIcon pic = "https://goatbackend110.appspot.com/static/rosters/0/0.png"/>
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View>
              <RosterIcon pic = "https://goatbackend110.appspot.com/static/rosters/0/1.png"/>
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View>
              <RosterIcon pic = "https://goatbackend110.appspot.com/static/rosters/0/2.png"/>
            </View>
          </TouchableHighlight>
        </View>

        </View>

    );
  }
};

AppRegistry.registerComponent('BaseballRoster', () => BaseballRoster);
