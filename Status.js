import React, { Component, document } from 'react';
import { AppRegistry, View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  indicator:{
    backgroundColor: 'white'
  },
  tabbar:{
    backgroundColor:'black'
  },
  tab:{
    backgroundColor:"navy",
    opacity:1,
    borderRightWidth:0.25,
    borderColor:'white'
  }
});



export default class TabViewExample extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'STATS' },
      { key: '2', title: 'NOTES' },
      { key: '3', title: 'MAP'},
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return (<TabBar  {...props}
      indicatorStyle={styles.indicator}
      tabStyle={styles.tab}
      style={styles.TabBar}
      />);
  };


  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <View style={[ styles.page, { backgroundColor: '#ff4081' } ]}>
          <ScrollView>
            
          </ScrollView>
      </View>;
    case '2':
      return <View style={[ styles.page, { backgroundColor: '#673ab7' } ]}>
          <ScrollView>
            <Text> This is where the notes will go </Text>
          </ScrollView>
      </View>;
      case '3':
      return <View style={[ styles.page, { backgroundColor: 'white' } ]}>
          <ScrollView>
            <Text> This is where the map will go </Text>
          </ScrollView>
      </View>;
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


AppRegistry.registerComponent('Status', () => Status);
