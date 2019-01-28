import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'


class HomeUpRight extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}><Text>HomeUpRight</Text></View>
    }
}

export default HomeUpRight

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow'
    }
})