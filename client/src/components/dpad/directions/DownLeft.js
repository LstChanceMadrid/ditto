import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import {actionType} from '../../../store/actionTypes'
import {screenHeight, screenWidth } from '../../../constants/screenDimensions'


class DownLeft extends Component {

  downLeftButton = () => {
    // HOME

    if (this.props.location.name === 'home') {
      if (screenWidth*14/12 > this.props.sprite.x && this.props.sprite.x > screenWidth*21/24 && screenHeight*35/24 > this.props.sprite.y && this.props.sprite.y > screenHeight*34/24) {
        return
      } else if (screenWidth*14/12 > this.props.sprite.x && this.props.sprite.x > screenWidth*21/24 && screenHeight*37/24 > this.props.sprite.y && this.props.sprite.y > screenHeight*35/24) {
        return
      } else if (this.props.sprite.x > screenWidth*2.5 && this.props.sprite.y < screenHeight/2) {
        this.props.moveSpriteDownLeft()
      } else if (this.props.home.x < screenWidth && this.props.home.y > -screenHeight) {
        this.props.moveDownLeft()
      } else if (this.props.sprite.x > screenWidth/12 && this.props.sprite.y < screenHeight*63/24) {
        this.props.moveSpriteDownLeft()
      } else {
        return
      }
    }

    // HOUSE

    if (this.props.location.name === 'house') {
        
    }
  }
  
    render() {
        return (
            <TouchableOpacity style={styles.dPadButtonUpRight} onPress={() => this.downLeftButton()}>
              <View><Text style={styles.direction}>DOWN/Left</Text></View>
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
        moveDownLeft: () =>  dispatch({type: actionType.MOVE_DOWN_LEFT}),
        moveSpriteDownLeft: () => dispatch({type: actionType.MOVE_SPRITE_DOWN_LEFT})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DownLeft)

const styles = StyleSheet.create({
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
  },
  direction: {
    color: 'white'
  }
})