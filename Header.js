
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

export default class Header extends Component{
    constructor(){
    super()
    this.state = {
      banner: 'Triton Athletics'
      }
    }
    render(){
    return (
      <View>
        <Image source={require('./header.png')} style={styles.header_image}/>
      </View>
      );
    }
  }

const styles = StyleSheet.create({
  title: {
    justifyContent: 'center',
    color: 'yellow',
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: "Didot"
  },
  header_image: {
    width: window.width,
    height: 95
  }
});

AppRegistry.registerComponent('Header', () => Header);
