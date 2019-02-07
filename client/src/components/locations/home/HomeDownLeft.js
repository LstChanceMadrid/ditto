import React, { Component } from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'
import { connect } from 'react-redux'
import {backgroundSprite} from '../../../constants/backgroundSprites'

class HomeDownLeft extends Component {
    render() {
        return <View style={styles.container}>
        <Image style={{position: 'absolute', flex: 1, left: screenWidth*3/36, bottom: screenHeight*9/36, zIndex: 100}} width={screenWidth*19/36} height={screenHeight*12/36} resizeMode={'repeat'} source={{uri: backgroundSprite.wildGrassHome}} />
        <View style={styles.bottom}></View>
        <View style={styles.left}></View>
        <View style={styles.grass}>
            <Text>M-Driddy-Mon Grass {this.props.wild.stepCounter}</Text>
        </View>
        </View>
    }
}

mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(HomeDownLeft)

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        width: screenWidth,
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
    left: {
        backgroundColor: 'rgba(25,25,25,1)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: screenWidth/12,
        height: screenHeight
    },
    grass: {
        position: 'absolute',
        left: screenWidth*3/36,
        bottom: screenHeight*9/36,
        width: screenWidth*19/36,
        height: screenHeight*12/36
    }
})