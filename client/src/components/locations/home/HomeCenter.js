import React, { Component } from 'react'
import {Image, StyleSheet, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'
import {buildingSprite} from '../../../constants/background/buildingSprites'
import {color} from '../../../constants/background/color'
import Crossroad from '../../../constants/background/templates/Crossroad';
import ShortGrass from '../../../constants/background/wild/grass/type/ShortGrass';


class HomeCenter extends Component {
    render() {

        return <View style={styles.container} width={screenWidth} height={screenHeight}>
        <Image style={{position: 'absolute', top: screenWidth/12, left: screenHeight/12}} width={screenWidth/3} height={screenHeight/7} source={{uri: buildingSprite.pokecenter}}/>
            <View style={styles.middle} />

            <View style={styles.crossroad}>
                <Crossroad />
            </View>
            
            <View style={styles.middleLeftDown} />
            
            <View style={styles.nextLevel} width={screenWidth/6} height={screenHeight/12} />
        </View>
    }
}

export default HomeCenter

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue'
    },
    nextLevel: {
        position: 'absolute',
        top: screenHeight/2,
        backgroundColor: 'black'
    },
    middle: {
        backgroundColor: color.stone.light,
        position: 'absolute',
        top: screenHeight*6/12,
        left: screenWidth*2/12,
        width: screenWidth,
        height: screenHeight*2/24
    },
    middleLeft: {
        backgroundColor: color.stone.default,
        position: 'absolute',
        top: screenHeight*6/12,
        left: screenWidth*3/12,
        width: screenWidth/6,
        height: screenHeight*4/12
    },
    middleLeftDown: {
        backgroundColor: color.stone.dark,
        position: 'absolute',
        top: screenHeight*9/12,
        left: 0,
        width: screenWidth*2/6,
        height: screenHeight/12
    },
    crossroad: {
        position: 'absolute',
        left: screenWidth*10/36,
        top: screenHeight*14/36
    },
    grass: {
        position: 'absolute',
        left: screenWidth*18/36,
        top: screenHeight*12/36
    }
})