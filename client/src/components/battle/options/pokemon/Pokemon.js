import React, { Component } from 'react'

import { connect } from 'react-redux'
import { screenHeight, screenWidth } from '../../../../constants/global/screenDimensions'
import { StyleSheet, Text, View } from 'react-native'

import Back from '../../interactions/Back'


 class Pokemon extends Component {
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

export default connect(mapStateToProps)(Pokemon)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: screenWidth,
    height: screenHeight*3/8,
    backgroundColor: 'yellow'
  }
})
