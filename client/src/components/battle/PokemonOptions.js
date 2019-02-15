import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { connect } from 'react-redux'
import { screenWidth, screenHeight } from '../../constants/screenDimensions'
import Back from './Back'


 class PokemonOptions extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Back />
        <Text>Pokemon options</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
    return {
      ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps)(PokemonOptions)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: screenWidth,
    height: screenHeight*3/8,
    backgroundColor: 'yellow'
  }
})
