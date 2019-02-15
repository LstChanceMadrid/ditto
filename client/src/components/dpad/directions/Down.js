import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import {actionType} from '../../../store/actionTypes/actionTypes'
import {screenHeight, screenWidth } from '../../../constants/screenDimensions'
import {border} from './constants/borders'
import { actionMovement } from '../../../store/actionTypes/actionMovements'

class Down extends Component {

    componentDidMount = () => {
        hold = null
    }

    downButton = () => {
        // HOME
        
        if(this.props.location.name === 'Home'){
            if (this.props.sprite.x < screenWidth*14/12 && this.props.sprite.x > screenWidth*21/24 && screenHeight*35/24 > this.props.sprite.y && this.props.sprite.y > screenHeight*34/24) {
                return
            } else if (this.props.sprite.x < screenWidth*14/12 && this.props.sprite.x > screenWidth*21/24 && this.props.sprite.y < screenHeight*37/24 && this.props.sprite.y > screenHeight*35/24) {
                return
            } else if (this.props.sprite.y < screenHeight*5/12) {
                this.props.moveSpriteDown()
            } else if (this.props.home.y > -screenHeight*13/12) {
            this.props.moveDown()
            } else if (this.props.sprite.y < border.homeBottomBorder) {
                this.props.moveSpriteDown()
            } else {
                return
            }
        }

        // HOUSE

            // if (this.props.location.name === 'House') {
            
            // }
            
            if (this.props.sprite.x < screenWidth*20/36 && this.props.sprite.y > screenHeight*85/36) {
                this.props.activateWild()
            }
            if (this.props.wild.isActive) {
                this.props.incrementStepCounter()
              }
    }

    

    render() {

        return (
            <TouchableOpacity style={styles.dPadButtonDown} onPressIn={() => this.hold = setInterval(this.downButton, 100)}  onPressOut={() => clearInterval(this.hold)}>
              <View><Text style={styles.direction}>DOWN</Text></View>
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
        moveDown: () =>  dispatch({type: actionMovement.MOVE_DOWN}),
        moveSpriteDown: () => dispatch({type: actionMovement.MOVE_SPRITE_DOWN}),
        incrementStepCounter: () => dispatch({type: actionType.INCREMENT_WILD_STEP_COUNTER}),
        activateWild: () => dispatch({type: actionType.ACTIVATE_WILD}),deactivateWild: () => dispatch({type: actionType.DEACTIVATE_WILD})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Down)

let styles = StyleSheet.create({
    dPadButtonDown: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderBottomWidth: 5,
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomColor: 'deeppink',
        backgroundColor: 'rgba(255, 0, 150, 0.5)'
      },
      direction: {
        color: 'white'
      },
})