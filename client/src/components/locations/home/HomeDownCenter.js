import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'


class HomeDownCenter extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}>
        <View style={styles.bottom} />
        </View>
    }
}

export default HomeDownCenter

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    },
    bottom: {
        backgroundColor: 'rgba(25,25,25,1)',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: screenWidth,
        height: screenHeight*3/12
    }
})