import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'


class HomeDownCenter extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}><Text>HomeDownCenter</Text></View>
    }
}

export default HomeDownCenter

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    }
})