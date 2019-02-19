import React, { Component } from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import { connect } from 'react-redux'
import {screenHeight, screenWidth } from '../../../constants/global/screenDimensions'
import {pokemonSprite} from '../../../constants/pokemon/pokemonSprites'
import { actionType } from '../../../store/actionTypes/actionTypes';


class Player extends Component {

    render() {
        return (
            <View style={styles.playerContainer}>
                    <Image style={{position: 'absolute', top: 0, left: 0}}width={screenWidth*21/36} resizeMode={'contain'} height={screenHeight*15/36} source={{uri: pokemonSprite.ditto.male.shiny.back}} />

                    <View style={styles.playerInfo}>
                    <Text>Player name</Text>
                    <View style={styles.healthBar}>
                    
                        <View style={styles.greenHealth} />
                        
                    </View>
                    <Text style={styles.healthNumber}>Health: 100/100</Text>
                    <Text>Lvl: 999</Text>
                    </View>
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
        
    }
}

export default connect(mapStateToProps)(Player)

const styles = StyleSheet.create({
    playerContainer: {
        width: screenWidth,
        height: screenHeight*5/16,
        backgroundColor: 'white'
    },
    playerInfo: {
        position: 'absolute',
        bottom: screenWidth/12,
        right: screenWidth/12,
        width: screenWidth/3
    },
    healthBar: {
        width: screenWidth/3,
        height: screenHeight*1/36,
        backgroundColor: 'red',
        borderWidth: 1,
        borderRadius: 120
    },
    greenHealth: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 255, 0, 1)',
        borderRadius: 50
    },
    healthNumber: {
        fontSize: screenHeight*1/60,
    }
})