import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import {actionType} from '../../../store/actionTypes'
import {screenHeight, screenWidth } from '../../../constants/screenDimensions'

class Down extends Component {

    homeDownButton = () => {
        if(this.props.location.name === 'home'){
            if (screenWidth*14/12 > this.props.sprite.x && this.props.sprite.x > screenWidth*21/24 && screenHeight*35/24 > this.props.sprite.y && this.props.sprite.y > screenHeight*34/24) {
                return
            } else if (screenWidth*14/12 > this.props.sprite.x && this.props.sprite.x > screenWidth*21/24 && screenHeight*37/24 > this.props.sprite.y && this.props.sprite.y > screenHeight*35/24) {
return
            } else if (this.props.sprite.y < screenHeight*5/12) {
                this.props.moveSpriteDown()
            } else if (this.props.home.y > -screenHeight) {
            this.props.moveDown()
            } else if (this.props.sprite.y < screenHeight*31/12) {
                this.props.moveSpriteDown()
            } else {
                return
            }
        }




    }

    render() {
        console.log(this.props)
        return (
            <TouchableOpacity style={styles.dPadButtonDown} onPress={() => this.homeDownButton()}>
              <View><Text style={styles.direction}>DOWN</Text></View>
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
        moveDown: () =>  dispatch({type: actionType.MOVE_DOWN}),
        moveSpriteDown: () => dispatch({type: actionType.MOVE_SPRITE_DOWN})
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
        borderBottomColor: 'deeppink',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        backgroundColor: 'rgba(255, 0, 150, 0.5)'
      },
      direction: {
        color: 'white'
      },
})