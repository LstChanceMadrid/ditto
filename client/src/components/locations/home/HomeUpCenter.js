import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'


class HomeUpCenter extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}>
        <Text style={styles.top}>HomeUpCenter</Text>
        </View>
    }
}

export default HomeUpCenter

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange'
    },
    top: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        width: screenWidth,
        height: screenHeight/12
    }
})