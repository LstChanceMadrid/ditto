import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import {actionType} from '../../../store/actionTypes'
import {screenHeight, screenWidth } from '../../../constants/screenDimensions'
import {border} from './constants/borders'

class UpRight extends Component {

  upRightButton = () => {
    const sprite = this.props.sprite
    const location = this.props.location
    const home = this.props.home

    // HOME
    if(location.name === 'home'){
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
    if (location.name === 'house') {
        
    }
  }

  render() {
    return (
      <TouchableOpacity style={styles.dPadButtonUpRight} onPress={() => this.upRightButton()}>
        <View><Text style={styles.direction}>UP/Right</Text></View>
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
    moveUpRight: () =>  dispatch({type: actionType.MOVE_UP_RIGHT}),
    moveSpriteUpRight: () => dispatch({type: actionType.MOVE_SPRITE_UP_RIGHT})
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
    borderLeftWidth: 5,
    borderTopColor: 'deeppink',
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    backgroundColor: 'rgba(255, 0, 150, 0.5)'
  }
})