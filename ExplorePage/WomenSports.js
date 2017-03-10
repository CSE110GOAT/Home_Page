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
  TouchableHighlight,
  TabBarIOS
} from 'react-native';

import Header from './Header';
import SportIcon from './SportIcon';
import NavBar from './NavBar';
import Explore from './Explore';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

import Icon from 'react-native-vector-icons/Ionicons';

export default class WomenSports extends Component {
  navWomenBasketball() {
    this.props.navigator.push({
      id: 'WBasketball'
    })
  }

  navWomenXC() {
    this.props.navigator.push({
      id: 'WomenXC'
    })
  }

  navWomenFencing() {
    this.props.navigator.push({
      id: 'WFencing'
    })
  }

  navWomenRowing() {
    this.props.navigator.push({
      id: 'WRowing'
    })
  }

  navWomenSoccer() {
    this.props.navigator.push({
      id: 'WSoccer'
    })
  }

  navSoftball() {
    this.props.navigator.push({
      id: 'Softball'
    })
  }

  navWomenSwimming() {
    this.props.navigator.push({
      id: 'WSwimming'
    })
  }

  navWomenTennis() {
    this.props.navigator.push({
      id: 'WTennis'
    })
  }

  navWomenTrack() {
    this.props.navigator.push({
      id: 'WTrack'
    })
  }

  navWomenVolleyball() {
    this.props.navigator.push({
      id: 'WVolleyball'
    })
  }

  navWomenWaterPolo() {
    this.props.navigator.push({
      id: 'WWaterPolo'
    })
  }

  navBack () {
    this.props.navigator.pop({
      id: 'explore'
    })
  }

  render () {
    return (
      <View style={{flex: 1}}>

        <View>
            <Header />
        </View>

        <View style = {styles.topBar}>
          <TouchableHighlight
            onPress = {this.navBack.bind(this)}
            underlayColor = 'white'
          >
            <Image
              source = {require('./Back-50.png')}
              style = {styles.pic}
            />
          </TouchableHighlight>

          <View style = {styles.banner}>
            <Text style = {styles.title}> WOMEN'S SPORTS </Text>
          </View>
        </View>


        <View style = {{flexDirection: 'row'}}>
          <TouchableHighlight onPress = {this.navWomenBasketball.bind(this)}>
            <View>
              <SportIcon
                pic={require('./sport_icons/basketball.png')}
                sport='Basketball'
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress = {this.navWomenXC.bind(this)}>
            <View>
              <SportIcon
                pic={require('./sport_icons/cross_country.png')}
                sport='Cross Country'
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress = {this.navWomenFencing.bind(this)}>
            <View>
              <SportIcon
                pic={require('./sport_icons/fencing.png')}
                sport='Fencing'
              />
            </View>
          </TouchableHighlight>
        </View>


        <View style = {{flexDirection: 'row'}}>
          <TouchableHighlight onPress = {this.navWomenRowing.bind(this)}>
            <View>
              <SportIcon
                pic={require('./sport_icons/rowing.png')}
                sport='Rowing'
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress = {this.navWomenSoccer.bind(this)}>
            <View>
              <SportIcon
                pic={require('./sport_icons/soccer.png')}
                sport='Soccer'
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress = {this.navSoftball.bind(this)}>
            <View>
              <SportIcon
                pic={require('./sport_icons/softball.png')}
                sport='Softball'
              />
            </View>
          </TouchableHighlight>
        </View>


        <View style = {{flexDirection: 'row'}}>
          <TouchableHighlight onPress = {this.navWomenSwimming.bind(this)}>
            <View>
              <SportIcon
                pic={require('./sport_icons/swimming.png')}
                sport='Swimming & Diving'
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress = {this.navWomenTennis.bind(this)}>
            <View>
              <SportIcon
                pic={require('./sport_icons/tennis.png')}
                sport='Tennis'
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress = {this.navWomenTrack.bind(this)}>
            <View>
              <SportIcon
                pic={require('./sport_icons/track.png')}
                sport='Track & Field'
              />
            </View>
          </TouchableHighlight>
        </View>

        <View style = {{flexDirection: 'row'}}>
          <TouchableHighlight onPress = {this.navWomenVolleyball.bind(this)}>
            <View>
              <SportIcon
                pic={require('./sport_icons/volleyball.png')}
                sport='Volleyball'
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress = {this.navWomenWaterPolo.bind(this)}>
            <View>
              <SportIcon
                pic={require('./sport_icons/water_polo.png')}
                sport='Water Polo'
              />
              </View>
            </TouchableHighlight>
          <View style={[styles.sport_icon, {borderBottomWidth: 0}]}>
          </View>

        </View>

        <NavBar />

      </View>
    );
  }
};

const styles = StyleSheet.create({
  banner: {
    width: 320,
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
    marginTop: 8,
    marginBottom: 8,
    paddingRight: 60

  },

  sport_icon: {
    width: window.width/3,
    height: window.width/3,
    backgroundColor: 'white',
    borderColor: 'gainsboro',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRightWidth: 0,
    borderTopWidth: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  topBar: {
    flexDirection: 'row',
    width: window.width,
    borderWidth: 0.5,
    borderColor: 'gainsboro',
    backgroundColor: 'white'
  },

  title: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    marginLeft: 37
  },

  pic: {
    width: 25,
    height: 25,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 0
  }
});

AppRegistry.registerComponent('WomenSports', () => WomenSports);
