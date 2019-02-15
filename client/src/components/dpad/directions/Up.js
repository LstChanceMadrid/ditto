import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import {actionType} from '../../../store/actionTypes/actionTypes'
import {screenHeight, screenWidth } from '../../../constants/screenDimensions'
import {border} from './constants/borders'

class Up extends Component {

  componentDidMount = () => {
    hold = null
}

  upButton = () => {
    // HOME
        
    if(this.props.location.name === 'Home'){
      if (screenWidth*14/12 > this.props.sprite.x && this.props.sprite.x > screenWidth*21/24 && screenHeight*36/24 > this.props.sprite.y && this.props.sprite.y > screenHeight*34/24) {
        return
      } else if (screenWidth*14/12 > this.props.sprite.x && this.props.sprite.x > screenWidth*21/24 && screenHeight*75/48 > this.props.sprite.y && this.props.sprite.y > screenHeight*73/48) {
        return
      } else if (this.props.sprite.y > screenHeight*2.5) {
        this.props.moveSpriteUp()
      } else if (this.props.home.y < screenHeight) {
        this.props.moveUp()
      } else if (this.props.sprite.y > border.homeTopBorder) {
        this.props.moveSpriteUp()
      } else {
        return
      }
    }

  // HOUSE

    if (this.props.location.name === 'House') {
        
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
            <TouchableOpacity style={styles.dPadButtonUp} onPressIn={() => this.hold = setInterval(this.upButton, 100)}  onPressOut={() => clearInterval(this.hold)}>
              <View><Text style={styles.direction}>UP</Text></View>
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
        moveUp: () =>  dispatch({type: actionType.MOVE_UP}),
        moveSpriteUp: () => dispatch({type: actionType.MOVE_SPRITE_UP}),
        incrementStepCounter: () => dispatch({type: actionType.INCREMENT_WILD_STEP_COUNTER}),
        activateWild: () => dispatch({type: actionType.ACTIVATE_WILD}),deactivateWild: () => dispatch({type: actionType.DEACTIVATE_WILD})
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Up)

const styles = StyleSheet.create({
  direction: {
    color: 'white'
  },
  dPadButtonUp: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopColor: 'deeppink',
    backgroundColor: 'rgba(255, 0, 150, 0.5)'
  }
})