import React, { Component } from 'react';
import { View, StyleSheet, Text, AppRegistry } from 'react-native';
import { View, StyleSheet, Text, AppRegistry, WebView } from 'react-native';
 import { TabViewAnimated, TabBar } from 'react-native-tab-view';


import Article from '../NewsPage_2/Article';
import TeamStats from './TeamStats';

 const styles = StyleSheet.create({
   container: {
     flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  indicator: {
    backgroundColor: 'gold'
  },

  tab: {
     opacity: 1,
   },

  webpage: {
  marginTop: 20,
  maxHeight: 200,
  width: 320,
 flex: 1
},

   tabbar: {
     backgroundColor: 'navy'
   }
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar {...props}
    style = {styles.tabbar}
    indicatorStyle = {styles.indicator}
    tabStyle = {styles.tab}
    />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <View style={styles.page} >
          <Text>{this.props.games}</Text>
         </View>;
     case '2':
       return <View style={styles.page} >

          <WebView
          source ={{uri: 'https://www.ucsdtritons.com/fls/5800/stats/baseball/2017/teamstat.htm?DB_OEM_ID=5800'}}
          ref = {'webview'}
          scalesPageToFit = {true}
          style = {styles.webpage}
          />
         </View>;
     case '3':
       return <View style={styles.page} >
        
        </View>
    default:
      return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}

      />
    );
  }
}

AppRegistry.registerComponent('MenSlider', () => MenSlider);
