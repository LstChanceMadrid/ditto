import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'


class HomeLeft extends Component {
    render() {
        return <View style={styles.container} width={screenWidth} height={screenHeight}><Text>HomeLeft</Text></View>
    }
}

export default HomeLeft

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green'
    }
})