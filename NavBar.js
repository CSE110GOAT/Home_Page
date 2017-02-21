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
      selectedTab: 'homePage',
      notifCount: 0,
      presses: 0,
    };

    _function = () => {
      return (
        <View></View>
      );
    };


   render() {
    return (
      <TabBarIOS
        barTintColor = "white"
        tintColor= "black"
        unselectedItemTintColor = "black"
        style = {styles.bar}
        >

        <TabBarIOS.Item
        style={styles.home_pic}
        icon = {require('./home_bar_icons/home.png')}
        renderAsOriginal
        selected = {this.state.selectedTab === 'homePage'}
        onPress ={()=> {
            this.setState({
              selectedTab:'homePage',
            });
         }}>
         {this._function()}
        </TabBarIOS.Item>


        <TabBarIOS.Item
        style={styles.home_pic}
        icon = {require('./home_bar_icons/magnifying_glass.png')}
        renderAsOriginal
        selected = {this.state.selectedTab === 'explorePage'}
        onPress ={()=> {
            this.setState({
              selectedTab:'explorePage',
            });
         }}>
        {this._function()}
        </TabBarIOS.Item>



        <TabBarIOS.Item
        style={styles.home_pic}
        icon = {require('./home_bar_icons/news.png')}
        renderAsOriginal
        selected = {this.state.selectedTab === 'newsPage'}
        onPress ={()=> {
            this.setState({
              selectedTab:'newsPage',
            });
         }}>
         {this._function()}
        </TabBarIOS.Item>


        <TabBarIOS.Item
        style={styles.home_pic}
        icon = {require('./home_bar_icons/social.png')}
        renderAsOriginal
        selected = {this.state.selectedTab === 'socialPage'}
        onPress ={()=> {
            this.setState({
              selectedTab:'socialPage',
            });
         }}>
         {this._function()}
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
  },
tabContent: {
  flex: 1,
  alignItems: 'center',
},
tabText: {
  color: 'blue',
  margin: 50,
}
});

AppRegistry.registerComponent('NavBar', () => NavBar);
