import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'


class HomeCenter extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}>
            <View style={styles.middle}></View>
            <View style={styles.middleLeft}></View>
            <View style={styles.middleLeftDown}></View>
            <Text>HomeCenter</Text>
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