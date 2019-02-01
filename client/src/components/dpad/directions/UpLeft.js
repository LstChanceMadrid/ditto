import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import {actionType} from '../../../store/actionTypes'
import {screenHeight, screenWidth } from '../../../constants/screenDimensions'
import {border} from './constants/borders'

class UpLeft extends Component {

  componentDidMount = () => {
    hold = null
}

  upLeftButton = () => {
    // HOME
        
    if(this.props.location.name === 'home'){
      if (screenWidth*14/12 > this.props.sprite.x && this.props.sprite.x > screenWidth*21/24 && screenHeight*36/24 > this.props.sprite.y && this.props.sprite.y > screenHeight*34/24) {
          return
      } else if (screenWidth*14/12 > this.props.sprite.x && this.props.sprite.x > screenWidth*21/24 && screenHeight*75/48 > this.props.sprite.y && this.props.sprite.y > screenHeight*73/48) {
        return
      } else if (this.props.sprite.x > screenWidth*2.5 && this.props.sprite.y > screenHeight*2.5) {
        this.props.moveSpriteUpLeft()
      } else if (this.props.home.x < screenWidth && this.props.home.y < screenHeight) {
        this.props.moveUpLeft()
      } else if (this.props.sprite.x > border.homeLeftBorder && this.props.sprite.y > border.homeTopBorder) {
        this.props.moveSpriteUpLeft()
      } else {
        return
      }
  }

  // HOUSE

  if (this.props.location.name === 'house') {
      
  }


  if (this.props.sprite.x < screenWidth*20/36 && this.props.sprite.x > screenWidth*19/36 && this.props.sprite.y > screenHeight*56/24) {
    this.props.activateWild()
  }
  if (this.props.sprite.x < screenWidth*21/36 && this.props.sprite.y < screenHeight*85/36 && this.props.sprite.y > screenHeight*84/36) {
    this.props.deactivateWild()
  }

  if (this.props.wild.isActive) {
    this.props.incrementStepCounter()
  }
}

    render() {
        return (
            <TouchableOpacity style={styles.dPadButtonUpLeft} onPressIn={() => this.hold = setInterval(this.upLeftButton, 100)}  onPressOut={() => clearInterval(this.hold)}>
              <View><Text style={styles.direction}>UP/Left</Text></View>
            </TouchableOpacity>
        )
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
        moveUpLeft: () =>  dispatch({type: actionType.MOVE_UP_LEFT}),
        moveSpriteUpLeft: () => dispatch({type: actionType.MOVE_SPRITE_UP_LEFT}),
        incrementStepCounter: () => dispatch({type: actionType.INCREMENT_WILD_STEP_COUNTER}),
        activateWild: () => dispatch({type: actionType.ACTIVATE_WILD}),deactivateWild: () => dispatch({type: actionType.DEACTIVATE_WILD})
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(UpLeft)

const styles = StyleSheet.create({
  direction: {
    color: 'white'
  },
  dPadButtonUpLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderTopColor: 'deeppink',
    borderLeftColor: 'deeppink',
    backgroundColor: 'rgba(255, 0, 150, 0.5)'
  }
})