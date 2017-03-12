import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class RosterIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fitFont: true
    };
  }

  render() {
    return(
        <View style={styles.grid}>
          <Image
            source = {{uri: this.props.pic}}
            style = {{width: window.width/3, height: window.height/3 - 50}}
          />

        </View>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    width: window.width/3,
    height: window.width/3,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRightWidth: 0.5,
    borderTopWidth: 0,
    borderLeftWidth: 0.5,
  },

  player: {
    fontSize: 18,
    textAlign: 'center',
  },

});

AppRegistry.registerComponent('RosterIcon', () => RosterIcon);
