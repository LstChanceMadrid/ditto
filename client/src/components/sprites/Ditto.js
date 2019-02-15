import React, {Component} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {connect} from 'react-redux'
import {screenWidth, screenHeight} from '../../constants/screenDimensions'
import {pokemonSprite} from '../../constants/pokemonSprites'

class Ditto extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            ...this.state,
        }
    }

    render() {
        return (
            <Image
                style={{
                    position: 'absolute',
                    top: this.props.sprite.y,
                    left: this.props.sprite.x,
                    width: screenWidth*4/36,
                    height: screenHeight*4/36
                }} 
                source={{uri:
                    pokemonSprite.ditto.male.shiny.front
                }}
            />    
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Ditto)