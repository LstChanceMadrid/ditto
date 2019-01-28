import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'


class HomeCenter extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}>
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
    }
})