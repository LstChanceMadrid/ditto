import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { screenWidth, screenHeight } from '../../global/screenDimensions'
import BorderLeft from '../infrastructure/tile/BorderLeft'
import BorderRight from '../infrastructure/tile/BorderRight'
import BorderTop from '../infrastructure/tile/BorderTop'
import BorderBottom from '../infrastructure/tile/BorderBottom'
import CornerExternalTopRight from '../infrastructure/tile/CornerExternalTopRight'
import CornerInternalTopRight from '../infrastructure/tile/CornerInternalTopRight';
import Interior from '../infrastructure/tile/Interior'

export default class CornerTopRight extends Component {
  render() {
    return (
      <View>
        <View style={styles.row}>
            <BorderTop />
            <BorderTop />
            <BorderTop />
            <BorderTop />
            <BorderTop />
            <CornerExternalTopRight />
        </View>

        <View style={styles.row}>
            <Interior />
            <Interior />
            <Interior />
            <Interior />
            <Interior />
            <BorderRight />
        </View>

        <View style={styles.row}>
            <BorderBottom />
            <CornerInternalTopRight />
            <Interior />
            <Interior />
            <Interior />
            <BorderRight />
        </View>

        <View style={styles.row}>
            <View style={styles.filler}></View>
            <BorderLeft />
            <Interior />
            <Interior />
            <Interior />
            <BorderRight />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    filler: {
        width: screenWidth/18,
        height: screenHeight/18
    }
})
