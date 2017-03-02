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
  TabBarIOS,
  TouchableOpacity
} from 'react-native';


import Game from './Game'
import Header from './Header'
import NavBar from './NavBar'
import Indiv from './Indiv'
import FutureGame from './FutureGame'
import PastGame from './PastGame'
import FutureGamePreview from './FutureGamePreview'

export default class MyScene extends Component {

  navIndiv() {
    this.props.navigator.push({
      id: 'second'
    })
  }

  NavFuture() {
    this.props.navigator.push({
      id: 'third'
    })
  }

  render() {
    return (
        <View style={styles.container}>
           <Header/>
           <ScrollView style={styles.scroll}>
             <View style = {styles.time}>
               <Text style={styles.title}>
                 --Today--
               </Text>
             </View>
             <TouchableOpacity activeOpacity={1} onPress={this.navIndiv.bind(this)}>
              <View>
                <Game/>
                <Game/>
                <Game/>
                <Game/>
                <Game/>
                <Game/>
                <Game/>
              </View>
             </TouchableOpacity>
      

             <View style = {styles.time}>
               <Text style={styles.title}>
                 --Upcoming--
               </Text>
             </View>
             <TouchableOpacity activeOpacity={1} onPress={this.NavFuture.bind(this)}>
              <FutureGamePreview/>
              <FutureGamePreview/>
              <FutureGamePreview/>
              <FutureGamePreview/>
              <FutureGamePreview/>
              </TouchableOpacity>

           </ScrollView>


         </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'

  },
  head: {
    justifyContent: 'center',
    alignItems: 'center',
    width: window.width,
    height: 80,
    backgroundColor: '#00008b'
  },

  time: {
    justifyContent: 'center',
    alignItems: 'center',
    width: window.width,
    height: 40,
    backgroundColor: 'white'
  },
  title: {
    justifyContent: 'center',
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: "Didot"
  }
});

AppRegistry.registerComponent('MyScene', () => MyScene);
