import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AppRegistry,
  Animated,
  PanResponder,
  Dimensions
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class privacyMenu extends Component {
  static navigationOptions = {
    title: 'Settings',
    header: false
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}

export default privacyMenu;
