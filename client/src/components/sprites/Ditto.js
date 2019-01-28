import React, {Component} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {connect} from 'react-redux'
import {screenWidth, screenHeight} from '../../constants/screenDimensions'

class Ditto extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            ...this.state,
        }
    }

    render() {
        return (
            <Image style={{position: 'absolute', top: this.props.sprite.y, left: this.props.sprite.x}} width={screenWidth/11} height={screenHeight/9} source={{uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"}}/>
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

export default connect(mapStateToProps)(Ditto)