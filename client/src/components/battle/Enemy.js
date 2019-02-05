import React, { Component } from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import { connect } from 'react-redux'
import {screenHeight, screenWidth } from '../../constants/screenDimensions'


class Enemy extends Component {
    render() {
        return (
            <View style={styles.enemyContainer}>
                <View style={styles.enemyInfo}>
                    <Text>enemy name</Text>
                    <View style={styles.healthBar}>
                    
                        <View style={styles.greenHealth}></View>
                        
                    </View>
                    <Text style={styles.healthNumber}>Health: 555/555</Text>
                    <Text>Lvl: 2</Text>
                </View>
                <Image style={{position: 'absolute',top: 0, right: screenWidth*1/36}} width={screenWidth*18/36} height={screenHeight*12/36} source={{uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}} />
            </View>
        )
    }
}
const mapStateToProps = state => {
    
}

const mapDispatchToProps = dispatch => {

}

export default connect()(Enemy)

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
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 255, 0, 1)',
        borderRadius: 50
    },
    healthNumber: {
        fontSize: screenHeight*1/60,
    }
})