import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'


class HomeDownRight extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}>
        <View style={styles.right}></View>
        <View style={styles.bottom}></View>
        <Text>HomeDownRight</Text>
        </View>
    }
}

export default HomeDownRight

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'deeppink'
    },
    right: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,
        width: screenWidth/12,
        height: screenHeight
    },
    bottom: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: screenWidth,
        height: screenHeight*3/12
    }
})