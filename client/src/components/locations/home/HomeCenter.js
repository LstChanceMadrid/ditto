import React, { Component } from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'
import {buildingSprite} from '../../../constants/buildingSprites'


class HomeCenter extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}>
        <Image style={{position: 'absolute', top: screenWidth/12, left: screenHeight/12}} width={screenWidth/3} height={screenHeight/7} source={{uri: buildingSprite.pokecenter}}/>
            <View style={styles.middle}></View>
            <View style={styles.middleLeft}></View>
            <View style={styles.middleLeftDown}></View>
            <View style={styles.nextLevel} width={screenWidth/6} height={screenHeight/12}></View>
        </View>
    }
}

export default HomeCenter

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue'
    },
    nextLevel: {
        position: 'absolute',
        top: screenHeight/2,
        backgroundColor: 'black'
    },
    middle: {
        backgroundColor: 'brown',
        position: 'absolute',
        top: screenHeight*6/12,
        left: screenWidth*2/12,
        width: screenWidth,
        height: screenHeight*2/24
    },
    middleLeft: {
        backgroundColor: 'brown',
        position: 'absolute',
        top: screenHeight*6/12,
        left: screenWidth*3/12,
        width: screenWidth/6,
        height: screenHeight*4/12
    },
    middleLeftDown: {
        backgroundColor: 'brown',
        position: 'absolute',
        top: screenHeight*9/12,
        left: 0,
        width: screenWidth*2/6,
        height: screenHeight/12
    }
})