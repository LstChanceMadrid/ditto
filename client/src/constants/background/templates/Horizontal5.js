import React, { Component } from 'react'
import { View } from 'react-native'
import Horizontal from  './Horizontal'
import { styles } from './styles/styles'

export default class Horizontal5 extends Component {
  render() {
    return (
      <View style={styles.row}>
        <Horizontal />
        <Horizontal />
        <Horizontal />
        <Horizontal />
        <Horizontal />
      </View>
    )
  }
}
