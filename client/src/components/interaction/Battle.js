import React, { Component } from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import {actionType} from '../../store/actionTypes'
import {screenHeight, screenWidth } from '../../constants/screenDimensions'

class Battle extends Component {

    componentDidMount = () => {
        this.props.battle()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.enemyContainer}>
                    <View style={styles.enemyInfo}>
                    <Text>enemy info</Text>
                    <Image style={{position: 'absolute',top: 0, left: 0}}width={screenWidth/2} height={screenHeight/2} source={{uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"}} />
                    </View>
                    <Text style={styles.enemyPicture}>Enemy picture</Text>
                </View>
                <View style={styles.playerContainer}>
                    <Image style={{position: 'absolute',top: 0, left: 0}}width={screenWidth/2} height={screenHeight/2} source={{uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png"}} />
                    <View style={styles.playerInfo}>
                    <Text>player info</Text>
                    </View>
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.actionDescriptions}></View>
                    <View style={styles.actions}>
                    <Text>actions</Text>
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
        flex:3/8,
        flexDirection: 'row',
        width: screenWidth,
        height: screenHeight*3/8,
        backgroundColor: 'gray'
    },
    playerContainer: {
        flex:3/8,
        flexDirection: 'row',
        width: screenWidth,
        height: screenHeight*3/8,
        backgroundColor: 'white'
    },
    actionContainer: {
        flex:1/4,
        flexDirection: 'row',
        width: screenWidth,
        height: screenHeight/4,
        backgroundColor: 'blue'
    }
})