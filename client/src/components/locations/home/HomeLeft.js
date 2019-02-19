import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/global/screenDimensions'


class HomeLeft extends Component {
    render() {
        return (
        <View style={styles.container} width={screenWidth} height={screenHeight}>
            <View style={styles.leftdown} />
            <View style={styles.left} />
            <View style={styles.nextLevel} width={screenWidth/2} height={screenHeight/4} />
        </View>
        )
    }
}

export default HomeLeft

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green'
    },
    nextLevel: {
        backgroundColor: 'black',
        position: 'absolute',
        top: screenHeight*5/12,
        right: 0
    },
    left: {
        backgroundColor: 'rgba(25,25,25,1)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: screenWidth/12,
        height: screenHeight
    },
    leftdown: {
        backgroundColor: 'brown',
        position: 'absolute',
        top: screenHeight*9/12,
        left: screenWidth/2,
        width: screenWidth/2,
        height: screenHeight/12
    }
})