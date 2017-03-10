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
      fitFont: false
    };
  }

  render() {
    return(
        <View style={styles.grid}>
          <Text style={styles.player}
          adjustsFontSizeToFit={this.state.fitFont}>{this.props.sport}</Text>
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
