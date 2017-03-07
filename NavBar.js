'use strict';

import React, { Component } from 'react'
import ReactNative from 'react-native'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  Navigator
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
const myIcon = (<Icon name="rocket" size={30} color="#900" />)

import Indiv from './Indiv'
import MyScene from './MyScene'
import HomeNav from './HomeNav'
import Explore from './Explore'
import Social from './Social'
import News from './News'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');


export default class NavBar extends Component{

    state = {
      selectedTab: 'home'
    };

   render() {
    return (
      <TabBarIOS
        barTintColor = "white"
        tintColor= "black"
        unselectedItemTintColor = "black"
         >
          <Icon.TabBarItemIOS
            iconName="ios-home-outline"
            selectedIconName = "ios-home"
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
          }}>
          {<HomeNav/>}
          </Icon.TabBarItemIOS>

          <Icon.TabBarItemIOS
            iconName="ios-basketball-outline"
            selectedIconName = "ios-basketball"
            selected={this.state.selectedTab === 'explore'}
            onPress={() => {
            this.setState({
              selectedTab: 'explore',
            });
          }}>
          {<Explore/>}
          </Icon.TabBarItemIOS>

          <Icon.TabBarItemIOS
            iconName="ios-people-outline"
            selectedIconName = "ios-people"
            selected={this.state.selectedTab === 'social'}
            onPress={() => {
            this.setState({
              selectedTab: 'social',
            });
          }}>
          {<StripeIntegration/>}
          </Icon.TabBarItemIOS>

          <Icon.TabBarItemIOS
            iconName="ios-information-circle-outline"
            selectedIconName = "ios-information-circle"
            selected={this.state.selectedTab === 'news'}
            onPress={() => {
            this.setState({
              selectedTab: 'news',
            });
          }}>
          {<News/>}
          </Icon.TabBarItemIOS>
        </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  bar:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: window.width/3
  },
  home_icon:{
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderColor: 'gainsboro',
    borderTopWidth: 0.5,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  home_pic:{
    width: 20,
    height: 20
    }
});

AppRegistry.registerComponent('NavBar', () => NavBar);
