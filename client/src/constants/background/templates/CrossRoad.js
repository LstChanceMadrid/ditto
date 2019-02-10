import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { screenWidth, screenHeight } from '../../../constants/screenDimensions'
import BorderLeft from '../infrastructure/tile/BorderLeft'
import BorderRight from '../infrastructure/tile/BorderRight'
import BorderTop from '../infrastructure/tile/BorderTop'
import BorderBottom from '../infrastructure/tile/BorderBottom'
import Interior from '../infrastructure/tile/Interior'

import CornerInternalTopLeft from '../infrastructure/tile/CornerInternalTopLeft'
import CornerInternalTopRight from '../infrastructure/tile/CornerInternalTopRight'
import CornerInternalBottomLeft from '../infrastructure/tile/CornerInternalBottomLeft'
import CornerInternalBottomRight from '../infrastructure/tile/CornerInternalBottomRight'

export default class CrossRoad extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
            <View style={styles.filler} />
            <View style={styles.filler} />
            <BorderLeft />
            <Interior />
            <Interior />
            <Interior />
            <BorderRight />

        </View>

        <View style={styles.row}>
            <BorderTop />
            <CornerInternalBottomRight />
            <Interior />
            <Interior />
            <Interior />
            <CornerInternalBottomLeft />
            <BorderTop />
        </View>

        <View style={styles.row}>
            <Interior />
            <Interior />
            <Interior />
            <Interior />
            <Interior />
            <Interior />
            <Interior />
        </View>

        <View style={styles.row}>
            <BorderBottom />
            <CornerInternalTopRight />
            <Interior />
            <Interior />
            <Interior />
            <CornerInternalTopLeft />
            <BorderBottom />
        </View>

        <View style={styles.row}>
            <View style={styles.filler} />
            <View style={styles.filler} />
            <BorderLeft />
            <Interior />
            <Interior />
            <Interior />
            <BorderRight />
            <View style={styles.filler} />
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
