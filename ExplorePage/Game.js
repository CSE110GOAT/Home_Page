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


const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class Game extends Component {

  constructor() {
     super()
     this.state = {
       size: 0,
       date: [],
       opponent: [],
       location: [],
       time: [],
       score: []
     }

     { this.getGame() }
   }

   getGame() {
      fetch('https://goatbackend110.appspot.com/static/schedule_individual.json')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             size: Object.keys(responseJson.Games[this.props.index]).length
           })

           for (var i = 0; i < this.state.size; i++) {
             this.setState({
               date: this.state.date.concat([
                 responseJson.Games[this.props.index][i][0]
               ]),
               opponent: this.state.opponent.concat([
                 responseJson.Games[this.props.index][i][1]
               ]),
               location: this.state.location.concat([
                 responseJson.Games[this.props.index][i][2]
               ]),
               time: this.state.time.concat([
                 responseJson.Games[this.props.index][i][3]
               ]),
               score: this.state.score.concat([
                 responseJson.Games[this.props.index][i][4]
               ]),
             });
           }
         })
         .catch((error) => {
           console.error(error);
         });
   }

  render () {
    var game = []

    for (let i = 0; i < this.state.size; i++) {

      game.push(
        <View style = {styles.container} key = {i}>
            <Text style={styles.item}> UCSD {this.state.score[i]} {this.state.opponent[i]}</Text>
            <Text style={styles.time}> {this.state.date[i]} {this.state.time[i]}</Text>
        </View>
    );
  }

  return (
        <View style = {styles.overall_page}>
          <ScrollView>
            { game }
          </ScrollView>
        </View>

      );
    }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderTopWidth:0,
    borderBottomWidth:0.5,
    width: window.width,
    height: 60,
    justifyContent: 'center'
  },

  item: {
    flexDirection: 'row',
    fontFamily:"HelveticaNeue-Thin",
    textAlign:'center',
    fontSize: 16,
  },

  time: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  }

});

AppRegistry.registerComponent('Game', () => Game);
