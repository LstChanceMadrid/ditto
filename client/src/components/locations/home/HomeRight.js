import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'


class HomeRight extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}>
        <View style={styles.right} />
        </View>
    }
}

export default HomeRight

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple'
    },
    right: {
        backgroundColor: 'rgba(25,25,25,1)',
        position: 'absolute',
        top: 0,
        right: 0,
        width: screenWidth/12,
        height: screenHeight
    }
})