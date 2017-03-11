import React, { Component } from 'react';
import { View, StyleSheet, Text, AppRegistry, WebView, TouchableOpacity } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';


import Article from '../NewsPage_2/Article';
import TeamStats from './TeamStats';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class Slider extends Component {

  state = {
    index: 0,
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

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <View style={styles.page}>
          <Text>{this.props.games}</Text>
        </View>

    case '2':
      return <View style={styles.page}>

        </View>

    case '3':
      return /*<View style={styles.page}>
          <View>
            <TouchableOpacity
              disabled={!this.state.canGoBack}
              onPress={this.onBack.bind(this)}
            >
              <Text>Go Back</Text>
            </TouchableOpacity>
          </View>

        <WebView
          source ={{uri: this.props.statsURL}}
          ref = {'webview'}
          scalesPageToFit = {true}
          style = {styles.webpage}
          onNavigationStateChange = {this.onNavigationStateChange.bind(this)}
        />
        </View>*/
        <TeamStats />

    default:
      return null;
    };
  }

    onNavigationStateChange(navState) {
      this.setState({
        canGoBack: navState.canGoBack
      })
    }

    onBack() {
      this.refs['webview'].goBack();
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
