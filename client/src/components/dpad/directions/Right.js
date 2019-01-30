import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import {actionType} from '../../../store/actionTypes'
import {screenHeight, screenWidth } from '../../../constants/screenDimensions'
import {border} from './constants/borders'

class Right extends Component {

  rightButton = () => {
    // HOME

    if (this.props.location.name === 'home') {
      if (this.props.sprite.x < screenWidth/2) {
        this.props.moveSpriteRight()
      } else if (this.props.home.x > -screenWidth) {
        this.props.moveRight()
      } else if (this.props.sprite.x < border.homeRightBorder) {
        this.props.moveSpriteRight()
      } else {
        return
      }
    }

    // HOUSE

    if (this.props.location.name === 'house') {
      if (this.props.sprite.x < screenWidth*10/12) {
        this.props.moveSpriteRight()
      }
    }



    if (this.props.sprite.x < screenWidth*7/12 && this.props.sprite.x > screenWidth*6/12 && this.props.sprite.y > screenHeight*56/24) {
      this.props.deactivateWild()
    }

    if (this.props.wild.isActive) {
      this.props.incrementStepCounter()
    }





  }

    render() {
        return (
            <TouchableOpacity   style={styles.dPadButtonRight} onPress={() => this.rightButton()}>
              <View><Text style={styles.direction}>RIGHT</Text></View>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = state => {
    return {
      ...state,
      sprite: {
        x: state.sprite.x,
        y: state.sprite.y
      }
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        moveRight: () =>  dispatch({type: actionType.MOVE_RIGHT}),
        moveSpriteRight: () => dispatch({type: actionType.MOVE_SPRITE_RIGHT}),
        deactivateWild: () => dispatch({type: actionType.DEACTIVATE_WILD}),
        incrementStepCounter: () => dispatch({type: actionType.INCREMENT_WILD_STEP_COUNTER})
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Right)

const styles = StyleSheet.create({
  direction: {
    color: 'white'
  },
  dPadButtonRight: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRightWidth: 5,
    borderRightColor: 'deeppink',
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: 'rgba(255, 0, 150, 0.5)'
  }
})