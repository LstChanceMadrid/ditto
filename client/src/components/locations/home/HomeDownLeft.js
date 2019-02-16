import React, { Component } from 'react'
import { StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'
import { connect } from 'react-redux'
import ShortGrass from '../../../constants/background/wild/grass/ShortGrass';

class HomeDownLeft extends Component {
    render() {
        return <View style={styles.container}>
        <View style={styles.bottom} />
        <View style={styles.left} />
        <View style={styles.grass}>
            <Text>M-Driddy-Mon Grass {this.props.wild.stepCounter}</Text>
            <ShortGrass />
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
        backgroundColor: 'green',
        left: screenWidth*3/36,
        bottom: screenHeight*9/36,
        width: screenWidth*19/36,
        height: screenHeight*12/36
    }
})