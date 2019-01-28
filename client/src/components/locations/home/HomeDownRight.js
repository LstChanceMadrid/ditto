import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'


class HomeDownRight extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}><Text>HomeDownRight</Text></View>
    }
}

export default HomeDownRight

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'deeppink'
    }
})