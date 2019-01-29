import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'


class HomeRight extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}>
        <View style={styles.right}></View>
        </View>
    }
}

export default HomeRight

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple'
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