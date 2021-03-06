import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import {actionType} from '../../../store/actionTypes/actionTypes'
import {screenHeight, screenWidth } from '../../../constants/global/screenDimensions'
import {border} from './constants/borders'
import { actionMovement } from '../../../store/actionTypes/actionMovements'

class DownRight extends Component {

  componentDidMount = () => {
    hold = null
}

  downRightButton = () => {
    // HOME
        
    if (this.props.location.name === 'Home') {
      if (screenWidth*14/12 > this.props.sprite.x && this.props.sprite.x > screenWidth*21/24 && screenHeight*35/24 > this.props.sprite.y && this.props.sprite.y > screenHeight*34/24) {
        return
      } else if (screenWidth*14/12 > this.props.sprite.x && this.props.sprite.x > screenWidth*21/24 && screenHeight*37/24 > this.props.sprite.y && this.props.sprite.y > screenHeight*35/24) {
        return
      }
      else if (this.props.sprite.x < screenWidth/2 && this.props.sprite.y < screenHeight/2) {
        this.props.moveSpriteDownRight()
      } else if (this.props.home.x > -screenWidth && this.props.home.y > -screenHeight*13/12) {
        this.props.moveDownRight()
      } else if (this.props.sprite.x < border.homeRightBorder && this.props.sprite.y < border.homeBottomBorder) {
        this.props.moveSpriteDownRight()
      } else {
        return
      }
    }

    // HOUSE

    if (this.props.location.name === 'House') {
      
    }

    if (this.props.sprite.x < screenWidth*21/36 && this.props.sprite.y < screenHeight*86/36 && this.props.sprite.y > screenHeight*85/36) {
      this.props.activateWild()
    }
    if (this.props.sprite.x < screenWidth*21/36 && this.props.sprite.x > screenWidth*20/36 && this.props.sprite.y > screenHeight*56/24) {
      this.props.deactivateWild()
    }

    if (this.props.wild.isActive) {
      this.props.incrementStepCounter()
    }
  }

    render() {
        return (
            <TouchableOpacity style={styles.dPadButtonUpLeft} onPressIn={() => this.hold = setInterval(this.downRightButton, 100)}  onPressOut={() => clearInterval(this.hold)}>
              <View><Text style={styles.direction}>DOWN/Right</Text></View>
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
        moveDownRight: () =>  dispatch({type: actionMovement.MOVE_DOWN_RIGHT}),
        moveSpriteDownRight: () => dispatch({type: actionMovement.MOVE_SPRITE_DOWN_RIGHT}),
        incrementStepCounter: () => dispatch({type: actionType.INCREMENT_WILD_STEP_COUNTER}),
        activateWild: () => dispatch({type: actionType.ACTIVATE_WILD}),
        deactivateWild: () => dispatch({type: actionType.DEACTIVATE_WILD}),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(DownRight)

const styles = StyleSheet.create({
  direction: {
    color: 'white'
  },
  dPadButtonUpLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderBottomWidth: 5,
    borderRightWidth: 5,
    borderRightColor: 'deeppink',
    borderBottomColor: 'deeppink',
    backgroundColor: 'rgba(255, 0, 150, 0.5)'
  }
})