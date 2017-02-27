import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  Navigator
} from 'react-native';

import Game from './Game'
import Header from './Header'
import NavBar from './NavBar'
import Indiv from './Indiv'
import LiveGame from './LiveGame'

export default class MyScene extends Component {

  navIndiv() {
    this.props.navigator.push({
      id: 'second'
    })
  }

  render() {
    return (
      <View>
        <View>
            <View style = {styles.head}>
              <Header/>
            </View>
           <ScrollView>
             <View style = {styles.time}>
               <Text style={styles.title}>
                 --Today--
               </Text>
             </View>
             <TouchableHighlight onPress={this.navIndiv.bind(this)}>
              <View>
                <Game/>
              </View>
             </TouchableHighlight>
             <Game/>
             <Game/>
             <Game/>
             <Game/>
             <Game/>
             <Game/>

             <View style = {styles.time}>
               <Text style={styles.title}>
                 --Upcoming--
               </Text>
             </View>

             <Game/>
             <Game/>
             <Game/>
             <Game/>
             <Game/>
           </ScrollView>
           <View>
             <NavBar/>
           </View>
         </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'

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
