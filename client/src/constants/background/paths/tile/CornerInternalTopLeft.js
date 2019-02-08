import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { screenWidth, screenHeight } from '../../../screenDimensions'
import {color} from '../../color'

export default class CornerInternalTopLeft extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inside}></View>

        <View style={styles.cornerTop}>
            <View style={styles.inside}></View>
            <View style={styles.borderTop}></View> 
        </View>

            <View style={styles.cornerLeft}>
            
            <View style={styles.inside}></View>
            <View style={styles.borderLeft}></View> 
            <View style={styles.outside}></View>
            
            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: screenHeight*10/36,
        left: screenWidth*10/36,
        backgroundColor: "black",
        width: screenWidth*2/36,
        height: screenHeight*2/36
    },
    inside: {
        flex: 4
    },
    borderTop: {
        backgroundColor: 'yellow',
        flex: 4
    },
    outside: {
        flex: 1,
        backgroundColor: 'pink'
    },
    cornerTop: {
        flex: 3,
        borderLeftWidth: 1,
        flexDirection: 'row'
    },
    cornerLeft: {
        flex: 1,
        flexDirection: 'row',
    },
    borderLeft: {
        flex: 3,
        borderTopWidth: 1,
        borderRightWidth: 1,
        backgroundColor: 'yellow'
    }
})