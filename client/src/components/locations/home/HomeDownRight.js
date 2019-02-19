import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/global/screenDimensions'
import CornerBottomRight from '../../../constants/background/templates/CornerBottomRight';


class HomeDownRight extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}>
        <View style={styles.right} />
        <View style={styles.bottom} />
        <View style={styles.bottomRightCorner}>
            <CornerBottomRight />
        </View>
        </View>
    }
}

export default HomeDownRight

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'deeppink'
    },
    right: {
        backgroundColor: 'rgba(25,25,25,1)',
        position: 'absolute',
        top: 0,
        right: 0,
        width: screenWidth/12,
        height: screenHeight
    },
    bottom: {
        backgroundColor: 'rgba(25,25,25,1)',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: screenWidth,
        height: screenHeight*3/12
    },
    bottomRightCorner: {
        position: 'absolute',
        bottom: screenHeight*11/36,
        right: screenWidth*2/36
    }
})