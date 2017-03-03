
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native'

export default class TournamentPreview extends Component {
  constructor(){
    super()
    this.state = {
        sport: "Golf",
        name : "TorreyPinesInvitational",
        time: "12:00 PM"
    }
  }
  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.logo_item}>
            <Image source={require('./basketball.png')} style = {styles.logo}/>
            <Text>{"\t\t"}</Text>
          </View>
          <View style = {styles.box}>
            <Text style={styles.item}>{'\n'}{this.state.name} </Text>
        
          </View>
          <View>

             <Text style={styles.time}>{'\n'}{'\n'}     {this.state.time}</Text> 
         </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 2,
    borderLeftColor: 'blue',
    borderLeftWidth: 10
  },
  Box:{
      flexDirection:'row',
      flex:1
  },
  logo_item:{
    alignItems: 'center'
  },
  item:{
    fontFamily:"Menlo",
    padding: 10,
    flexDirection:'row',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 62,
    textAlign:'center',
    borderColor:'grey',
    borderWidth:0.5,
    fontWeight:'bold'
  },
  text:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12
  },
  time: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold'
},
  logo: {
    width: 35,
    height: 35,
    marginTop: 10,
    marginRight:15,
    marginLeft: 15,
  }
});

AppRegistry.registerComponent('FutureGamePreview', () => FutureGamePreview);
