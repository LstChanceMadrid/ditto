import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'


class HomeUpLeft extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}><Text>HomeUpLeft</Text></View>
    }
}

export default HomeUpLeft

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    }
})