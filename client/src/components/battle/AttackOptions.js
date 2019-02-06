import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import { screenWidth, screenHeight } from '../../constants/screenDimensions'
import { actionType } from '../../store/actionTypes';
import Back from './Back'
import AttackSkill from './AttackSkill';

 class AttackOptions extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Back />

        <Text>Choose Attack</Text>
        <View style={styles.skillsContainer}>
          <View style={styles.row}>
          <AttackSkill />
          <AttackSkill />
          </View>
          <View style={styles.row}>
          <AttackSkill />
          <AttackSkill />
          </View>
        </View>

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
      battleActions: () => dispatch({type: actionType.BATTLE_ACTIONS})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttackOptions)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: screenWidth,
    height: screenHeight*3/8,
    backgroundColor: 'yellow'
  },
  battleActions: {
    position: 'absolute',
    width: screenWidth/3,
    height: screenHeight/12,
    top: 0,
    right: 0,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5
  },
  skillsContainer: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    top: screenHeight*3/24
  },
  row: {
    left: screenWidth/36
  }
})
