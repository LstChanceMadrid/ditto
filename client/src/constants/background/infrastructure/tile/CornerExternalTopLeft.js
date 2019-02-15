import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { screenWidth, screenHeight } from '../../../screenDimensions'
import {color} from '../../color'

export default class CornerExternalTopLeft extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.outsideTop} />

        <View style={styles.row4}>
            <View style={styles.outsideLeft} />
        
            <View style={styles.borderTop} />
        </View>

        <View style={styles.row3}>
            <View style={styles.outsideLeft} />
        
            <View style={styles.borderLeft} />
        
            <View style={styles.inside} />
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
    outsideTop: {
        flex: 1
    },
    row3: {
        flex: 3,
        flexDirection: 'row'
    },
    outsideLeft: {
        flex: 1
    },
    borderTop: {
        backgroundColor: color.marble.light,
        flex: 7,
        borderWidth: 1,
        borderBottomWidth: 6,
        borderRadius: 2,
        borderTopLeftRadius: 5,
        marginTop: -3,
        marginBottom: 0
    },
    borderLeft: {
        marginTop: -3,
        backgroundColor: 'white',
        flex: 3,
        borderWidth: 1,
        borderRadius: 2
    },
    center: {
        backgroundColor: 'red',
        width: screenWidth/36/3,
        height: 100+'%' 
    },
    
    row4: {
        flex: 4,
        flexDirection: 'row'
    },
    inside: {
        flex: 4,
        backgroundColor: color.marble.default
    }
})