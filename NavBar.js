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

export default class NavBar extends Component{
  state = {
      selectedTab : 'homePage',
      notifCount: 0,
      presses: 0,
    };
   render() {
    return (
      <TabBarIOS
        barTintColor = "snow"
        tintColor= "snow"
        unselectedItemTintColor = "black"
        translucent={true}>

        <TabBarIOS.Item
          icon = {require('./home_bar_icons/home.png')}
          renderAsOriginal
          selected = {this.state.selectedTab === 'homePage'}
          onPress ={()=> {
              this.setState({
                selectedTab:'homePage',
              });
           }}>
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  bar:{
    flexDirection: 'row',
    flex: 1,
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
