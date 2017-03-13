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
      return <View style={styles.page}>
          {this.props.games}
        </View>

    case '2':
      return <View style={styles.page}>
          {this.props.roster}
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

AppRegistry.registerComponent('TwoTabSlider', () => TwoTabSlider);
