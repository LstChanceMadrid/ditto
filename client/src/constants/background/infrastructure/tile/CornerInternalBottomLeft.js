import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { screenWidth, screenHeight } from '../../../screenDimensions'
import {color} from '../../color'

export default class CornerInternalBottomLeft extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        

        
        
        <View style={styles.row5}>
        <View style={styles.outsideTop}>
                <View style={styles.row2up}></View>
                <View style={styles.row2}></View>
            </View>
        <View style={styles.borderTop}></View>
            
        </View>

        <View style={styles.row1}>
            <View style={styles.flex1}></View>
            <View style={styles.flex1}></View>
            <View style={styles.flex1Default}></View>   
        </View>

        <View style={styles.row3}>
            <View style={styles.insideTop}></View>
            <View style={styles.insideCenter}></View>  
            <View style={styles.insideTop}></View>  
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
    flex1: {
        flex: 1
    },
    flex1Default: {
        flex: 1,
        backgroundColor: color.marble.default
    },
    outsideTop: {
        flex: 1,
        flexDirection: 'row'
    },
    insideTop: {
        backgroundColor: color.marble.default,
        flex: 1
    },
    insideCenter: {
        backgroundColor: color.marble.dark,
        flex: 1
    },
    row1: {
        backgroundColor: color.marble.dark,
        flex: 1,
        flexDirection: 'row'
    },
    row2up: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: color.marble.dark
    },
    row2: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: color.marble.default
    },
    row3: {
        backgroundColor: color.marble.light,
        flex: 3,
        flexDirection: 'row'
    },
    borderTop: {
        backgroundColor: color.marble.light,
        flex: 7,
        borderWidth: 1,
        borderBottomWidth: 6,
        borderRadius: 2,
        marginBottom: 1,
        marginTop: -1,
        borderBottomLeftRadius: 5
    },
    row5: {
        backgroundColor: 'white',
        flex: 5,
        flexDirection: 'row'
    }
})