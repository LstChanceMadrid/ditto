import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/global/screenDimensions'
import CornerTopRight from '../../../constants/background/templates/CornerTopRight';
import Horizontal5 from '../../../constants/background/templates/Horizontal5';


class HomeUpRight extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}>
        <View style={styles.right} />
        <View style={styles.top} />
        <View style={styles.row}>
        <Horizontal5 />
        <Horizontal5 />
        <Horizontal5 />
        </View>
        <View style={styles.topRightCorner}>
            <CornerTopRight />
        </View>
        </View>
    }
}

export default HomeUpRight

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow'
    },
    top: {
        backgroundColor: 'rgba(25,25,25,1)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: screenWidth,
        height: screenHeight/12,
    },
    right: {
        backgroundColor: 'rgba(25,25,25,1)',
        position: 'absolute',
        top: 0,
        right: 0,
        width: screenWidth/12,
        height: screenHeight
    },
    topRightCorner: {
        position: 'absolute',
        top: screenHeight/24,
        right: screenWidth*2/36
    },
    row: {
        top: screenHeight/24,
        flexDirection: 'row'
    }

})