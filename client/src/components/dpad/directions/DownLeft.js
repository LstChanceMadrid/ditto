import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import {actionType} from '../../../store/actionTypes/actionTypes'
import {screenHeight, screenWidth } from '../../../constants/global/screenDimensions'
import {border} from './constants/borders'
import { actionMovement } from '../../../store/actionTypes/actionMovements'

class DownLeft extends Component {

  componentDidMount = () => {
    hold = null
}

  downLeftButton = () => {
    // HOME
    const sprite = this.props.sprite

    if (this.props.location.name === 'Home') {
      if (screenWidth*14/12 > sprite.x && sprite.x > screenWidth*21/24 && sprite.y < screenHeight*35/24  && sprite.y > screenHeight*34/24) {
        return
      } else if (screenWidth*14/12 > sprite.x && sprite.x > screenWidth*21/24 && screenHeight*37/24 > sprite.y && sprite.y > screenHeight*35/24) {
        return
      } else if (sprite.x > screenWidth*2.5 && sprite.y < screenHeight/2) {
        this.props.moveSpriteDownLeft()
      } else if (this.props.home.x < screenWidth && this.props.home.y > -screenHeight*13/12) {
        this.props.moveDownLeft()
      } else if (sprite.x > border.homeLeftBorder && sprite.y < border.homeBottomBorder) {
        this.props.moveSpriteDownLeft()
      } else {
        return
      }
    }

    // HOUSE

    if (this.props.location.name === 'House') {
        
    }

    if (sprite.x < screenWidth*21/36 && sprite.y > screenHeight*85/36) {
      if (sprite.x > screenWidth*19/36) {
        this.props.activateWild()
      }
      if (sprite.y < screenHeight*86/36) {
        this.props.activateWild()
      }
    }

    if (this.props.wild.isActive) {
      this.props.incrementStepCounter()
    }
  }
  
    render() {
        return (
            <TouchableOpacity style={styles.dPadButtonUpRight} onPressIn={() => this.hold = setInterval(this.downLeftButton, 100)}  onPressOut={() => clearInterval(this.hold)}>
              <View><Text style={styles.direction}>DOWN/Left</Text></View>
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
        moveDownLeft: () =>  dispatch({type: actionMovement.MOVE_DOWN_LEFT}),
        moveSpriteDownLeft: () => dispatch({type: actionMovement.MOVE_SPRITE_DOWN_LEFT}),
        incrementStepCounter: () => dispatch({type: actionType.INCREMENT_WILD_STEP_COUNTER}),
        activateWild: () => dispatch({type: actionType.ACTIVATE_WILD}),
        deactivateWild: () => dispatch({type: actionType.DEACTIVATE_WILD}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DownLeft)

const styles = StyleSheet.create({
  dPadButtonUpRight: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderLeftColor: 'deeppink',
    borderBottomColor: 'deeppink',
    backgroundColor: 'rgba(255, 0, 150, 0.5)'
  },
  direction: {
    color: 'white'
  }
})