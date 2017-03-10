
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
      <View style = {styles.head}>
        <Image style ={styles.header_image}
        source = {require('./header.png')}/>
      </View>
      );
    }
  }

const styles = StyleSheet.create({
  header_image: {
    width: window.width,
    height: 95
  }
});

AppRegistry.registerComponent('Header', () => Header);
