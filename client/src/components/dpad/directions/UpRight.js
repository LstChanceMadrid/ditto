import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import {actionType} from '../../../store/actionTypes/actionTypes'
import {screenHeight, screenWidth } from '../../../constants/screenDimensions'
import {border} from './constants/borders'

class UpRight extends Component {

  componentDidMount = () => {
    hold = null
}

  upRightButton = () => {
    const sprite = this.props.sprite
    const location = this.props.location
    const home = this.props.home

    // HOME
    if(location.name === 'Home'){
      if (screenWidth*14/12 > sprite.x && sprite.x > screenWidth*21/24 && screenHeight*36/24 > sprite.y && sprite.y > screenHeight*34/24) {
          return
      } else if (screenWidth*14/12 > sprite.x && sprite.x > screenWidth*21/24 && screenHeight*75/48 > sprite.y && sprite.y > screenHeight*73/48) {
        return
      } else if (sprite.x < screenWidth/2 && sprite.y < screenHeight/2 && sprite.y > screenHeight/12) {
      this.props.moveSpriteUpRight()
      } else if (home.x > -screenWidth && home.y < screenHeight) {
        this.props.moveUpRight()
      } else if (sprite.x < border.homeRightBorder && sprite.y > border.homeTopBorder) {
        this.props.moveSpriteUpRight()
      } else {
        return
      }
    }

    // HOUSE
    if (location.name === 'House') {
        
    }

    if (this.props.sprite.x < screenWidth*21/36 && this.props.sprite.y > screenHeight*84/36) {
      if (this.props.sprite.x > screenWidth*20/36) {
        this.props.deactivateWild()
      }
      if (this.props.sprite.y < screenHeight*85/36) {
        this.props.deactivateWild()
      }
    }

    if (this.props.wild.isActive) {
      this.props.incrementStepCounter()
    }
  
  }

  render() {
    return (
      <TouchableOpacity style={styles.dPadButtonUpRight} onPressIn={() => this.hold = setInterval(this.upRightButton, 100)}  onPressOut={() => clearInterval(this.hold)}>
        <View><Text style={styles.direction}>UP/Right</Text></View>
      </TouchableOpacity>
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
    moveUpRight: () =>  dispatch({type: actionType.MOVE_UP_RIGHT}),
    moveSpriteUpRight: () => dispatch({type: actionType.MOVE_SPRITE_UP_RIGHT}),
    incrementStepCounter: () => dispatch({type: actionType.INCREMENT_WILD_STEP_COUNTER}),
    activateWild: () => dispatch({type: actionType.ACTIVATE_WILD}),deactivateWild: () => dispatch({type: actionType.DEACTIVATE_WILD})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpRight)

const styles = StyleSheet.create({
  direction: {
    color: 'white'
  },
  dPadButtonUpRight: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderTopColor: 'deeppink',
    borderRightColor: 'deeppink',
    backgroundColor: 'rgba(255, 0, 150, 0.5)'
  }
})