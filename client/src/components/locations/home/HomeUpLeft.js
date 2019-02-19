import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/global/screenDimensions'
import CornerTopLeft from '../../../constants/background/templates/CornerTopLeft';


class HomeUpLeft extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}>
        <View style={styles.top} />
        <View style={styles.left} />
        <View style={styles.topLeftCorner}>
            <CornerTopLeft />
        </View>
        </View>
    }
}

export default HomeUpLeft

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    },
    top: {
        backgroundColor: 'rgba(25,25,25,1)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: screenWidth,
        height: screenHeight/12,
    },
    left: {
        backgroundColor: 'rgba(25,25,25,1)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: screenWidth/12,
        height: screenHeight
    },
    topLeftCorner: {
        position: 'absolute',
        left: screenWidth/24,
        top: screenHeight/24
    }
})