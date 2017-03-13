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
import PastGame from './PastGame'
import Status from './Status'
import NavBar from './NavBar'
import Game from './Game'


export default class Indiv extends Component {
  constructor(props){
    super()
  }

  navBack() {
    this.props.navigator.pop()
  }

  render() {
    return (
      <View style = {styles.indivcontainer}>
        <TouchableOpacity activeOpacity={1} onPress={this.navBack.bind(this)}>
          <View>
            <Header/>
          </View>
        </TouchableOpacity>
        <View style = {styles.game}>
          <PastGame 
        sport = {this.props.sport}
         location = {this.props.location}
        team2 =  {this.props.team2}
         date =  {this.props.date}
         time =  {this.props.time}
        score = {this.props.score}
        recap = {this.props.recap}
       notes = {this.props.notes}
       stats = {this.props.stats}
          />
        </View>
        <Status notes = {this.props.notes} stats = {this.props.stats} />
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

AppRegistry.registerComponent('Indiv', () => Indiv);
