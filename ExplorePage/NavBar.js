'use strict';

import React, { Component } from 'react'
import ReactNative from 'react-native'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS
} from 'react-native'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class NavBar extends Component {
  render() {
    return(
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end'
      }}>
        <View style={styles.home_icon}>
          <Image
          source={require('./home_bar_icons/home.png')}
          style={styles.home_pic}
          />
        </View>

        <View style={styles.home_icon}>
          <Image
          source={require('./home_bar_icons/magnifying_glass.png')}
          style={styles.home_pic}
          />
        </View>

        <View style={styles.home_icon}>
          <Image
          source={require('./home_bar_icons/social.png')}
          style={styles.home_pic}
          />
        </View>

        <View style={styles.home_icon}>
          <Image
          source={require('./home_bar_icons/news.png')}
          style={styles.home_pic}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home_icon: {
    width: window.width/4,
    height: window.width/4 - 45,
    backgroundColor: 'white',
    borderColor: 'gainsboro',
    borderTopWidth: 0.5,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    justifyContent: 'center'
  },
  home_pic: {
    width: window.width/4 - 60,
    height: window.width/4 - 60,
    alignSelf: 'center'
  }
});

AppRegistry.registerComponent('NavBar', () => NavBar);
