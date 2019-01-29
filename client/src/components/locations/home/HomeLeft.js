import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'


class HomeLeft extends Component {
    render() {
        return (
        <View style={styles.container} width={screenWidth} height={screenHeight}>
            <View style={styles.left}></View>
            <Text>HomeLeft</Text>
            <View style={styles.nextLevel} width={screenWidth/2} height={screenHeight/4}></View>
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
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        width: screenWidth/12,
        height: screenHeight
    }
})