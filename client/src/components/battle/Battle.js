import React, { Component } from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import {actionType} from '../../store/actionTypes'
import {Navigation} from 'react-native-navigation'
import {screenHeight, screenWidth } from '../../constants/screenDimensions'

import Enemy from './Enemy'
import Player from './Player'
import BattleActions from './BattleActions';

class Battle extends Component {

    
    componentWillMount = () => {
        if (Math.random().toFixed(2)*100 <= 50) {
            this.props.enemyBulbasaur()
        } else {
            this.props.enemyDitto()
        }
    }

    componentWillUnmount = () => {
        this.props.resetEnemyHealth()
    }


    render() {
        return (
            <View style={styles.container}>
                <Enemy />
                <Player />
                <BattleActions />
            </View>
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
        enemyBulbasaur: () => dispatch({type: actionType.ENEMY_BULBASAUR}),
        enemyDitto: () => dispatch({type: actionType.ENEMY_DITTO}),
        resetEnemyHealth: () => dispatch({type: actionType.RESET_ENEMY_HEALTH})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Battle)

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: screenHeight,
    }
})