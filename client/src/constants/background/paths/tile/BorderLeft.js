import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { screenWidth, screenHeight } from '../../../screenDimensions'
import {color} from '../../color'

export default class BorderLeft extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.outside}></View>
        
        <View style={styles.border}>
            <View style={styles.borderTile}></View>
            <View style={styles.borderTile}></View>
        </View>

        <View style={styles.inside}>
            <View style={styles.top}></View>
            <View style={styles.center}></View>
            <View style={styles.bottom}></View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: screenWidth*2/36,
        height: screenHeight*2/36
    },
    top: {
        height: screenHeight*2/36/3,
        width: 100+'%',
        backgroundColor: color.marble.default
    },
    center: {
        backgroundColor: color.marble.dark,
        height: screenHeight*2/36/3,
        width: 100+'%' 
    },
    bottom: {
        height: screenHeight*2/36/3,
        width: 100+'%',
        backgroundColor: color.marble.default
    },
    outside: {
        flex: 1
    },
    border: {
        flex: 3,
    },
    borderTile: {
        height: 50+'%',
        width: 100+'%',
        backgroundColor: color.marble.light,
        borderWidth: 1,
        borderRadius: 2
    },
    inside: {
        flex: 4
    }
})