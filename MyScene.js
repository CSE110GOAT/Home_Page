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
import TournamentPreview from './TournamentPreview'
import Tournament from './Tournament'
import NavTournament from './NavTournament'

export default class MyScene extends Component {
  constructor(){
    super()
    this.state = {
      game : []
    }
   {this.getGamedata()}

  }

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

navTournament(){
  this.props.navigator.push({
    id:'fourth'
  })
}

 getGamedata() {
   fetch('https://goatbackend110.appspot.com/static/schedule.json')
      .then((response) => response.json())
      .then((responseJson) => {
       var size =  Object.keys(responseJson.Games).length
       for(var i = 0; i < size ; i++){  
          this.setState({
            game: this.state.game.concat([
            <TouchableOpacity activeOpacity={1} onPress={this.navIndiv.bind(this)}>
             <View>
               <Game 
                sport = {responseJson.Games[String(i)][1]} 
                team1 = {responseJson.Games[String(i)][3]}
                team2 = {responseJson.Games[String(i)][2]}
                score = {responseJson.Games[String(i)][5]}
                date = {responseJson.Games[String(i)][0]}
                />
              </View>
           </TouchableOpacity>
            ])
          })
         }
      })
      .catch((error) => {
        console.error(error);
      });

  }

  render() {
    return (
        <View style={styles.container}>
           <Header/>
           <ScrollView style = {{flex:1}} >
             <View style = {styles.time}>
               <Text style={styles.title}>
                 --Today--
               </Text>
             </View>

            {this.state.game}
    
             <View style = {styles.time}>
               <Text style={styles.title}>
                 --Upcoming--
               </Text>
             </View>
            
             <TouchableOpacity activeOpacity={1} onPress={this.NavFuture.bind(this)}>
               <View>
                <FutureGamePreview/>
                <FutureGamePreview/>
                <FutureGamePreview/>
                <FutureGamePreview/>
                </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={1} onPress={this.navTournament.bind(this)}>
                <View>
                  <TournamentPreview/>
                  <TournamentPreview/>
                  <TournamentPreview/>
                 </View>
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
  time: {
    justifyContent: 'center',
    alignItems: 'center',
    width: window.width,
    height: 30,
    backgroundColor: 'navy',
    borderColor:'black',
    borderWidth:1
  },
  title: {
    justifyContent: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: "Didot",

  }
});

AppRegistry.registerComponent('MyScene', () => MyScene);
