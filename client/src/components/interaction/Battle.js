import React, { Component } from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import {actionType} from '../../store/actionTypes'
import {Navigation} from 'react-native-navigation'
import {screenHeight, screenWidth } from '../../constants/screenDimensions'

class Battle extends Component {

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



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.enemyContainer}>
                    <View style={styles.enemyInfo}>
                    <Text>enemy name</Text>
                        <View style={styles.healthBar}>
                            <Text style={styles.healthNumber}>Health/Health</Text>    
                        </View>
                        <Text>Lvl: 2</Text>
                    </View>
                    <Image style={{position: 'absolute',top: 0, right: screenWidth*1/36}} width={screenWidth*18/36} height={screenHeight*12/36} source={{uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}} />
                </View>
                <View style={styles.playerContainer}>
                    <Image style={{position: 'absolute', top: 0, left: 0}}width={screenWidth*21/36} height={screenHeight*15/36} source={{uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png"}} />
                    <View style={styles.playerInfo}>
                    <Text>Player name</Text>
                    <View style={styles.healthBar}>
                            <Text style={styles.healthNumber}>Health/Health</Text>    
                        </View>
                    <Text>Lvl: 999</Text>
                    </View>
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.actionDescriptions}></View>
                    <View style={styles.actions}>
                    <TouchableOpacity style={styles.actions}><Text>Attack</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.actions}><Text>Items</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.actions} onPress={() => this.run()}><Text>Run Away</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.actions}><Text>Info</Text></TouchableOpacity>
                    
                    </View>
                </View>
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
        resetWildStepCounter: () => dispatch({type: actionType.RESET_WILD_STEP_COUNTER}),
        battle: () => dispatch({type: actionType.BATTLE})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Battle)

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: screenHeight,

    },
    enemyContainer: {
        flexDirection: 'row',
        width: screenWidth,
        height: screenHeight*2/8,
        backgroundColor: 'gray'
    },
    enemyInfo: {
        position: 'absolute',
        top: screenHeight*3/36,
        left: screenWidth/12,
        backgroundColor: 'gray',
        width: screenWidth/2
    },
    playerInfo: {
        position: 'absolute',
        bottom: 0,
        right: screenWidth/12,
        width: screenWidth/2
    },
    healthBar: {
        width: screenWidth/2,
        height: screenHeight*1/36,
        backgroundColor: 'green'
    },
    healthNumber: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    playerContainer: {
        flexDirection: 'row',
        width: screenWidth,
        height: screenHeight*3/8,
        backgroundColor: 'white'
    },
    actionContainer: {
        flexDirection: 'row',
        width: screenWidth,
        height: screenHeight*3/8,
        backgroundColor: 'yellow'
    },
    actions: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    }
})



// , justifyContent: 'center', alignItems: 'center'