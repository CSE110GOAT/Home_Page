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


export default class Indiv extends Component {
  constructor(){
    super()

  }

  navBack() {
    this.props.navigator.pop()
  }

  render() {
    return (
      <View style = {styles.indivcontainer}>
        <TouchableOpacity activeOpacity={1} onPress={this.navBack.bind(this)}>
          <View>
            <Header/>
          </View>
        </TouchableOpacity>
        <View style = {styles.game}>
          <PastGame/>
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
