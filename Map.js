import React, { Component } from 'react';
import { MapView, AppRegistry, View, Text } from 'react-native';

export default class Maps extends Component {



  state = {
    region: {
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      latitudeDelta: 1,
      longitudeDelta: 1
    },
    annotations: [{latitude: this.props.latitude, longitude: this.props.longitude, animateDrop: true}]
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
