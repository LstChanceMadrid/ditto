import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity,  View } from 'react-native'
import { connect } from 'react-redux'
import { actionType } from '../../store/actionTypes'
import { screenWidth } from '../../constants/screenDimensions';


class ConfirmAttack extends Component {
  render() {
    return (
      <View>
        <Text>Are you sure you want to use {this.props.attack.name}</Text>

        <View style={styles.optionRow}>
        <TouchableOpacity style={styles.option} onPress={() => this.props.attack()}>
            <Text style={styles.optionText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => this.props.attackOptions()}>
            <Text style={styles.optionText}>no</Text>
        </TouchableOpacity>
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
        attack: () => dispatch({type: actionType.ATTACK}),
        attackOptions: () => dispatch({type: actionType.ATTACK_OPTIONS})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmAttack)

const styles = StyleSheet.create({
    option: {
        flex: 1,
        borderWidth: 1
    },
    optionRow: {
        flexDirection: 'row',
        width: screenWidth/4
    },
    optionText: {
        textAlign: 'center'
    }
})
