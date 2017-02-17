
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class Header extends Component{
    constructor(){
    super()
    this.state = {
      banner: 'UCSD Tritons'
      }
    }
    render(){
    return (
      <View style = {styles.head}>
        <Text style ={styles.title}>
          {this.state.banner}
        </Text>
      </View>
      );
    }
  }

const styles = StyleSheet.create({
  head: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00008b',
  },
  title:{
  justifyContent: 'center',
  fontSize: 40,
  fontWeight: 'bold',
  }
});

AppRegistry.registerComponent('Header', () => Header);
