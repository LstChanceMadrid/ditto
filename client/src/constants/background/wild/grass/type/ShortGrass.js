import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {screenHeight, screenWidth} from '../../../../screenDimensions'

class ShortGrass extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bladeLeft} />
        <View style={styles.bladeMiddle} />
        <View style={styles.bladeRight} />
      </View>
    )
  }
}
export default ShortGrass

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: screenWidth/36,
        height: screenHeight/36,
    },
    bladeLeft: {
      flex: 1,
      backgroundColor: 'rgba(0, 255, 0, 1)',
      borderRightWidth: 1,
      borderRightColor: 'rgba(55, 155, 55, 1)',
      borderTopRightRadius: 50,
      borderBottomLeftRadius: 50,
      width: screenWidth/72,
      height: screenHeight/72,
  },
    bladeRight: {
        flex: 1,
        backgroundColor: 'rgba(0, 255, 0, 1)',
        borderLeftWidth: 1,
        borderLeftColor: 'rgba(50, 50, 50, 1)',
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
        width: screenWidth/72,
        height: screenHeight/72,
    },
    bladeMiddle: {
        flex: 1,
        backgroundColor: 'rgba(0, 255, 0, 1)',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: 'rgba(55, 155, 55, 1)',
        borderBottomColor: 'rgba(55, 155, 55, 1)',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        width: screenWidth/72,
        height: screenHeight/72,
    }
})
