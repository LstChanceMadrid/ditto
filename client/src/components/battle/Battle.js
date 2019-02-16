import React, { Component } from 'react'
import { StyleSheet, View} from 'react-native'
import { connect } from 'react-redux'
import {actionType} from '../../store/actionTypes/actionTypes'
import {Navigation} from 'react-native-navigation'
import {screenHeight, screenWidth } from '../../constants/screenDimensions'

import Enemy from './Enemy'
import Player from './Player'
import BattleActions from './BattleActions';
import { actionLevel } from '../../store/actionTypes/actionLevels'


class Battle extends Component {

    
    componentDidMount = () => {
        const enemyRNG = this.props.enemy.rNG
        
        if (this.props.location.name === 'Home') {
            if (enemyRNG <= 5) {
                this.props.levelFive()
                this.props.enemyBulbasaur()
            } else if (enemyRNG <= 10) {
                this.props.levelFive()
                this.props.enemyDitto()
            } else if (enemyRNG <= 40) {
                this.props.levelFour()
                this.props.enemyBulbasaur()
            } else if (enemyRNG <= 70) {
                this.props.levelFour()
                this.props.enemyDitto()
            } else if (enemyRNG <= 85) {
                this.props.levelThree()
                this.props.enemyBulbasaur()
            } else {
                this.props.levelThree()
                this.props.enemyDitto()
            }
        }
    }

    componentWillUnmount = () => {
        this.props.resetEnemyHealth()
        this.props.resetWildStepCounter()
        this.props.BattleActions()
    }


    render() {
        if (this.props.enemy.hP + this.props.enemy.lvl < 1) {
            
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
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        levelThree: () => dispatch({type: actionLevel.LEVEL_3}),
        levelFour: () => dispatch({type: actionLevel.LEVEL_4}),
        levelFive: () => dispatch({type: actionLevel.LEVEL_5}),
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