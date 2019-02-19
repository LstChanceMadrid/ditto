import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { screenWidth, screenHeight } from '../../../../constants/global/screenDimensions'
import { actionType } from '../../../../store/actionTypes/actionTypes';
import Back from '../../interactions/Back'
import Move1 from './moves/Move1';
import Move2 from './moves/Move2';
import Move3 from './moves/Move3';
import Move4 from './moves/Move4';
import ConfirmMove from '../../interactions/ConfirmMove';

 class Attack extends Component {

  confirm = () => {
    if (this.props.attack.isChosen) {
      return <ConfirmMove />
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
          <Move1 />
          <Move2 />
          </View>
          <View style={styles.row}>
          <Move3 />
          <Move4 />
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

export default connect(mapStateToProps, mapDispatchToProps)(Attack)

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
