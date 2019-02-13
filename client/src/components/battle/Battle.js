import React, { Component } from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import {actionType} from '../../store/actionTypes'
import {Navigation} from 'react-native-navigation'
import {screenHeight, screenWidth } from '../../constants/screenDimensions'

import Enemy from './Enemy'
import Player from './Player'
import BattleActions from './BattleActions';
import {level} from '../../store/actionTypes/levels'

class Battle extends Component {

    
    componentWillMount = () => {
        const enemyPokemonRNG = Math.random().toFixed(2)*100
        const enemyLevelRNG = Math.random().toFixed(2)*10

        if (this.props.location.name === 'Home') {
            if (enemyPokemonRNG <= 50) {
                this.props.enemyBulbasaur()
            } else {
                this.props.enemyDitto()
            }

            if (enemyLevelRNG <= 2) {
                this.props.levelFive()
            } else if (enemyLevelRNG <= 6) {
                this.props.levelFour()
            } else {
                this.props.levelThree()
            }
        }
    }

    componentWillReceiveProps = () => {
        
    }

    componentWillUnmount = () => {
        this.props.resetEnemyHealth()
        this.props.resetWildStepCounter()
        this.props.BattleActions()
    }


    render() {
        if (this.props.enemy.hP < 1) {
            
            Navigation.setRoot({
                root: {
                    component: {
                        id: this.props.location.name,
                        name: this.props.location.name
                    }
                }
            })
        }
        
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
        enemy: {
            ...state.enemy
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        levelThree: () => dispatch({type: level.LEVEL_3}),
        levelFour: () => dispatch({type: level.LEVEL_4}),
        levelFive: () => dispatch({type: level.LEVEL_5}),
        BattleActions: () => dispatch({type: actionType.BATTLE_ACTIONS}),
        resetWildStepCounter: () => dispatch({type: actionType.RESET_WILD_STEP_COUNTER}),
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