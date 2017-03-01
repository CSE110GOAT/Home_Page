import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import Header from './Header'
import PastGame from './PastGame'
import Status from './Status'
import NavBar from './NavBar'


export default class News extends Component {



  render() {
    return (
      <View style = {styles.indivcontainer}>
       <Text> This is the News Page </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({

  indivcontainer: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }


});

AppRegistry.registerComponent('News', () => News);
