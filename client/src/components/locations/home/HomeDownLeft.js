import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'


class HomeDownLeft extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}><Text>HomeDownLeft</Text></View>
    }
}

export default HomeDownLeft

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink'
    }
})