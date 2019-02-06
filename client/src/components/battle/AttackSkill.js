import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import { screenWidth, screenHeight } from '../../constants/screenDimensions'
import { actionType } from '../../store/actionTypes';

 class AttackSkill extends Component {

    attack = () => {
        
    }
  render() {
      
    return (

        <TouchableOpacity style={styles.container} onPress={() => this.props.attack()}>
            <Text>Attack Skill</Text>
            <Text>Type</Text>
            <Text># of moves</Text>
        </TouchableOpacity>


    )
  }
}

const mapStateToProps = state => {
    return {
      ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      attack: () => dispatch({type: actionType.ATTACK})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttackSkill)

const styles = StyleSheet.create({
  container: {
    width: screenWidth*17/36,
    height: screenHeight/12,
    backgroundColor: 'yellow',
    borderWidth: 1,
  }
})
