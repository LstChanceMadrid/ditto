import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import { screenWidth, screenHeight } from '../../constants/screenDimensions'
import { actionType } from '../../store/actionTypes/actionTypes';

class Back extends Component {
  render() {
    return (
        <TouchableOpacity style={styles.battleActions} onPress={() => this.props.battleActions()}>
        <Text>Back</Text>
      </TouchableOpacity>
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
      battleActions: () => dispatch({type: actionType.BATTLE_ACTIONS})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Back)

const styles = StyleSheet.create({
    battleActions: {
        position: 'absolute',
        width: screenWidth/3,
        height: screenHeight/24,
        top: 0,
        right: 0,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
      }
})