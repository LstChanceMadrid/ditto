import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { screenWidth, screenHeight } from '../../../global/screenDimensions'
import {color} from '../../color'

export default class BorderBottom extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inside}>
            <View style={styles.left} />

            <View style={styles.center} />

            <View style={styles.right} />
        </View>
        
        <View style={styles.border}>
            <View style={styles.borderTile} />

            <View style={styles.borderTile} />
        </View>
        
        <View style={styles.outside}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth*2/36,
        height: screenHeight*2/36,
    },
    //
    outside: {
        flex: 1,
    },
    //
    border: {
        flex: 3,
        flexDirection: 'row'
    },
    borderTile: {
        backgroundColor: color.marble.light,
        width: 50+'%',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 3,
        borderTopLeftRadius: 2,
        borderBottomRightRadius: 2
    },
    //
    inside: {
        flex: 4,
        flexDirection: 'row',
        backgroundColor: color.marble.default,

    },
    left: {
        backgroundColor: color.marble.default,
        width: screenWidth*2/36/3,
        height: 100+'%'
    },
    center: {
        backgroundColor: color.marble.dark,
        width: screenWidth*2/36/3,
        height: 100+'%' 
    },
    right: {
        backgroundColor: color.marble.default,
        width: screenWidth*2/36/3,
        height: 100+'%'
    }
})