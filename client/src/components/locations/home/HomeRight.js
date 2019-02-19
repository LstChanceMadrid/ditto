import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/global/screenDimensions'
import Verticle5 from '../../../constants/background/templates/Verticle5';



class HomeRight extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}>
        <View style={styles.right} />
        <View style={styles.rightVerticleRoad}>
        <Verticle5 />
        <Verticle5 />
        <Verticle5 />
        </View>
        
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
    },
    rightVerticleRoad: {
        position: 'absolute',
        top: 0,
        right: screenWidth*2/36
    }
})