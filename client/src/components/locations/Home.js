/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Navigation} from 'react-native-navigation'
import {connect} from 'react-redux'


import {screenHeight, screenWidth} from '../../constants/screenDimensions'

import Ditto from '../sprites/Ditto'
import DPad from '../interaction/DPad'
import HomeUpLeft from './home/HomeUpLeft';
import HomeUpCenter from './home/HomeUpCenter';
import HomeUpRight from './home/HomeUpRight';
import HomeLeft from './home/HomeLeft';
import HomeCenter from './home/HomeCenter';
import HomeRight from './home/HomeRight';
import HomeDownLeft from './home/HomeDownLeft';
import HomeDownCenter from './home/HomeDownCenter';
import HomeDownRight from './home/HomeDownRight';


class Home extends Component {

  render() {

    return (
      <View style={{position: 'absolute', top: -screenHeight, left: -screenWidth, backgroundColor: 'rgba(150, 150, 150, 0.7)', marginTop: this.props.home.y, marginLeft: this.props.home.x}} width={screenWidth*3} height={screenHeight*3}>
        
        <View style={styles.horizontal} width={screenWidth*3} height={screenHeight*1}>
          <HomeUpLeft />
          <HomeUpCenter />
          <HomeUpRight />
        </View>
        <View style={styles.horizontal} width={screenWidth*3} height={screenHeight*1}>
          <HomeLeft />
          <HomeCenter />
          <HomeRight />
        </View>
        <View style={styles.horizontal} width={screenWidth*3} height={screenHeight*1}>
          <HomeDownLeft />
          <HomeDownCenter />
          <HomeDownRight />
        </View>
        <Ditto />
        <DPad />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    sprite: {
      ...state.sprite
    }
  }
}

export default connect(mapStateToProps)(Home)


const styles = StyleSheet.create({
  horizontal: {
    flex: 1,
    flexDirection: 'row'
  },
  welcome: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
    paddingTop: 100,
    paddingLeft: 500
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  newScreen: {
    backgroundColor: 'red',
    position: 'absolute',
    top: '50%',
    right: 0
  }
});
