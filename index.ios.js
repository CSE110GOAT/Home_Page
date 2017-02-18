/**
 * Trial  React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';
import Game from './Game'
import Header from './Header'
import NavBar from './NavBar'


export default class TrialProject extends Component {
  constructor(){
    super()
    this.state = {
      gamesList: [
        {'team1':'UCSD','score1':'100','team2':'UCB','score2':'0'},
        {'team1':'UCSD','score1':'100','team2':'UCLA','score2':'0'},
        {'team1':'UCSD','score1':'100','team2':'UCSB','score2':'0'},
        {'team1':'UCSD','score1':'100','team2':'UCD','score2':'0'},
        {'team1':'UCSD','score1':'100','team2':'UCSC','score2':'0'},
        {'team1':'UCSD','score1':'100','team2':'UCI','score2':'0'},
        {'team1':'UCSD','score1':'100','team2':'UCM','score2':'0'},
        {'team1':'UCSD','score1':'100','team2':'UCR','score2':'-1'},
        {'team1':'UCSD','score1':'100','team2':'UCSF','score2':'-1'},
        {'team1':'UCSD','score1':'100','team2':'USC','score2':'-1'},
        {'team1':'UCSD','score1':'100','team2':'CalTech','score2':'-1'},
        {'team1':'UCSD','score1':'100','team2':'Stanford','score2':'-1'},
        {'team1':'UCSD','score1':'100','team2':'SDSU','score2':'-1'},
        {'team1':'UCSD','score1':'100','team2':'USD','score2':'-1'},
      ]
    }
  }
  render() {
    return (
       <View>
           <View style = {styles.head}>
             <Header/>
           </View>
          <ScrollView>
          <Game
            gamesList = {this.state.gamesList}
            />
        </ScrollView>
          <View >
            <NavBar/>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'

  },
  head: {
    justifyContent: 'center',
    alignItems: 'center',
    width: window.width,
    height: 80,
    backgroundColor: '#00008b'
  },
  title:{
    justifyContent: 'center',
    color: 'yellow',
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: "Didot"
  }
});

AppRegistry.registerComponent('TrialProject', () => TrialProject);
