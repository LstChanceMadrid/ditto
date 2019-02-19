import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { actionType } from '../../../store/actionTypes/actionTypes'
import { screenHeight, screenWidth } from '../../../constants/global/screenDimensions'
import { Navigation } from 'react-native-navigation'
import AttackOptions from './attack/Attack'
import BagOptions from './bag/BagOptions'
import PokemonOptions from './pokemon/Pokemon'

class BattleOptions extends Component {

    run = () => {
        this.props.resetWildStepCounter()
        Navigation.setRoot({
            root: {
                component: {
                    id: 'Home',
                    name: "Home"
                }
            }
        })
    }

    battleOptions = () => {
        return (
            <View style={styles.actionContainer}>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.actions} onPress={() => this.props.attackOptions()}>
                        <View><Text>Attack</Text></View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actions} onPress={() => this.props.bagOptions()}>
                        <View><Text>Bag</Text></View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.actions} onPress={() => this.run()}>
                        <View><Text>Run Away</Text></View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.actions} onPress={() => this.props.pokemonOptions()}>
                        <View><Text>Pokemon</Text></View>
                    </TouchableOpacity>
                </View>
            </View> 
        )
    }

    render() {
        if (this.props.battleStatus.isAttackOptions) {
            return (
                <AttackOptions />
            )
        } else if (this.props.battleStatus.isBagOptions) {
            return (
                <View style={styles.actionContainer}>
                    <BagOptions />
                </View>
            )
        } else if (this.props.battleStatus.isPokemonOptions) {
            return (
                <View style={styles.actionContainer}>
                    <PokemonOptions />
                </View>
            )
        } else {
            return (     
                <View>{this.battleOptions()}</View>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        attackOptions: () => dispatch({type: actionType.ATTACK_OPTIONS}),
        bagOptions: () => dispatch({type: actionType.BAG_OPTIONS}),
        resetWildStepCounter: () => dispatch({type: actionType.RESET_WILD_STEP_COUNTER}),
        pokemonOptions: () => dispatch({type: actionType.POKEMON_OPTIONS})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleOptions)

const styles = StyleSheet.create({
    actionContainer: {
        flexDirection: 'row',
        width: screenWidth,
        height: screenHeight*3/8,
        backgroundColor: 'yellow'
    },
    actions: {
        flex: 1, justifyContent: 'center', alignItems: 'center', width: screenWidth, borderTopWidth: 1,
    }
})