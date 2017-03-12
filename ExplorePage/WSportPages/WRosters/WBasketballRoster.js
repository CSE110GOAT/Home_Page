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
  TabBarIOS,
  JSON
} from 'react-native';

import RosterIcon from '../../RosterIcon.js';
//import RawRoster from '../../../static/rosters.json';

export default class WBasketballRoster extends Component {

  getNameFromRosterFile() {
    return fetch("https://goatbackend.appspot.com/rosters/roster.json")
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson["rosters"]["0"];
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
        <View style = {styles.overall_page}>
          <View style = {[styles.roster_row, {borderTopWidth: 0.5}]}>
            <TouchableHighlight>
              <View style = {styles.begin_row}>
                <RosterIcon
                  name = {this.getNameFromRosterFile()[0]}
                  pic = ''
                />
              </View>
            </TouchableHighlight>

            <TouchableHighlight>
              <View>
                <RosterIcon />
              </View>
            </TouchableHighlight>

            <TouchableHighlight>
              <View style = {styles.end_of_row}>
                <RosterIcon />
              </View>
            </TouchableHighlight>
          </View>

        </View>
    );
  }
};

const styles = StyleSheet.create({
  overall_page: {
    flex: 1,
    marginTop: 10
  },

  roster_row: {
    flexDirection: 'row',
  },

  begin_row: {
    borderRightWidth: 0
  },

  end_of_row: {
    borderLeftWidth: 0
  },
});

AppRegistry.registerComponent('WBasketballRoster', () => WBasketballRoster);
