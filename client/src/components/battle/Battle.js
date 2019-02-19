import React, { Component } from 'react'
import { StyleSheet, View} from 'react-native'
import { connect } from 'react-redux'
import { actionType } from '../../store/actionTypes/actionTypes'
import {Navigation} from 'react-native-navigation'
import {screenHeight, screenWidth } from '../../constants/global/screenDimensions'
import { styles } from './constants/styles'

import Enemy from './opponent/Enemy'
import Player from './player/Player'
import BattleOptions from './options/BattleOptions';
import { actionLevel } from '../../store/actionTypes/actionLevels'
import EnemyRNG from './constants/EnemyRNG'


class Battle extends Component {

    componentWillUnmount = () => {
        this.props.resetEnemyHealth()
        this.props.resetWildStepCounter()
        this.props.battleActions()
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
            <View style={styles.battleContainer}>
                <Enemy />
                <Player />
                <BattleOptions />
                    <EnemyRNG />

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
        battleActions: () => dispatch({type: actionType.BATTLE_ACTIONS}),
        resetWildStepCounter: () => dispatch({type: actionType.RESET_WILD_STEP_COUNTER}),
        resetEnemyHealth: () => dispatch({type: actionType.RESET_ENEMY_HEALTH})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Battle)