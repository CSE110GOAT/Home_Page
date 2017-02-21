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
      numGames: 0,
      onStart: true
    }
  }
  render() {
    return (
       <View>
           <View style = {styles.head}>
             <Header/>
           </View>
          <ScrollView>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
            <Game/>

          </ScrollView>
          <View>
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
