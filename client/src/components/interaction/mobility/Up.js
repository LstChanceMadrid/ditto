import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import {actionType} from '../../../store/actionTypes'
import {screenHeight, screenWidth } from '../../../constants/screenDimensions'

class Up extends Component {

  upButton = () => {
    if(this.props.location.name === 'home'){
      if (screenWidth*14/12 > this.props.sprite.x && this.props.sprite.x > screenWidth*21/24 && screenHeight*36/24 > this.props.sprite.y && this.props.sprite.y > screenHeight*34/24) {
          return
      } else if (screenWidth*14/12 > this.props.sprite.x && this.props.sprite.x > screenWidth*21/24 && screenHeight*75/48 > this.props.sprite.y && this.props.sprite.y > screenHeight*73/48) {
        return
      } else if (this.props.sprite.y > screenHeight*2.5) {
      this.props.moveSpriteUp()
    } else if (this.props.home.y < screenHeight) {
      this.props.moveUp()
    } else if (this.props.sprite.y > screenHeight*2/36) {
      this.props.moveSpriteUp()
    } else {
      return
    }
  }
  }

    render() {
        return (
            <TouchableOpacity style={styles.dPadButtonUp} onPress={() => this.upButton()}>
              <View><Text style={styles.direction}>UP</Text></View>
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
        moveUp: () =>  dispatch({type: actionType.MOVE_UP}),
        moveSpriteUp: () => dispatch({type: actionType.MOVE_SPRITE_UP})
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
    borderTopWidth: 15,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderTopColor: 'black',
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    backgroundColor: 'rgba(255, 0, 150, 0.5)'
  }
})