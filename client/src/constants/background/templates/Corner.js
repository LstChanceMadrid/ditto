import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { screenWidth, screenHeight } from '../../screenDimensions'
import BorderLeft from '../infrastructure/tile/BorderLeft'
import BorderRight from '../infrastructure/tile/BorderRight'
import BorderTop from '../infrastructure/tile/BorderTop'
import BorderBottom from '../infrastructure/tile/BorderBottom'
import Interior from '../infrastructure/tile/Interior'

import CornerExternalTopLeft from '../infrastructure/tile/CornerExternalTopLeft'
import CornerInternalTopRight from '../infrastructure/tile/CornerInternalTopRight'
import CornerInternalBottomLeft from '../infrastructure/tile/CornerInternalBottomLeft'
import CornerInternalBottomRight from '../infrastructure/tile/CornerInternalBottomRight'
import CornerInternalTopLeft from '../infrastructure/tile/CornerInternalTopLeft';

export default class Corner extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
            <CornerExternalTopLeft />
            <BorderTop />
            <BorderTop />
            <BorderTop />
            <BorderTop />
        </View>

        <View style={styles.row}>
            <BorderLeft />
            <Interior />
            <Interior />
            <Interior />
            <Interior />
        </View>

        <View style={styles.row}>
            <BorderLeft />
            <Interior />
            <Interior />
            <CornerInternalTopLeft />
            <BorderBottom />
        </View>

        <View style={styles.row}>
            <BorderLeft />
            <Interior />
            <Interior />
            <BorderRight />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth*5/36,
        height: screenHeight*5/36
    },
    row: {
        flexDirection: 'row'
    },
    filler: {
        width: screenWidth/36,
        height: screenHeight/36
    }
})
