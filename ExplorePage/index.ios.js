'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Navigator,
  ListView
} from 'react-native';

import Header from './Header';
import SportIcon from './SportIcon';
import NavBar from './NavBar';
import MenSports from './MenSports';
import WomenSports from './WomenSports';
import Explore from './Explore';

import BaseballPage from './MSportPages/BaseballPage';
import MenBasketball from './MSportPages/MenBasketball';
import MenXC from './MSportPages/MenXC';
import MenFencing from './MSportPages/MenFencing';
import Golf from './MSportPages/Golf';
import MenRowing from './MSportPages/MenRowing';
import MenSoccer from './MSportPages/MenSoccer';
import MenSD from './MSportPages/MenSD';
import MenTennis from './MSportPages/MenTennis';
import MenTF from './MSportPages/MenTF';
import MenVolleyball from './MSportPages/MenVolleyball';
import MenWP from './MSportPages/MenWP';

import WomenBasketball from './WSportPages/WomenBasketball';
import WomenXC from './WSportPages/WomenXC';
import WomenFencing from './WSportPages/WomenFencing';
import WomenRowing from './WSportPages/WomenRowing';
import WomenSoccer from './WSportPages/WomenSoccer';
import Softball from './WSportPages/Softball';
import WomenSwimming from './WSportPages/WomenSwimming';
import WomenTennis from './WSportPages/WomenTennis';
import WomenTrack from './WSportPages/WomenTrack';
import WomenVolleyball from './WSportPages/WomenVolleyball';
import WomenWaterPolo from './WSportPages/WomenWaterPolo';

import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBZDWWw9oGKK9HR-_6zn3_6D8NWwVu39Fw",
  authDomain: "goatbackend110.firebaseapp.com",
  databaseURL: "https://goatbackend110.firebaseio.com",
  storageBucket: "goatbackend110.appspot.com",
  messagingSenderId: "827020053197"
};

firebase.initializeApp(config);

export default class PracticeProject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };

    this.itemsRef = firebase.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render () {
    return (
      <Navigator
        initialRoute = {{id:'explore'}}
        renderScene = {(route, navigator) => {
          this._navigator = navigator;
          switch (route.id) {
            case 'explore':
              return (<Explore navigator = {navigator} title = "explore" />);
            case 'men':
              return (<MenSports navigator = {navigator} title = "men" />);
            case 'women':
              return (<WomenSports navigator = {navigator} title = "women" />);

            case 'baseball':
              return (<BaseballPage navigator = {navigator} title = "baseball" />);
            case 'MBasketball':
              return (<MenBasketball navigator = {navigator} title = "MBasketball" />);
            case 'MenXC':
              return (<MenXC navigator = {navigator} title = "MenXC" />);
            case 'MFencing':
              return (<MenFencing navigator = {navigator} title = "MFencing" />);
            case 'Golf':
              return (<Golf navigator = {navigator} title = "Golf" />);
            case 'MRowing':
              return (<MenRowing navigator = {navigator} title = "MRowing" />);
            case 'MSoccer':
              return (<MenSoccer navigator = {navigator} title = "MSoccer" />);
            case 'MSD':
              return (<MenSD navigator = {navigator} title = "MSD" />);
            case 'MTennis':
              return (<MenTennis navigator = {navigator} title = "MTennis" />);
            case 'MTF':
              return (<MenTF navigator = {navigator} title = "MTF" />);
            case 'MVolleyball':
              return (<MenVolleyball navigator = {navigator} title = "MVolleyball" />);
            case 'MWP':
              return (<MenWP navigator = {navigator} title = "MWP" />);

            case 'WBasketball':
              return (<WomenBasketball navigator = {navigator} title = "WBasketball" />);
            case 'WomenXC':
              return (<WomenXC navigator = {navigator} title = "WomenXC" />);
            case 'WFencing':
              return (<WomenFencing navigator = {navigator} title = "WFencing" />);
            case 'WRowing':
              return (<WomenRowing navigator = {navigator} title = "WRowing" />);
            case 'WSoccer':
              return (<WomenSoccer navigator = {navigator} title = "WSoccer" />);
            case 'Softball':
              return (<Softball navigator = {navigator} title = "Softball" />);
            case 'WSwimming':
              return (<WomenSwimming navigator = {navigator} title = "WSwimming" />);
            case 'WTennis':
              return (<WomenTennis navigator = {navigator} title = "WTennis" />);
            case 'WTrack':
              return (<WomenTrack navigator = {navigator} title = "WTrack" />);
            case 'WVolleyball':
              return (<WomenVolleyball navigator = {navigator} title = "WVolleyball" />);
            case 'WWaterPolo':
              return (<WomenWaterPolo navigator = {navigator} title = "WWaterPolo" />);
          }
        }}
    />);
  }
};

AppRegistry.registerComponent('PracticeProject', () => PracticeProject);
