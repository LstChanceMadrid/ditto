import React, { Component } from 'react'
import { View } from 'react-native'
import Verticle from './Verticle'

export default class Verticle5 extends Component {
  render() {
    return (
      <View>
        <Verticle />
        <Verticle />
        <Verticle />
        <Verticle />
        <Verticle />
      </View>
    )
  }
}
