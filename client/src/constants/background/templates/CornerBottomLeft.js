import React, { Component } from 'react'
import { View } from 'react-native'
import BorderLeft from '../infrastructure/tile/BorderLeft'
import BorderRight from '../infrastructure/tile/BorderRight'
import BorderTop from '../infrastructure/tile/BorderTop'
import BorderBottom from '../infrastructure/tile/BorderBottom'
import CornerExternalBottomLeft from '../infrastructure/tile/CornerExternalBottomLeft'
import CornerInternalBottomLeft from '../infrastructure/tile/CornerInternalBottomLeft';
import Interior from '../infrastructure/tile/Interior'
import { styles } from './styles/styles'

export default class CornerBottomLeft extends Component {
  render() {
    return (
      <View>
        <View style={styles.row}>
            <BorderLeft />
            <Interior />
            <Interior />
            <Interior />
            <BorderRight />
        </View>

        <View style={styles.row}>
            <BorderLeft />
            <Interior />
            <Interior />
            <Interior />
            <CornerInternalBottomLeft />
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
            <CornerExternalBottomLeft />
            <BorderBottom />
            <BorderBottom />
            <BorderBottom />
            <BorderBottom />
            <BorderBottom />
        </View>
      </View>
    )
  }
}
