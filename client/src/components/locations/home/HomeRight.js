import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'


class HomeRight extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}></View>
    }
}

export default HomeRight

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple'
    }
})