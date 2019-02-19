import React, { Component } from 'react'
import { View } from 'react-native'
import BorderLeft from '../infrastructure/tile/BorderLeft'
import BorderRight from '../infrastructure/tile/BorderRight'
import BorderTop from '../infrastructure/tile/BorderTop'
import BorderBottom from '../infrastructure/tile/BorderBottom'
import CornerExternalBottomRight from '../infrastructure/tile/CornerExternalBottomRight'
import CornerInternalBottomRight from '../infrastructure/tile/CornerInternalBottomRight';
import Interior from '../infrastructure/tile/Interior'
import { styles } from './styles/styles'

export default class CornerBottomRight extends Component {
  render() {
    return (
      <View>
        <View style={styles.row}>
            <View style={styles.filler}></View>
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
            <BorderRight />
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
            <BorderBottom />
            <BorderBottom />
            <BorderBottom />
            <BorderBottom />
            <CornerExternalBottomRight />
        </View>
      </View>
    )
  }
}
