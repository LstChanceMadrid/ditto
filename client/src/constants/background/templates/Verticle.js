import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import BorderLeft from '../infrastructure/tile/BorderLeft'
import BorderRight from '../infrastructure/tile/BorderRight'
import Interior from '../infrastructure/tile/Interior'

export default class Verticle extends Component {
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    }
})
