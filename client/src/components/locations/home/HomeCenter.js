import React, { Component } from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {screenHeight, screenWidth} from '../../../constants/screenDimensions'
import {buildingSprite} from '../../../constants/buildingSprites'
import {color} from '../../../constants/background/color'
import Interior from '../../../constants/background/infrastructure/tile/Interior';
import BorderTop from '../../../constants/background/infrastructure/tile/BorderTop';
import CornerInternalTopLeft from '../../../constants/background/infrastructure/tile/CornerInternalTopLeft';
import CornerExternalTopLeft from '../../../constants/background/infrastructure/tile/CornerExternalTopLeft';
import BorderLeft from '../../../constants/background/infrastructure/tile/BorderLeft'
import BorderRight from '../../../constants/background/infrastructure/tile/BorderRight';
import CornerExternalTopRight from '../../../constants/background/infrastructure/tile/CornerExternalTopRight';
import BorderBottom from '../../../constants/background/infrastructure/tile/BorderBottom';
import CornerExternalBottomLeft from '../../../constants/background/infrastructure/tile/CornerExternalBottomLeft';
import CornerExternalBottomRight from '../../../constants/background/infrastructure/tile/CornerExternalBottomRight';
import CornerInternalTopRight from '../../../constants/background/infrastructure/tile/CornerInternalTopRight';
import CornerInternalBottomLeft from '../../../constants/background/infrastructure/tile/CornerInternalBottomLeft';
import CornerInternalBottomRight from '../../../constants/background/infrastructure/tile/CornerInternalBottomRight';
import CrossRoad from '../../../constants/background/templates/CrossRoad';


class HomeCenter extends Component {
    render() {

        return <View style={styles.container} width={screenWidth} height={screenHeight}>
        <Image style={{position: 'absolute', top: screenWidth/12, left: screenHeight/12}} width={screenWidth/3} height={screenHeight/7} source={{uri: buildingSprite.pokecenter}}/>
            <View style={styles.middle}></View>
            
            <Interior />
            
            <View style={styles.stoneStreet}>
                <CrossRoad />
            </View>
            
            <CornerInternalTopLeft />
            <View style={styles.middleLeftDown}></View>
            <View style={styles.nextLevel} width={screenWidth/6} height={screenHeight/12}></View>
        </View>
    }
}

export default HomeCenter

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
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
    stoneStreet: {
        position: 'absolute',
        left: screenWidth*8/36,
        top: screenHeight*16/36
    }
})