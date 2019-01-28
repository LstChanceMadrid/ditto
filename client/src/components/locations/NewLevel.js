import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux'

import {screenWidth, screenHeight} from '../../constants/screenDimensions'

import Ditto from '../sprites/Ditto'

class NewLevel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x: screenHeight/2,
            y: screenHeight/2
        }
    }

    render() {
        return (
            <View style={styles.container}>
            <Ditto />
            <View style={styles.newScreen} width={screenWidth/12} height={screenHeight/12}></View>
                <Text style={styles.text}>This is the Next Level!</Text>
                
            </View>
        )
    }
}


export default connect()(NewLevel)

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
        top: '50%',
        left: 0
      },
      text: {
          position: 'absolute',
          top:'30%',
          left: '25%'
      }
})