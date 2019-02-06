import React, { Component } from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import { connect } from 'react-redux'
import {screenHeight, screenWidth } from '../../constants/screenDimensions'
import {pokemonSprite} from '../../constants/pokemonSprites'


class Player extends Component {
    render() {
        return (
            <View style={styles.playerContainer}>
                    <Image style={{position: 'absolute', top: 0, left: 0}}width={screenWidth*21/36} height={screenHeight*15/36} source={{uri: pokemonSprite.ditto.male.shiny.back}} />

                    <View style={styles.playerInfo}>
                    <Text>Player name</Text>
                    <View style={styles.healthBar}>
                    
                        <View style={styles.greenHealth}></View>
                        
                    </View>
                    <Text style={styles.healthNumber}>Health: 555/555</Text>
                    <Text>Lvl: 999</Text>
                    </View>
                </View>
        )
    }
}
const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

export default connect()(Player)

const styles = StyleSheet.create({
    playerContainer: {
        width: screenWidth,
        height: screenHeight*3/8,
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