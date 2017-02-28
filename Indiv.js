import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';
import Header from './Header'
import LiveGame from './LiveGame'
import Status from './Status'


export default class Indiv extends Component {
  constructor(){
    super()

  }
  render() {
    return (
      <View style = {styles.indivcontainer}>
        <View>
          <Header/>
        </View>
        <View style = {styles.game}>
          <LiveGame/>
        </View>
        <Status/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  game: {
    alignItems: 'center'
  },
  indivcontainer: {
    flex:1,
    flexDirection: 'column'
  }


});

AppRegistry.registerComponent('Indiv', () => Indiv);
