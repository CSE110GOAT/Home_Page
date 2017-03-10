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

} from 'react-native';

import Header from './Header';
import SportIcon from './SportIcon';
import NavBar from './NavBar';
import Explore from './Explore'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

class SportPage extends Component {

  render () {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{
          marginBottom: window.width/4 - 45
        }}>

          <View style={styles.head}>
              <Header />
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <SportIcon
              pic={require('./sport_icons/baseball.png')}
              sport='Baseball'
            />

            <SportIcon
              pic={require('./sport_icons/basketball.png')}
              sport='Basketball'
            />
            <SportIcon
              pic={require('./sport_icons/cross_country.png')}
              sport='Cross Country'
            />
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <SportIcon
              pic={require('./sport_icons/fencing.png')}
              sport='Fencing'
            />
            <SportIcon
              pic={require('./sport_icons/golf.png')}
              sport='Golf'
            />
            <SportIcon
              pic={require('./sport_icons/rowing.png')}
              sport='Rowing'
            />
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <SportIcon
              pic={require('./sport_icons/soccer.png')}
              sport='Soccer'
            />
            <SportIcon
              pic={require('./sport_icons/softball.png')}
              sport='Softball'
            />
            <SportIcon
              pic={require('./sport_icons/swimming.png')}
              sport='Swimming & Diving'
            />
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <SportIcon
              pic={require('./sport_icons/tennis.png')}
              sport='Tennis'
            />
            <SportIcon
              pic={require('./sport_icons/track.png')}
              sport='Track & Field'
            />
            <SportIcon
              pic={require('./sport_icons/volleyball.png')}
              sport='Volleyball'
            />
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <SportIcon
              pic={require('./sport_icons/water_polo.png')}
              sport='Water Polo'
            />

            <View style={[styles.sport_icon, {borderBottomWidth: 0}]}>
            </View>
            <View style={styles.sport_icon, {borderTopWidth: 20}}>
            </View>
          </View>
        </ScrollView>

        <NavBar />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  head: {
    justifyContent: 'center',
    alignItems: 'center',
    width: window.width,
    height: 80,
    backgroundColor: '#00008b'
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
});

AppRegistry.registerComponent('SportPage', () => SportPage);
