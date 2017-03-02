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
import FutureGame from './FutureGame'
import Status from './Status'
import NavBar from './NavBar'


export default class NavFuture extends Component {
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
        <View>
          <FutureGame/>
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

AppRegistry.registerComponent('NavFuture', () => NavFuture);
