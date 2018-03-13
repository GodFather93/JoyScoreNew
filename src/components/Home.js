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

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    header: false
  };
  constructor(props) {
    super(props);
    this._theCount = this._theCount.bind(this);

    this.state = {
      count: 0,
      drag: 0,
      pan: new Animated.ValueXY()
    };
  }

  componentWillMount() {
    let panMover = Animated.event([
      null,
      {
        dy: this.state.pan.y
      }
    ]);

    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,

      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setValue({ x: 0, y: 0 });
      },

      onPanResponderMove: (e, gestureState) => {
        if (gestureState.moveY < 100) {
          if (gestureState.moveY > 95) {
            this._Drag();
          }
          return panMover(e, gestureState);
        }
      },

      onPanResponderRelease: (e, { vy, dy }) => {
        this.state.pan.setValue({ x: 0, y: 0 });
      }
    });
  }

  _onClick() {
    const navigate = this.props.navigation.navigate;
    if(this.state.drag == 1){
      return (
        <View style={{ height: '100%', width: ' 100%', borderWidth: 0.5, borderColor: 'grey', flexDirection: 'row', backgroundColor: 'rgba(201,234,236,1.0)', alignItems:'center' }}>
        <Text style={{textAlign:'left'}}> NOW YOU SEE ME </Text>
        </View>
      );
    }
    if (this.state.count == 1) {
      return (
        <View style={{ height: '50%', width: ' 100%', borderWidth: 0.5, borderColor: 'grey', flexDirection: 'row' }}>
          <View
            style={{ height: '100%', width: ' 14.28%', borderWidth: 0.5, borderColor: 'grey', flexDirection: 'row' }}
          >
            <TouchableOpacity onPress={() => navigate('pMenu')} style={{ height: '100%', width: '100%' }}>
              <Image
                source={{
                  uri: '/Users/melliferalabs/Desktop/theProject/joyScore/src/images/Nav Friends TabAsset 20xxxhdpi.png'
                }}
                style={{ height: '100%', width: '100%' }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{ height: '100%', width: ' 14.28%', borderWidth: 0.5, borderColor: 'grey', flexDirection: 'row' }}
          >
            <TouchableOpacity onPress={() => navigate('post')} style={{ height: '100%', width: '100%' }}>
              <Image
                source={{
                  uri: '/Users/melliferalabs/Desktop/theProject/joyScore/src/images/Nav Post TabAsset 21xxxhdpi.png'
                }}
                style={{ height: '100%', width: '100%' }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{ height: '100%', width: ' 14.28%', borderWidth: 0.5, borderColor: 'grey', flexDirection: 'row' }}
          >
            <TouchableOpacity onPress={() => navigate('post')} style={{ height: '100%', width: '100%' }}>
              <Image
                source={{
                  uri: '/Users/melliferalabs/Desktop/theProject/joyScore/src/images/Nav Messages TabAsset 22xxxhdpi.png'
                }}
                style={{ height: '100%', width: '100%' }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{ height: '100%',width: ' 14.28%', borderWidth: 0.5, borderColor: 'grey', flexDirection: 'row' }}
          >
            <TouchableOpacity onPress={() => navigate('post')} style={{ height: '100%', width: '100%' }}>
              <Image
                source={{
                  uri: '/Users/melliferalabs/Desktop/theProject/joyScore/src/images/Nav Pictures TabAsset 23xxxhdpi.png'
                }}
                style={{ height: '100%', width: '100%' }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{ height: '100%', width: ' 14.28%', borderWidth: 0.5, borderColor: 'grey', flexDirection: 'row' }}
          >
            <TouchableOpacity onPress={() => navigate('post')} style={{ height: '100%', width: '100%' }}>
              <Image
                source={{
                  uri: '/Users/melliferalabs/Desktop/theProject/joyScore/src/images/Nav Search TabAsset 24xxxhdpi.png'
                }}
                style={{ height: '100%', width: '100%' }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{ height: '100%', width: ' 14.28%', borderWidth: 0.5, borderColor: 'grey', flexDirection: 'row' }}
          >
            <TouchableOpacity onPress={() => navigate('post')} style={{ height: '100%', width: '100%' }}>
              <Image
                source={{
                  uri: '/Users/melliferalabs/Desktop/theProject/joyScore/src/images/Nav Settings TabAsset 25xxxhdpi.png'
                }}
                style={{ height: '100%', width: '100%' }}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    }

  }


_menuBar(){
if(this.state.drag == 1){
  return(
    <View>
      <Image
        source={{
          uri: '/Users/melliferalabs/Desktop/theProject/joyScore/src/images/Nav Main Pull TabAsset 19xxxhdpi.png'
        }}
        style={{ height: '100%', width: '100%' }}
      /></View>
  );
}
  if (this.state.count == 0) {
    return(<View>
      <Image
        source={{
          uri: '/Users/melliferalabs/Desktop/theProject/joyScore/src/images/Nav Main Pull Down Tab with Logo OnlyAsset 40xxxhdpi.png'
        }}
        style={{ height: '100%', width: '100%' }}
      /></View>);
  } else {
    return(
      <View>
        <Image
          source={{
            uri: '/Users/melliferalabs/Desktop/theProject/joyScore/src/images/Nav Main Pull TabAsset 19xxxhdpi.png'
          }}
          style={{ height: '100%', width: '100%' }}
        /></View>
    );
  }

}



  _renderView() {
    return (
      <View
        style={{
          height: '100%',
          width: ' 100%',

          flexDirection: 'row'
        }}
      >

        <View style={{ height: '100%', width: ' 14.28%', borderWidth: 0.5, borderColor: 'grey' }}>


              <TouchableOpacity onPress={this._theCount}>
              {this._menuBar()}
              </TouchableOpacity>


        </View>
        {this._onClick()}
      </View>
    );
  }


_Drag(){

  if (this.state.drag == 0) {
    let set = 1;
    this.setState({ drag: set });
  } else {
    let set = 0;
    this.setState({ drag: set });
  }
}
  _theCount() {
    if (this.state.count == 0) {
      let set = 1;
      this.setState({ count: set });
    } else {
      let set = 0;
      this.setState({ count: set });
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    let joy = { uri: '/Users/melliferalabs/Desktop/theProject/joyScore/src/images/IXXMYu2g_400x400.jpg' };
    let options = {
      uri:
        '/Users/melliferalabs/Desktop/theProject/joyScore/src/images/if_Hamburger_list_menu_options_bars_stack_1887037.png'
    };
    let { pan } = this.state;

    let [translateY] = [pan.y];
    let imageStyle = {
      transform: [{ translateY }],
      height: '20%',
      width: ' 100%',
      marginTop: 16
    };

    return (
      <View style={styles.container}>
      <Image
        source={{
          uri: '/Users/melliferalabs/Desktop/theProject/joyScore/src/images/background-2887350_960_720.jpg'
        }}
        style={{position:'absolute', top: 16, right: 0, left:0 , bottom: 400}}/>

        <Animated.View style={imageStyle} {...this._panResponder.panHandlers}>
          {this._renderView()}
        </Animated.View>


      <Image
          source={{
            uri: '/Users/melliferalabs/Desktop/theProject/joyScore/src/images/avatar-round-border-e1478275293825.png'
          }}
          style={{ height: '11%', width: '20%', alignItems: 'center' }}/>

          <Text style={styles.welcome}>Welcome to Joy Score!</Text>

        <View style={{ flex: 1,flexDirection: 'row', justifyContent:'center'}}>

        <TouchableOpacity onPress={this._onPressButton}style={{ height: '15%', width: '10%' }} ><Image
          source={{
            uri: '/Users/melliferalabs/Desktop/theProject/joyScore/src/images/Nav Quiz Tab OnlyAsset 16xxxhdpi.png'
          }}
          style={{ height: '100%', width: '100%' }}
        /></TouchableOpacity>
        <TouchableOpacity onPress={this._onPressButton}style={{ height: '15%', width: '10%' }} ><Image
          source={{
            uri: '/Users/melliferalabs/Desktop/theProject/joyScore/src/images/Nav Improve Tab OnlyAsset 17xxxhdpi.png'
          }}
          style={{ height: '100%', width: '100%' }}
        /></TouchableOpacity>
        <TouchableOpacity onPress={this._onPressButton}style={{ height: '15%', width: '10%' }} ><Image
          source={{
            uri: '/Users/melliferalabs/Desktop/theProject/joyScore/src/images/Nav Book Tab OnlyAsset 18xxxhdpi.png'
          }}
        style={{ height: '100%', width: '100%' }}
        /></TouchableOpacity></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
alignItems:'center',
    backgroundColor: 'grey'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export default HomeScreen;
