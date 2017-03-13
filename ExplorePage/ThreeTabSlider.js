import React, { Component } from 'react';
import { View, StyleSheet, Text, AppRegistry, WebView, TouchableOpacity } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';


import Article from '../NewsPage_2/Article';
import TeamStats from './TeamStats';
import Stats from './Stats';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class Slider extends Component {
  constructor(props) {
    super(props);

  }

  state = {
    index: 0,
    sport: this.props.stats,
    routes: [
      { key: '1', title: 'GAMES' },
      { key: '2', title: 'ROSTER' },
      { key: '3', title: 'STATS' },
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

  findSport() {
    switch(this.state.sport) {
      case "baseball":
        return "http://www.ucsdtritons.com/fls/5800/stats/baseball/2017/teamstat.htm?DB_OEM_ID=5800" ;
      case "menBasketball":
        return "http://www.ucsdtritons.com/fls/5800/stats/mbasketball/2016-17/teamstat.htm?DB_OEM_ID=5800";
      case "golf":
        return "http://www.ucsdtritons.com/fls/5800/stats/mgolf/2016-17/teamstat.htm?DB_OEM_ID=5800";
      case "menSoccer":
        return "http://www.ucsdtritons.com/fls/5800/stats/msoccer/2016/teamstat.htm?DB_OEM_ID=5800";
      case "menTennis":
        return "http://www.ucsdtritons.com/fls/5800/stats/mtennis/2017/teamstat.htm?&DB_OEM_ID=5800";
      case "menVolleyball":
        return "http://www.ucsdtritons.com/fls/5800/stats/mvolleyball/2017/teamstat.htm?DB_OEM_ID=5800";
      case "menWaterPolo":
        return "http://www.ucsdtritons.com/ViewArticle.dbml?DB_OEM_ID=5800&ATCLID=205687919&DB_OEM_ID=5800";

      case "womenBasketball":
        return "http://www.ucsdtritons.com/fls/5800/stats/wbasketball/2016-17/teamstat.htm?DB_OEM_ID=5800";
      case "womenSoccer":
        return "http://www.ucsdtritons.com/fls/5800/stats/wsoccer/2016/teamstat.htm?DB_OEM_ID=5800";
      case "softball":
        return "http://www.ucsdtritons.com/fls/5800/stats/softball/2017/teamstat.htm?DB_OEM_ID=5800";
      case "womenTennis":
        return "http://www.ucsdtritons.com/fls/5800/stats/wtennis/2017/teamstat.htm?DB_OEM_ID=5800";
      case "womenVolleyball":
        return "http://www.ucsdtritons.com/fls/5800/stats/wvolleyball/2016/teamstat.htm?DB_OEM_ID=5800";
      case "WomenWaterPolo":
        return "http://www.ucsdtritons.com/ViewArticle.dbml?&DB_OEM_ID=5800&ATCLID=211423801";
    }
  }

  _renderScene = ({ route }) => {

  switch (route.key) {
    case '1':
      return <View style={styles.page}>
          {this.props.games}
        </View>

    case '2':
      return <View style={styles.page}>
          {this.props.roster}
        </View>

    case '3':
      return <View style={styles.page}>
          <Stats url = {this.findSport()} />

        </View>

    default:
      return null;
    };
  }


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
};

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
    maxHeight: window.height,
    width: window.width,
    flex: 1
  },

  tabbar: {
    backgroundColor: 'navy'
  }
});

AppRegistry.registerComponent('Slider', () => Slider);
