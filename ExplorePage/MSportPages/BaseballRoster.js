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
  TabBarIOS
} from 'react-native';

import RosterIcon from '../RosterIcon.js';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class BaseballRoster extends Component {

  constructor() {
    super()
    this.state = {
      size: 0,
      names: [],
      bioPage: []
    }

    { this.getRosterSize() }
  }

  getRosterSize() {
     fetch('https://goatbackend110.appspot.com/static/rosters.json')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            size: Object.keys(responseJson.rosters["0"]).length
          })

          for (var i = 0; i < this.state.size; i++) {
            this.setState({
              names: this.state.names.concat([
                responseJson.rosters["0"][i][0]
              ]),

              bioPage: this.state.bioPage.concat([
                responseJson.rosters["0"][i][6]
              ])
            })
          }
        })
        .catch((error) => {
          console.error(error);
        });
  }


  render() {
    var roster = []

    for (let i = 0; i < (this.state.size - (this.state.size % 3)); i += 3) {
      var url1 = "https://goatbackend110.appspot.com/static/rosters/0/" + i + ".png"
      var url2 = "https://goatbackend110.appspot.com/static/rosters/0/" + (i+1) + ".png"
      var url3 = "https://goatbackend110.appspot.com/static/rosters/0/" + (i+2) + ".png"

      roster.push(
        <View style = {styles.roster_row}>
          <TouchableHighlight >
            <View style = {styles.iconLeft}>
              <RosterIcon pic = {url1} name = {this.state.names[i]} />
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View style = {styles.icon}>
              <RosterIcon pic = {url2} name = {this.state.names[i+1]} />
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View style = {styles.iconRight}>
              <RosterIcon pic = {url3} name = {this.state.names[i+2]} />
            </View>
          </TouchableHighlight>
        </View>
      );
    }

    if (this.state.size % 3 != 0) {
      if (this.state.size % 3 == 1) {
        var url1 = "https://goatbackend110.appspot.com/static/rosters/0/" + (this.state.size - 1) + ".png"
        roster.push(
          <View style = {styles.roster_row}>
            <TouchableHighlight>
              <View style = {styles.iconLeft}>
                <RosterIcon pic = {url1} name = {this.state.names[(this.state.size - 1)]} />
              </View>
            </TouchableHighlight>
          </View>
        );
      }

      else {
        var url1 = "https://goatbackend110.appspot.com/static/rosters/0/" + (this.state.size - 2) + ".png"
        var url2 = "https://goatbackend110.appspot.com/static/rosters/0/" + (this.state.size - 1) + ".png"

        roster.push(
          <View style = {styles.roster_row}>
            <TouchableHighlight>
              <View style = {styles.iconLeft}>
                <RosterIcon pic = {url1} name = {this.state.names[(this.state.size - 2)]} />
              </View>
            </TouchableHighlight>

            <TouchableHighlight>
              <View style = {styles.icon}>
                <RosterIcon pic = {url2} name = {this.state.names[(this.state.size - 1)]} />
              </View>
            </TouchableHighlight>
          </View>
        );
      }
    }

    return (
      <View style = {styles.overall_page}>
        <ScrollView>
          { roster }
        </ScrollView>
      </View>

    );
  }
  };

  const styles = StyleSheet.create({
  overall_page: {
    flex: 1,
    marginTop: 10,
    paddingBottom: 50
  },

  roster_row: {
    flexDirection: 'row',
  },

  icon: {
    paddingBottom: 3,
  },

  iconLeft: {
    paddingRight: 3
  },

  iconRight: {
    paddingLeft: 3
  }

  });

AppRegistry.registerComponent('BaseballRoster', () => BaseballRoster);
