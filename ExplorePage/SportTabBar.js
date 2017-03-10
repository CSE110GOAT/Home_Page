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
  TabBarIOS
} from 'react-native';

import MenSports from './MenSports';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SportTabBar extends Component {
  constructor(props) {
    super(props);
  }

  navBack () {
    this.props.navigator.pop({
      id: this.props.previous
    })
  }

  render() {
    return (
      <View style = {styles.topBar}>
          <TabBarIOS
            barTintColor = "white"
            tintColor = "black"
            unselectedItemTintColor = "black"
            translucent = {true}
          >
            <Icon.TabBarItemIOS
              iconName = "ios-arrow-back-outline"
              selectedIconName = "ios-arrow-back"
              onPress = {this.navBack.bind(this.props.page)}
            />
          </TabBarIOS>

          <View style = {styles.head}>
            <Text style = {styles.title}> {this.props.sport} </Text>
          </View>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  head: {
    width: 320,
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 8,
    paddingRight: 45

  },

  title: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
    fontSize: 25,

  },

  topBar: {
    flexDirection: 'row',
    width: window.width,
    backgroundColor: 'white'
  }
});

AppRegistry.registerComponent('SportTabBar', () => SportTabBar);
