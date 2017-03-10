import React, { Component } from 'react';
import { AppRegistry, Text, ScrollView, View } from 'react-native';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

class HelloWorldApp extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <View style={{styles.banner}} />
        </View>
        <Text>Hello world!</Text>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    width: window.width,
    height: 50
    backgroundColor: 'powderblue'
  }
});

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
