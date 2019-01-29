import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'


class HomeUpLeft extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}>
        <View style={styles.top}></View>
        <View style={styles.left}></View>
        <Text>HomeUpLeft</Text>
        </View>
    }
}

export default HomeUpLeft

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    },
    top: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        width: screenWidth,
        height: screenHeight/12
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