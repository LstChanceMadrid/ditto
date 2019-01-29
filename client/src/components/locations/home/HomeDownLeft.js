import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'


class HomeDownLeft extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}>
        <View style={styles.bottom}></View>
        <View style={styles.left}></View>
        <Text>HomeDownLeft</Text>
        </View>
    }
}

export default HomeDownLeft

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink'
    },
    bottom: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: screenWidth,
        height: screenHeight*3/12
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