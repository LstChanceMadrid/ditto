import React, { Component } from 'react'
import { actionLevel } from '../../store/actionTypes/actionLevels'
import { connect } from 'react-redux'
import { actionType } from '../../store/actionTypes/actionTypes';



class EnemyRNG extends Component {
    
    componentDidMount = () => {
        const enemyRNG = this.props.enemy.rNG
        const location = this.props.location.name
        if (location === 'Home') {
            if (enemyRNG <= 50) {
                this.props.levelThree()
                if (enemyRNG <= 40) {
                    this.props.enemyDitto()
                } else {
                    this.props.enemyBulbasaur()
                }
            } else if (enemyRNG <= 80) {
                this.props.levelFour()
                if (enemyRNG <= 70) {
                    this.props.enemyDitto()
                } else {
                    this.props.enemyBulbasaur()
                }
            }  else {
                this.props.levelFive()
                if (enemyRNG <= 95) {
                    this.props.enemyDitto()
                } else {
                    this.props.enemyBulbasaur()
                }
            }
        }
    }



    render() {
        return null
    }
}

const mapStateToProps = state => {
    return ({
        ...state
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        levelThree: () => dispatch({type: actionLevel.LEVEL_3}),
        levelFour: () => dispatch({type: actionLevel.LEVEL_4}),
        levelFive: () => dispatch({type: actionLevel.LEVEL_5}),
        enemyBulbasaur: () => dispatch({type: actionType.ENEMY_BULBASAUR}),
        enemyDitto: () => dispatch({type: actionType.ENEMY_DITTO})
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(EnemyRNG)