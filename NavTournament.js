import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import Header from './Header'
import Status from './Status'
import NavBar from './NavBar'
import Tournament from './Tournament'
import StatusWithoutStats from './StatusWithoutStats'
import StatusWithoutBoth from './StatusWithoutBoth'


export default class NavTournament extends Component {
  constructor(){
    super()

  }

  navBack() {
    this.props.navigator.pop()
  }
  getStatus = () => {
    if(this.props.stats == "") {
              if(this.props.notes == "") {
                return (<StatusWithoutBoth
                          sport = {this.props.sport}
                         loc =  {this.props.loc}
                         team2 =  {this.props.team2}
                          date =  {this.props.date}
                          time =  {this.props.time}
                         score = {this.props.score}
                         recap = {this.props.recap}
                        notes = {this.props.notes}
                        stats = {this.props.stats}
                        latitude =  {this.props.latitude}
                        longitude = {this.props.longitude}
                        gender = {this.props.gender}/>);
              } else {
                return (<StatusWithoutStats
                    sport = {this.props.sport}
                   location =  {this.props.loc}
                   team2 =  {this.props.team2}
                    date =  {this.props.date}
                    time =  {this.props.time}
                   score = {this.props.score}
                   recap = {this.props.recap}
                  notes = {this.props.notes}
                  stats = {this.props.stats}
                  latitude =  {this.props.latitude}
                  longitude = {this.props.longitude}
                  gender = {this.props.gender}/>);
          }
    } else if (this.props.notes == "") {
      return (<StatusWithoutNotes
          sport = {this.props.sport}
         loc =  {this.props.loc}
         team2 =  {this.props.team2}
          date =  {this.props.date}
          time =  {this.props.time}
         score = {this.props.score}
         recap = {this.props.recap}
        notes = {this.props.notes}
        stats = {this.props.stats}
        latitude =  {this.props.latitude}
        longitude = {this.props.longitude}
        gender = {this.props.gender}/>);

    } else {

      return (<Status
          sport = {this.props.sport}
         loc =  {this.props.loc}
         team2 =  {this.props.team2}
          date =  {this.props.date}
          time =  {this.props.time}
         score = {this.props.score}
         recap = {this.props.recap}
        notes = {this.props.notes}
        stats = {this.props.stats}
        latitude =  {this.props.latitude}
        longitude = {this.props.longitude}
        gender = {this.props.gender}/>);

    }
  }


  render() {
    return (
      <View style = {styles.indivcontainer}>
        <TouchableOpacity activeOpacity={1} onPress={this.navBack.bind(this)}>
          <View>
            <Header/>
          </View>
        </TouchableOpacity>
         <View>
         <Tournament
             sport = {this.props.sport}
             loc =  {this.props.loc}
             team2 =  {this.props.team2}
              date =  {this.props.date}
              time =  {this.props.time}
             score = {this.props.score}
             recap = {this.props.recap}
            notes = {this.props.notes}
            stats = {this.props.stats}
            latitude =  {this.props.latitude}
            longitude = {this.props.longitude}
            gender = {this.props.gender}/>
        </View>
        {this.getStatus()}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  game: {
    alignItems: 'center'
  },
  indivcontainer: {
    flex:1,
    flexDirection: 'column'
  }


});

AppRegistry.registerComponent('NavTournament', () => NavTournament);
