import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import { screenWidth, screenHeight } from '../../constants/screenDimensions'
import { actionType } from '../../store/actionTypes/actionTypes';

 class AttackSkill extends Component {


  render() {
      if (this.props.skills.attackSkill1.name === 'transfrm' || 'transform') {
        type = 'normal'
      }
      
    return (

        <TouchableOpacity style={styles.container} onPress={() => this.props.choose()}>
            <Text>{this.props.skills.attackSkill1.name}</Text>
            <Text>{type}</Text>
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
      choose: () => dispatch({type: actionType.CHOOSE})
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
