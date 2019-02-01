
import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Navigation} from 'react-native-navigation'
import {connect} from 'react-redux'


import {screenHeight, screenWidth} from '../../constants/screenDimensions'

import Ditto from '../sprites/Ditto'
import DPad from '../dpad/DPad'
import HomeUpLeft from './home/HomeUpLeft';
import HomeUpCenter from './home/HomeUpCenter';
import HomeUpRight from './home/HomeUpRight';
import HomeLeft from './home/HomeLeft';
import HomeCenter from './home/HomeCenter';
import HomeRight from './home/HomeRight';
import HomeDownLeft from './home/HomeDownLeft';
import HomeDownCenter from './home/HomeDownCenter';
import HomeDownRight from './home/HomeDownRight';
import { actionType } from '../../store/actionTypes';


class Home extends Component {

  componentWillReceiveProps = () => {
    

    if (this.props.sprite.x > screenWidth/2 && this.props.sprite.x < screenWidth && this.props.sprite.y > screenHeight*16/12 && this.props.sprite.y < screenHeight*19/12 ) {
      Navigation.setRoot({
        root: {
          component: {
            id: 'House',
            name: 'House'
          }
        }
      })
    }

    if (this.props.wild.stepCounter > 25) {
      Navigation.setRoot({
        root: {
          component: {
            id: 'Battle',
            name: 'Battle'
          }
        }
      })
    }

  }

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

const mapDispatchToProps = dispatch => {
  return {
    resetDitto: () => dispatch({type: actionType.RESET_DITTO}),
    activateWild: () => dispatch({type: actionType.ACTIVATE_WILD})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


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
