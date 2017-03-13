import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native'
import Game from './Game'
import MyScene from './MyScene'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class PastGame extends Component{
    constructor(){
      super()

    }
    render(){
    return (
      <View>
        <Text style={styles.sport}> {this.props.sport} </Text>
        <View style={styles.container}>
          <View>
            <Text style={styles.item}><Image source={require('./school_logos/triton.png')} style={styles.sport_image}/> UCSD  {this.props.score} {this.props.team2}  <Image source={require('./school_logos/usc.png')} style={styles.sport_image}/></Text>
            <Text style = {styles.time}> {this.props.date} {this.props.time} </Text>
          </View>
        </View>
      </View>
    )}
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth:0.5,
    width:window.width
  },
  logo_item:{
    alignItems: 'center'
  },
  item:{
    fontFamily:"Menlo",
    padding: 10,
    borderColor: 'grey',
    justifyContent: 'center',
    height: 62,
    textAlign:'center'
  },
  sport:{
    fontFamily: 'Didot',
    backgroundColor: 'gold',
    fontWeight: 'bold',
    borderColor: 'navy',
    padding: 10,
    fontSize: 20,
    textAlign: 'center'
  },
  sport_image: {
    width: 25,
    height: 50,
    alignItems: 'center',
    marginTop: 15
  },
  time: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  logo: {
    width: 35,
    height: 35,
    marginTop: 10,
    marginRight:15,
    marginLeft: 15,
    justifyContent: 'center'
  }
});


AppRegistry.registerComponent('PastGame', () => PastGame);
