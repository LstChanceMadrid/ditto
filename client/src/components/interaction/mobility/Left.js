import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import {actionType} from '../../../store/actionTypes'
import {screenHeight, screenWidth } from '../../../constants/screenDimensions'

class Left extends Component {

    leftButton = () => {
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
      }


    render() {
        return (
            <TouchableOpacity  style={styles.dPadButtonLeft} onPress={() => this.leftButton()}>
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
        moveSpriteLeft: () => dispatch({type: actionType.MOVE_SPRITE_LEFT})
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