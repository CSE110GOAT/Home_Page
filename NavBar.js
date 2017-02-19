'use strict';

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class NavBar extends Component{
  constructor(){
    super()
  }
  render() {
    return (
      <View style = {styles.bar}>
        <View style = {styles.home_icon}>
          <Image
          source = {require('./home_bar_icons/home.png')}
          style = {styles.home_pic}
          />
        </View>

        <View style = {styles.home_icon}>
          <Image
          source = {require('./home_bar_icons/magnifying_glass.png')}
          style = {styles.home_pic}
          />
        </View>

      <View style = {styles.home_icon}>
        <Image
        source = {require('./home_bar_icons/social.png')}
        style = {styles.home_pic}
        />
      </View>
      <View style = {styles.home_icon}>
        <Image
        source = {require('./home_bar_icons/news.png')}
        style = {styles.home_pic}
        />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bar:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  home_icon:{
    width: window.width/4,
    height: window.width/4 - 60,
    backgroundColor: 'white',
    borderColor: 'gainsboro',
    borderTopWidth: 0.5,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    justifyContent: 'center'
  },
  home_pic:{
    width: window.width/4 - 60,
    height: window.width/4 - 60,
    alignSelf: 'center'
    }
});

AppRegistry.registerComponent('NavBar', () => NavBar);
