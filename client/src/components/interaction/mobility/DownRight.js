import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import {actionType} from '../../../store/actionTypes'
import {screenHeight, screenWidth } from '../../../constants/screenDimensions'

class DownRight extends Component {

  downRightButton = () => {
    if (this.props.location.name === 'home') {
      if (screenWidth*14/12 > this.props.sprite.x && this.props.sprite.x > screenWidth*21/24 && screenHeight*35/24 > this.props.sprite.y && this.props.sprite.y > screenHeight*34/24) {
        return
      } else if (screenWidth*14/12 > this.props.sprite.x && this.props.sprite.x > screenWidth*21/24 && screenHeight*37/24 > this.props.sprite.y && this.props.sprite.y > screenHeight*35/24) {
        return
      }
      else if (this.props.sprite.x < screenWidth/2 && this.props.sprite.y < screenHeight/2) {
        this.props.moveSpriteDownRight()
      } else if (this.props.home.x > -screenWidth && this.props.home.y > -screenHeight) {
        this.props.moveDownRight()
      } else if (this.props.sprite.x < screenWidth*33/12 && this.props.sprite.y < screenHeight*31/12) {
        this.props.moveSpriteDownRight()
      } else {
        return
      }
    }
  }

    render() {
        return (
            <TouchableOpacity style={styles.dPadButtonUpLeft} onPress={() => this.downRightButton()}>
              <View><Text style={styles.direction}>DOWN/Right</Text></View>
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
        moveDownRight: () =>  dispatch({type: actionType.MOVE_DOWN_RIGHT}),
        moveSpriteDownRight: () => dispatch({type: actionType.MOVE_SPRITE_DOWN_RIGHT})
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
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderTopColor: 'deeppink',
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 100,
    backgroundColor: 'rgba(255, 0, 150, 0.5)'
  }
})