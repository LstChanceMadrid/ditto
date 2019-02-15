import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import {actionType} from '../../../store/actionTypes/actionTypes'
import {screenHeight, screenWidth } from '../../../constants/screenDimensions'
import {border} from './constants/borders'
import { actionMovement } from '../../../store/actionTypes/actionMovements'

class Right extends Component {

  componentDidMount = () => {
    hold = null
}

  rightButton = () => {
    // HOME

    if (this.props.location.name === 'Home') {
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

    if (this.props.location.name === 'House') {
      if (this.props.sprite.x < screenWidth*10/12) {
        this.props.moveSpriteRight()
      }
    }



    if (this.props.sprite.x < screenWidth*21/36 && this.props.sprite.x > screenWidth*20/36 && this.props.sprite.y > screenHeight*85/36) {
      this.props.deactivateWild()
    }

    if (this.props.wild.isActive) {
      this.props.incrementStepCounter()
    }





  }

    render() {
        return (
            <TouchableOpacity   style={styles.dPadButtonRight} onPressIn={() => this.hold = setInterval(this.rightButton, 100)}  onPressOut={() => clearInterval(this.hold)}>
              <View><Text style={styles.direction}>RIGHT</Text></View>
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
        moveRight: () =>  dispatch({type: actionMovement.MOVE_RIGHT}),
        moveSpriteRight: () => dispatch({type: actionMovement.MOVE_SPRITE_RIGHT}),
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
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderRightColor: 'deeppink',
    backgroundColor: 'rgba(255, 0, 150, 0.5)'
  }
})