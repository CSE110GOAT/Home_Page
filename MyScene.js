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
    this.key = -1
    this.state = {
      game : [],
      futureGame: [],
      tournamentGame : [],
      sceneSport: "baseSport",
      sceneTeam1: "baseTeam1",
      sceneTeam2: "baseTeam2",
      sceneScore: "baseScore",
      sceneDate: "baseDate"
    }

   {this.getGamedata()}
  }

  navIndiv() {
    this.props.navigator.push({
      id: 'second',
      //sport: this.state.sceneSport,
      //team1: this.state.sceneTeam1,
      //team2: this.state.sceneTeam2,
      //score: this.state.SceneScore,
      //date: this.state.sceneDate
    })
  }



navTournament(){
  this.props.navigator.push({
      id:'fourth',
      sport: this.state.sceneSport,
      team1: this.state.sceneTeam1,
      team2: this.state.sceneTeam2,
      score: this.state.SceneScore
  })
}

 getGamedata() {
   fetch('https://goatbackend110.appspot.com/static/schedule.json')
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson = responseJson.Games;
     //  var size =  Object.keys(responseJson).length
       for(var i = 0; i < 30 ; i++){
         var oneGame = responseJson[String(i)];
           var gender = oneGame[12]
           var cont = st.container1
            if( gender == -1 ) {
              cont = st.container1
            }
            else if ( gender == 1) {
              cont = st.container2
            }
            else {
              cont = st.container3
            }
         if(oneGame[5] == ""){
            this.setState({
            futureGame: this.state.futureGame.concat([
             <View key = {i}>

               <FutureGamePreview
                date= {oneGame[0]}
                sport = {oneGame[1]}
                team2 = {oneGame[2]}
                location = {oneGame[3]}
                time = {oneGame[4]}
                score = {oneGame[5]}
                recap = {oneGame[6]}
                notes = {oneGame[7]}
                stats = {oneGame[8]}
                latitude = {oneGame[9]}
                longitude = {oneGame[10]}
                gender = {cont}
                navigator = {this.props.navigator}
                />
              </View>
            ])
          })
            continue;
          }
        /*
         else if(() ){
            /*
            this.setState({
            tournamentGame: this.state.tournamentGame.concat([
              <TouchableOpacity activeOpacity={1} onPress={this.navTournament.bind(this)}>
             <View>
               <TournamentPreview
                sport = {oneGame[1]}
                name = {oneGame[2]}
                date = {oneGame[0]}
                />
              </View>
           </TouchableOpacity>
            ])
          })

          continue;
         }
         */
          this.setState({
            game: this.state.game.concat([
             <View key = {i}>
               <Game
                date= {oneGame[0]}
                sport = {oneGame[1]}
                team2 = {oneGame[2]}
                location = {oneGame[3]}
                time = {oneGame[4]}
                score = {oneGame[5]}
                recap = {oneGame[6]}
                notes = {oneGame[7]}
                stats = {oneGame[8]}
                latitude = {oneGame[9]}
                longitude = {oneGame[10]}
                gender = {cont}
                navigator = {this.props.navigator}
                />
              </View>
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

                {this.state.futureGame}


              <View style = {styles.time}>
               <Text style={styles.title}>
                 --Tournament--
               </Text>
             </View>
             {this.state.tournamentGame}

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

const st = StyleSheet.create({
  container1: {
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
  }})
AppRegistry.registerComponent('MyScene', () => MyScene);
