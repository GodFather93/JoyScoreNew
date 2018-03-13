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


class Post extends Component {
  static navigationOptions = {
    title: 'Post',
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

export default Post;
