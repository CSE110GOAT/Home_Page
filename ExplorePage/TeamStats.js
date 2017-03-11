import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  WebView,
  Linking,
  TouchableOpacity
} from 'react-native'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class TeamStats extends Component {
  constructor(){
    super()
  }

  handleClick = () => {
    Linking.canOpenURL(this.state.url).then(supported => {
      if (supported) {
        Linking.openURL(this.state.url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.state.url);
      }
    });
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.handleClick}>

    </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 2
  },
  logo_item:{
    alignItems: 'center',
    height: 200
  },
  item:{
    fontFamily:"Menlo",
    borderWidth: 0.5,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    textAlign:'center'
  },
  sport:{
    fontFamily: 'Didot',
    backgroundColor: 'gold',
    fontWeight: 'bold',
    borderColor: 'grey',
    borderWidth: 2
  },
  sport_image: {
    width: 25,
    height: 50,
    alignItems: 'center',
    marginTop: 15
  },
  source: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  summary: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign:'center'
  },
  logo: {
    width: window.width,
    height: window.height/3 - 15,
    resizeMode: 'contain',
    borderColor: 'grey',
    borderWidth: 0,
    justifyContent: 'flex-start'
  }
});

AppRegistry.registerComponent('TeamStats', () => TeamStats);
