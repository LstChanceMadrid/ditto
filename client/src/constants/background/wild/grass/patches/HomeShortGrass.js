import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {screenHeight, screenWidth} from '../../../../screenDimensions'
import ShortGrass from '../type/ShortGrass';

class HomeShortGrass extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
        </View>

        <View style={styles.row}>
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
        </View>

        <View style={styles.row}>
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
        </View>

        <View style={styles.row}>
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
        </View>

        <View style={styles.row}>
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
        </View>

        <View style={styles.row}>
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
        </View>

        <View style={styles.row}>
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
        </View>

        <View style={styles.row}>
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
        </View>

        <View style={styles.row}>
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
        </View>

        <View style={styles.row}>
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
            <ShortGrass />
        </View>
      </View>
    )
  }
}
export default HomeShortGrass

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: 'green',
        left: 0,
        bottom: 0,
        width: screenWidth*19/36,
        height: screenHeight*12/36
    },
    row: {
        flex: 1
    }
})
