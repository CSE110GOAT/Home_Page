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
  Dimensions
} from 'react-native';

import Header from './Header';
import SportIcon from './SportIcon';
import NavBar from './NavBar';
import MenSports from './MenSports';
import WomenSports from './WomenSports';

var window = Dimensions.get('window');

export default class Explore extends Component {
  constructor() {
    super()
  }

  navExploreMen() {
    this.props.navigator.push({
      id: 'men'
    })
  }

  navExploreWomen() {
    this.props.navigator.push({
      id: 'women'
    })
  }

  render() {
    return(
      <View style = {{flex: 1}}>

        <View>
            <Header />
        </View>

        <TouchableHighlight style = {styles.button} onPress = {this.navExploreMen.bind(this)}>
            <Image
              source={require('./explore_pics/baseball.png')}
              style = {{
                height: 286,
                width: window.width
              }}
            />
        </TouchableHighlight>

        <TouchableHighlight style = {styles.button}  onPress = {this.navExploreWomen.bind(this)}>
          <Image
            source={require('./explore_pics/tennis.png')}
            style = {{
              height: 286,
              width: window.width
            }}
          />
        </TouchableHighlight>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: window.width,
    height: window.width,
    backgroundColor: 'white',
    borderColor: 'gainsboro',
    borderStyle: 'solid',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 25,
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('Explore', () => Explore);
