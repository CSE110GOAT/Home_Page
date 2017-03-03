
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native'

export default class FutureGamePreview extends Component {
  constructor(){
    super()
    this.state = {
        sport: "Basketball",
        team1: "UCSD",
        score1: 0,
        team2: "USC",
        score2: 0
    }
  }
  render() {
    return (
      <View>
        <Text style={styles.sport}> --{this.state.sport}-- </Text>
        <View style={styles.container}>
          <View style={styles.logo_item}>
            <Image source={require('./basketball.png')} style={styles.logo}/>
            <Text>{"\t\t"}</Text>
          </View>
          <View>
            <Text style={styles.item}><Image source={require('./school_logos/triton.png')} style={styles.sport_image}/> {this.state.team1}  {this.state.score1}{"\t"} {this.state.score2}  {this.state.team2}  <Image source={require('./school_logos/usc.png')} style={styles.sport_image}/></Text>
          </View>
          <View>
            <Text style={styles.time}>{"\n"}       00:00</Text>
            <Text style={styles.time}>       1st</Text>
            <Text style={styles.time}>{"\t"}(G.M?)</Text>
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
    borderWidth: 2,
    borderLeftColor: 'blue',
    borderLeftWidth: 10
  },
  logo_item:{
    alignItems: 'center'
  },
  item:{
    fontFamily:"Menlo",
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    height: 62,
    textAlign:'center'
  },
  sport:{
    fontFamily: 'Didot',
    backgroundColor: 'gold',
    fontWeight: 'bold',
    borderColor: 'navy'
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

AppRegistry.registerComponent('FutureGamePreview', () => FutureGamePreview);
