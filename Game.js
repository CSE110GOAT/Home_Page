
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native'

export default class Game extends Component {
  constructor(){
    super()
    this.state = {
        sport: "Basketball",
        team1: "UCSD",
        score1: 21,
        team2: "USC",
        score2: 0
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.item}> {this.state.sport} {"\n"} {this.state.team1}
               {this.state.score1} {this.state.score2} {this.state.team2}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'snow',
    justifyContent: 'center'
  },
  item:{
    fontFamily:"Helvetica",
    padding: 15,
    height:40,
    borderColor: 'navy',
    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center'
  },
  logo:{
    height:30,
    width: 30
  }
});

AppRegistry.registerComponent('Game', () => Game);
