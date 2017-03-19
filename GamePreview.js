import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ListView,
  TouchableOpacity
} from 'react-native'


const Game = (props) => {
    return(

      <TouchableOpacity activeOpacity={0.5} onPress= {() => {
      props.navigator.push({
        id: 'second',
        sport: props.sport,
        loc: props.loc,
        team2: props.team2,
         date: props.date,
         time: props.time,
        score: props.score,
        recap: props.recap,
       notes: props.notes,
       stats: props.stats,
       latitude: props.latitude,
       longitude: props.longitude,
       gender: props.gender
        })
      }}>
        <View style={props.gender}>
          <View>
            <Text style={styles.item}>UCSD{'\t'}vs.{'\t'}{props.team2}  </Text>
            <Text style={styles.time}>{props.date} {props.time} </Text>
          </View>
            </View>
      </TouchableOpacity>
    )
  }


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderTopWidth:0,
    borderBottomWidth:0.5,
    borderLeftColor: 'blue',
    borderLeftWidth: 10,
  },
  container2: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderTopWidth:0,
    borderBottomWidth:0.5,
    borderLeftColor: 'gold',
    borderLeftWidth: 10,
  },
  container3: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderTopWidth:0,
    borderBottomWidth:0.5,
    borderLeftColor: 'green',
    borderLeftWidth: 10,
  },
  logo_item:{
    alignItems: 'center',
    flexDirection:'row',
    borderRightWidth: 0.5,
    borderRightColor: 'grey'
  },
  item:{
    flexDirection: 'row',
    fontFamily:"HelveticaNeue-Thin",
    textAlign:'center',
    fontSize: 16,
    padding:10
  },
  sport:{
    flexDirection: 'row',
    fontFamily:"HelveticaNeue-Thin",
    textAlign:'center',
    fontSize: 12,
    fontWeight: 'bold'
  },
  sport_image: {
    width: 25,
    height: 50,
    marginTop: 15
  },
  time: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily:"HelveticaNeue-CondensedBold"
  },
  logo: {
    width: 35,
    height: 35,
    marginTop: 10,
    marginLeft: 15,
    justifyContent: 'center'
  }
});


export default Game
