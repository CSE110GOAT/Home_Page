
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Navigator,
  TouchableOpacity
} from 'react-native'





const FutureGamePreview = (props) => {
    return(

      <TouchableOpacity activeOpacity={0.5} onPress= {() => {
      props.navigator.push({
        id: 'third',
        sport: props.sport,
        location: props.location,
        team2: props.team2,
         date: props.date,
         time: props.time,
        score: props.score,
        recap: props.recap,
       notes: props.notes,
       stats: props.stats,
       latitude: props.latitude,
       longitude: props.longitude
        })
      }}>

        <View style={styles.container}>
          <View style={styles.logo_item}>
            <Image source={require('./basketball.png')} style={styles.logo}/>
            <Text>{"\t\t"}</Text>
          </View>
          <View>
            <Text style={styles.item}>UCSD{'\t'}{props.team2}  </Text>
            <Text style={styles.time}>{props.date} {props.time} </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: 'grey',
    borderTopWidth:0,
    borderBottomWidth:0.5,
    borderLeftColor: 'blue',
    borderLeftWidth: 10
  },
  logo_item:{
    alignItems: 'center'
  },
  item:{
    fontFamily:"Menlo",
    padding: 10,
    borderColor:'grey',
    borderTopWidth:0,
    borderBottomWidth:0,
    borderLeftWidth:0.5,
    borderRightWidth:0.5,
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

export default FutureGamePreview
