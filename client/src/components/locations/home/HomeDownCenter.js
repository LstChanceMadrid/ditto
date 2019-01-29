import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'


class HomeDownCenter extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}>
        <View style={styles.bottom}></View>
        <Text>HomeDownCenter</Text>
        </View>
    }
}

export default HomeDownCenter

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
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