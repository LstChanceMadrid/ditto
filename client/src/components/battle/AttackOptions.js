import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { screenWidth, screenHeight } from '../../constants/screenDimensions'
import { actionType } from '../../store/actionTypes/actionTypes';
import Back from './Back'
import AttackSkill1 from './attackSkills/AttackSkill1';
import ConfirmAttack from './ConfirmAttack';
import AttackSkill2 from './attackSkills/AttackSkill2';
import AttackSkill3 from './attackSkills/AttackSkill3';
import AttackSkill4 from './attackSkills/AttackSkill4';

 class AttackOptions extends Component {

  confirm = () => {
    if (this.props.attack.isChosen) {
      return <ConfirmAttack />
    } else {
      return <Text>Choose Attack</Text>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Back />
        {this.confirm()}
        
        <View style={styles.skillsContainer}>
          <View style={styles.row}>
          <AttackSkill1 />
          <AttackSkill2 />
          </View>
          <View style={styles.row}>
          <AttackSkill3 />
          <AttackSkill4 />
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
