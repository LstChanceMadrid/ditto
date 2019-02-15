import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'
import BorderLeft from '../../../constants/background/infrastructure/tile/BorderLeft';
import Interior from './../../../constants/background/infrastructure/tile/Interior'
import BorderRight from '../../../constants/background/infrastructure/tile/BorderRight';


class HomeUpCenter extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}>
        <View style={styles.top} />
        <View style={styles.toRoute1}>
        <View style={styles.row}>
            <Interior />
            <Interior />
            <Interior />
            <Interior />
            
            </View>
            <View style={styles.row}>
                <BorderLeft />
                <Interior />
                <Interior />
                <BorderRight />
            </View>

            
        
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
        position: 'absolute',
        top: screenHeight*0/36,
        left: screenWidth*14/36
    },
    row: {
        flexDirection: 'row'
    }
})