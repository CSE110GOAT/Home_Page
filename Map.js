import React, { Component } from 'react';
import { MapView, AppRegistry } from 'react-native';

export default class Maps extends Component {



  state = {
    region: {
      latitude: 43.32,
      longitude: 50.43,
      latitudeDelta: 2,
      longitudeDelta: 2
    },
    annotations: [{latitude: 43.32, longitude: 50.43, animateDrop: true}]
  };

  render() {
    return (
      <MapView
        style={{flex:1}}
        region={this.state.region}
        annotations={this.state.annotations}
      />
    );
  }
}

AppRegistry.registerComponent('Maps', () => Maps);
