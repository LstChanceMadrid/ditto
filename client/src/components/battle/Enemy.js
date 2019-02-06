import React, { Component } from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import { connect } from 'react-redux'
import {screenHeight, screenWidth } from '../../constants/screenDimensions'
import {pokemonSprite} from '../../constants/pokemonSprites'


class Enemy extends Component {
    
    render() {

        return (
            <View style={styles.enemyContainer}>
                <View style={styles.enemyInfo}>
                    <Text>enemy name</Text>
                    <View style={styles.healthBar}>
                    
                        <View style={styles.greenHealth} width={this.props.enemy.hp + "%"}></View>
                        
                    </View>
                    <Text style={styles.healthNumber}>Health: {this.props.enemy.hp}/100</Text>
                    <Text>Lvl: 2</Text>
                </View>
                <Image style={{position: 'absolute',top: 0, right: screenWidth*1/36}} width={screenWidth*18/36} height={screenHeight*12/36} source={{uri: this.props.enemy.sprite}} />
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

}

export default connect(mapStateToProps)(Enemy)

const styles = StyleSheet.create({
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
        height: '100%',
        backgroundColor: 'rgba(0, 255, 0, 1)',
        borderRadius: 50
    },
    healthNumber: {
        fontSize: screenHeight*1/60,
    }
})