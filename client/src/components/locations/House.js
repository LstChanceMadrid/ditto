import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux'

import {screenWidth, screenHeight} from '../../constants/screenDimensions'

import Ditto from '../sprites/Ditto'
import { actionType } from '../../store/actionTypes';
import DPad from '../dpad/DPad';

class House extends Component {

    componentDidMount = () => {
        this.props.house()
        this.props.houseResetDitto()
        this.props.houseDPad()
    }

    render() {
        return (
            <View style={styles.container}>
            
            <View style={styles.newScreen} width={screenWidth*2/12} height={screenHeight/12}></View>
                <Text style={styles.text}>This is a house!</Text>
                <Ditto />
                <DPad />
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
        house: () => dispatch({type: actionType.HOUSE}),
        houseResetDitto: () => dispatch({type: actionType.HOUSE_RESET_DITTO}),
        houseDPad: () => dispatch({type: actionType.HOUSE_D_PAD})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(House)

let styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    },
    text: {
        color: 'white'
    },
    newScreen: {
        backgroundColor: 'red',
        position: 'absolute',
        top: screenHeight/2,
        right: 0
      },
      text: {
          position: 'absolute',
          top:'30%',
          left: '25%'
      }
})