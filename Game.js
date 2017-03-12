import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ListView
} from 'react-native'
import * as firebase from 'firebase';




// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBZDWWw9oGKK9HR-_6zn3_6D8NWwVu39Fw",
    authDomain: "goatbackend110.firebaseapp.com",
    databaseURL: "https://goatbackend110.firebaseio.com",
    storageBucket: "goatbackend110.appspot.com",
    messagingSenderId: "827020053197"
});

export default class Game extends Component {

  constructor(){
    super()
    this.state = {
           sport:  "basketball",
           team1: "UCSD",
           score: "N/A",
           team2: "USC",
           dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
       };
       this.itemsRef = firebase.database().ref();

}


 getJSONdata() {
   fetch('https://goatbackend.appspot.com/schedule.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState ({ 
          sport: responseJson.Games["0"][1], 
          team1: responseJson.Games["0"][3],
          score: responseJson.Games["0"][5],
          team2: responseJson.Games["0"][2] 
        });

      })
      .catch((error) => {
        console.error(error);
      });
  }
/*
  getData() {
      //var str = "o"
  firebase.database().ref("test").on('value',function(snapshot){

     });
  }
*/
/*
  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });
      
      this.setState({
        dataSource: this.state.dataSource.copyItems(items)
      });
   });
  }
*/

    render() {
    return(
      <View>
        <View style={styles.container}>
          <View style={styles.logo_item}>
            <Image source={require('./basketball.png')} style={styles.logo}/>
            <Text>{"\t\t"}</Text>
          </View>
          <View>
            <Text style={styles.item}><Image source={require('./school_logos/triton.png')} style={styles.sport_image}/> {this.getJSONdata()} {this.state.team1}  {this.state.score} {this.state.team2}  <Image source={require('./school_logos/usc.png')} style={styles.sport_image}/></Text>
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


AppRegistry.registerComponent('Game', () => Game);
