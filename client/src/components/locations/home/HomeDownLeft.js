import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'
import { connect } from 'react-redux'

class HomeDownLeft extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}>
        <View style={styles.bottom}></View>
        <View style={styles.left}></View>
        <View style={styles.grass}>
            <Text>M-Driddy-Mon Grass {this.props.wild.stepCounter}</Text>
        </View>
        <Text>HomeDownLeft</Text>
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
        backgroundColor: 'pink'
    },
    bottom: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: screenWidth,
        height: screenHeight*3/12
    },
    left: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        width: screenWidth/12,
        height: screenHeight
    },
    grass: {
        backgroundColor: 'green',
        position: 'absolute',
        left: screenWidth/12,
        bottom: screenHeight*3/12,
        width: screenWidth*13/24,
        height: screenHeight/3
    }
})