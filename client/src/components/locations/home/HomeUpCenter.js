import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'


class HomeUpCenter extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}><Text>HomeUpCenter</Text></View>
    }
}

export default HomeUpCenter

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange'
    }
})