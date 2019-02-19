import React, { Component } from 'react'
import {Navigation} from 'react-native-navigation'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import { screenHeight, screenWidth} from '../../constants/global/screenDimensions'

import UpLeft from './directions/UpLeft'
import Up from './directions/Up'
import UpRight from './directions/UpRight'
import Left from './directions/Left'
import Right from './directions/Right'
import DownLeft from './directions/DownLeft'
import Down from './directions/Down'
import DownRight from './directions/DownRight'
import { actionType } from '../../store/actionTypes/actionTypes';

class DPad extends Component {

    newLevel = () => {
        if (this.props.location.name === 'home' && this.props.sprite.x > screenWidth && this.props.sprite.x < screenWidth*16/12) {
          if (this.props.sprite.y > screenHeight*17/12 && this.props.sprite.y < screenHeight*19/12) {
            Navigation.setRoot({
              root: {
                component: {
                  id: 'NewLevel',
                  name: 'NewLevel'
                }
              }
            })
          }
        } else {
          return
        }
      }

    render() {
        return (
          <View style={{flex:1, position: 'absolute', top: this.props.dPad.y, left: this.props.dPad.x, width: screenWidth/2, height: screenHeight/4}}>
            <View style={styles.horizontal}>
              <UpLeft />

              <Up />

              <UpRight />
            </View>

            <View style={styles.horizontal}>
              <Left />

              <TouchableOpacity  style={styles.analog} onPress={() => this.newLevel()}>
              <View><Text style={styles.direction}>A Log</Text></View>
              </TouchableOpacity>

              <Right />
            </View>

            <View style={styles.horizontal}>
              <DownLeft />

              <Down />

              <DownRight />
            </View>
          </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
  return {
    resetDitto: () => dispatch({type: actionType.RESET_DITTO})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DPad)

const styles = StyleSheet.create({
    dPad: {
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 150,
        height: 150,
        backgroundColor: 'rgba(50, 50, 50, 0.5)'
      },
      horizontal: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      },
      analog: {
        width: '25%',
        height: '100%',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 100
      },
      direction: {
        color: 'white'
      }
})