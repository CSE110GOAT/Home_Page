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
import NavFuture from './NavFuture'
import FutureGamePreview from './FutureGamePreview'

export default class FutureGame extends Component {
  constructor(){
    super()
    /*
    this.state = {
      sport: "Basketball",
      team1: "UCSD",
      score1: 21,
      team2: "USC",
      score2: 0
    }
   */
  }
  render(){
    return(
      <View>
        <View style = {styles.SportType} >
        <Text style ={styles.SportTypeText}> {this.state.sport}</Text>
        </View>

        <View style = {styles.ScoreContainer}>

          <Text style = {styles.ScoreText}>
          <Image source={require('./school_logos/triton.png')}  style = {styles.logo}/>
          {"\t"}{this.state.team1} {this.state.score1} {"\t"}{this.state.score2} {this.state.team2}{"\t"}
          {"\t"}<Image source={require('./school_logos/usc.png')}  style = {styles.logo}/>
        </Text>
        </View>
        <View style = {styles.ButtonContainer}>
          <Text style = {styles.ButtonText}> Stats{"\t"}{"\t"}Notes{"\t"}{"\t"}Map</Text>
        </View>

        <View style={styles.InfoContainer}>
          <View style = {{borderColor:"grey",borderBottomWidth:1}}>
          </View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  SportType:{
    borderWidth: 1,
    borderColor:  "grey",
    padding: 5

  },
  SportTypeText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center'
  },
  ScoreContainer:{
    borderWidth: 1,
    borderColor:  "grey",
    padding: 10,
    alignItems:'center'

  },
  ScoreText:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ButtonContainer:{
    borderWidth: 1,
    borderColor:  "grey",
    padding: 10
  },
  ButtonText:{
    fontSize: 18,
    textAlign: 'center'
  },
  InfoContainer:{
    borderWidth: 1,
    height: 430,
    borderColor:  "grey"
  },
  logo:{
    height:60,
    width:60,
    //borderColor: "black",
    //borderWidth:1
  }
});

AppRegistry.registerComponent('FutureGame', () => FutureGame);
