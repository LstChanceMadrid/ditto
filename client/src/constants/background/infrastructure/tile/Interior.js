import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { screenWidth, screenHeight } from '../../../global/screenDimensions'
import {color} from '../../color'

export default class Center extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
            <View style={styles.top} />
          
            <View style={styles.center} />
          
            <View style={styles.top} />
        </View>
        
        <View style={styles.row}>
            <View style={styles.center} />
        
            <View style={styles.center} />
        
            <View style={styles.center} />
        </View>
        
        <View style={styles.row}>
            <View style={styles.top} />
        
            <View style={styles.center} />
        
            <View style={styles.top} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth*2/36,
        height: screenHeight*2/36
    },
    top: {
        backgroundColor: color.marble.default,
        width: screenWidth*2/36/3,
        height: 100+'%'
    },
    center: {
        backgroundColor: color.marble.dark,
        width: screenWidth*2/36/3,
        height: 100+'%',

    },
    row: {
        flex: 1,
        flexDirection: 'row'
    }
})
