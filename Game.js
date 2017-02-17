
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'

export default Game = (props) => {
  const createItem = (item) => (
      <Text key = {item.score} style = {styles.item}>
        {item.team1}      {item.score1} {item.score2}      {item.team2}
      </Text>
      )
  return(
    <View style = {styles.container}>
        <ScrollView>
          {props.gamesList.map(createItem)}
        </ScrollView>
     </View>
  )
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
  }
});

AppRegistry.registerComponent('Game', () => Game);
