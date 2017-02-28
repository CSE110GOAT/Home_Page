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

import Icon from 'react-native-vector-icons/Ionicons';
const myIcon = (<Icon name="rocket" size={30} color="#900" />)


const Dimensions = require('Dimensions');
const window = Dimensions.get('window');


export default class NavBar extends Component{
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'home',
    };
  }
   render() {
    return (
      <TabBarIOS
        barTintColor = "white"
        tintColor= "black"
        unselectedItemTintColor = "black"
        translucent={true}
        itemPositioning = 'fill'
        >
        <Icon.TabBarItemIOS
          iconName="ios-home-outline"
          selectedIconName = "ios-home"

          />
          <Icon.TabBarItemIOS
            iconName="ios-basketball-outline"
            selectedIconName = "ios-basketball"
            />
            <Icon.TabBarItemIOS
             iconName="ios-people-outline"
             selectedIconName = "ios-people"
             />
          <Icon.TabBarItemIOS
            iconName="ios-information-circle-outline"
            selectedIconName = "ios-information-circle"
            />
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
