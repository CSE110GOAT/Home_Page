import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native'
import NavTournament from './NavTournament'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class Tournament extends Component {
  constructor(){
    super()
    this.state = {
      sport: 'Golf',
      name: 'Torrey Pines Invitational',
      date: '12:00'
    }
  }
  render() {
    return (
      <View>
        <Text style={styles.sport}> --{this.state.sport}-- </Text>
        <View style={styles.container}>
          <View>
              <Text style={styles.item}>{this.state.name}{'\n'}{this.state.date}</Text>
          </View>
        </View>
      </View>
    );
  }
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

AppRegistry.registerComponent('Tournament', () => Tournament);
