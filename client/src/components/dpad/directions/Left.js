import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import {actionType} from '../../../store/actionTypes'
import {screenHeight, screenWidth } from '../../../constants/screenDimensions'
import {border} from './constants/borders'

class Left extends Component {

  componentDidMount = () => {
    hold = null
}

    leftButton = () => {
      // HOME
        
      if (this.props.location.name === 'home') {
        if (this.props.sprite.x > screenWidth*2.5) {
          this.props.moveSpriteLeft()
        } else if (this.props.home.x < screenWidth) {
          this.props.moveLeft()
        } else if (this.props.sprite.x > screenWidth/12){
          this.props.moveSpriteLeft()
        } else {
          return
        }
      }

      // HOUSE

      if (this.props.location.name === 'house') {
        if (this.props.sprite.x > screenWidth/12) {
          this.props.moveSpriteLeft()
        } else {
          return
        }
      }


      // if (this.props.sprite.x < screenWidth*7/12 && this.props.sprite.y > screenHeight*27/12) {
      //   this.props.activateWild()
      // }

      // activate wild counter from verticle right to left

      if (this.props.sprite.x < screenWidth*20/36 && this.props.sprite.x > screenWidth*19/36 && this.props.sprite.y > screenHeight*85/36) {
        this.props.activateWild()
      }


      if (this.props.wild.isActive) {
        this.props.incrementStepCounter()
      }


    }


    render() {
        return (
            <TouchableOpacity  style={styles.dPadButtonLeft} onPressIn={() => this.hold = setInterval(this.leftButton, 100)}  onPressOut={() => clearInterval(this.hold)}>
              <View><Text style={styles.direction}>LEFT</Text></View>
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

  const mapDispatchToProps = (dispatch) => {
    return {
        moveLeft: () =>  dispatch({type: actionType.MOVE_LEFT}),
        moveSpriteLeft: () => dispatch({type: actionType.MOVE_SPRITE_LEFT}),
        incrementStepCounter: () => dispatch({type: actionType.INCREMENT_WILD_STEP_COUNTER}),
        activateWild: () => dispatch({type: actionType.ACTIVATE_WILD}),deactivateWild: () => dispatch({type: actionType.DEACTIVATE_WILD})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Left)

const styles = StyleSheet.create({
    direction: {
        color: 'white'
      },
      dPadButtonLeft: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderLeftWidth: 5,
        borderLeftColor: 'deeppink',
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        backgroundColor: 'rgba(255, 0, 150, 0.5)'
      }
})