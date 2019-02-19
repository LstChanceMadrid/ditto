import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/global/screenDimensions'
import Interior from './../../../constants/background/infrastructure/tile/Interior'
import CornerInternalBottomLeft from '../../../constants/background/infrastructure/tile/CornerInternalBottomLeft';
import CornerInternalBottomRight from '../../../constants/background/infrastructure/tile/CornerInternalBottomRight';
import Horizontal5 from '../../../constants/background/templates/Horizontal5';


class HomeUpCenter extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}>
        <View style={styles.top} />
        <View style={styles.toRoute1}>
        <Horizontal5 />
        <Horizontal5 />
        <View style={styles.row}>
            <CornerInternalBottomRight />
            <Interior />
            <Interior />
            <CornerInternalBottomLeft />
        </View>
        <Horizontal5 />
            <Horizontal5 />
        
        </View>
        </View>
    }
}

export default HomeUpCenter

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange'
    },
    top: {
        backgroundColor: 'rgba(25,25,25,1)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: screenWidth,
        height: screenHeight/12,
    },
    toRoute1: {
        flexDirection: 'row',
        position: 'absolute',
        top: screenHeight/24,
        left: 0
    },
    row: {
        flexDirection: 'row'
    }
})