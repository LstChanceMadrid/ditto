import React, { Component } from 'react'
import { View } from 'react-native'
import BorderTop from '../infrastructure/tile/BorderTop'
import BorderBottom from '../infrastructure/tile/BorderBottom'
import Interior from '../infrastructure/tile/Interior'

export default class Horizontal extends Component {
  render() {
    return (
      <View>
            <BorderTop />
            <Interior />
            <BorderBottom />
      </View>
    )
  }
}
