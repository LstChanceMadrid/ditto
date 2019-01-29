import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'


class HomeUpRight extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}>
        <Text>HomeUpRight</Text>
        <View style={styles.right}></View>
        <View style={styles.top}></View>
        </View>
    }
}

export default HomeUpRight

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow'
    },
    top: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        width: screenWidth,
        height: screenHeight/12
    },
    right: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,
        width: screenWidth/12,
        height: screenHeight
    }
})