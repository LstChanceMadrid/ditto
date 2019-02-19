import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { screenWidth, screenHeight } from '../../global/screenDimensions'
import BorderLeft from '../infrastructure/tile/BorderLeft'
import BorderRight from '../infrastructure/tile/BorderRight'
import BorderTop from '../infrastructure/tile/BorderTop'
import BorderBottom from '../infrastructure/tile/BorderBottom'
import CornerExternalTopLeft from '../infrastructure/tile/CornerExternalTopLeft'
import CornerInternalTopLeft from '../infrastructure/tile/CornerInternalTopLeft';
import Interior from '../infrastructure/tile/Interior'

export default class CornerTopLeft extends Component {
  render() {
    return (
      <View>
        <View style={styles.row}>
            <CornerExternalTopLeft />
            <BorderTop />
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
            <Interior />
        </View>

        <View style={styles.row}>
            <BorderLeft />
            <Interior />
            <Interior />
            <Interior />
            <CornerInternalTopLeft />
            <BorderBottom />
        </View>

        <View style={styles.row}>
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
    }
})
