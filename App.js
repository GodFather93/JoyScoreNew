/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
import HomeScreen from './src/components/Home.js';
import privacyMenu from './src/components/Privacy.js';
import Gallery from './src/components/Gallery.js';
import Joyers from './src/components/Joyers.js';
import Messaging from './src/components/Messaging.js';
import Post from './src/components/Post.js';
import Search from './src/components/Search.js';
import Settings from './src/components/Settings.js';

const NavigationApp = StackNavigator(
  {
    Home: { screen: HomeScreen },
    pMenu: { screen: privacyMenu },
    gallery: { screen: Gallery },
    joyers: { screen: Joyers },
    messaging: { screen: Messaging },
    post: { screen: Post },
    search: { screen: Search },
    settings: { screen: Settings },
  },
  {
    headerMode: 'screen'
  }
);

export default class App extends Component {
  render() {
    return <NavigationApp />;
  }
}
