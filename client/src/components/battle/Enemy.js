import React, { Component } from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import { connect } from 'react-redux'
import {screenHeight, screenWidth } from '../../constants/screenDimensions'


class Enemy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hP: this.props.enemy.hp
        }
    }
    componentDidMount = () => {
        const healthPoints = this.props.enemy.hP + this.props.enemy.lvl
        this.setState({
            hP: this.props.enemy.hP + this.props.enemy.lvl
        })
    }



    render() {
        const healthPoints = this.props.enemy.hP + this.props.enemy.lvl
        
        return (
            <View style={styles.enemyContainer}>
                <View style={styles.enemyInfo}>
                    <Text>enemy name</Text>
                    <View style={styles.healthBar}>
                    
                        <View style={styles.greenHealth} width={healthPoints/this.state.hP*100 + "%"}></View>
                        
                    </View>
                    <Text style={styles.healthNumber}>Health: {healthPoints}/{this.state.hP}</Text>
                    <Text>Lvl: {this.props.enemy.lvl}</Text>
                </View>
                <Image style={{position: 'absolute',top: 0, right: screenWidth*1/36}} width={screenWidth*18/36} height={screenHeight*12/36} resizeMode={'contain'} source={{uri: this.props.enemy.sprite}} />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps)(Enemy)

const styles = StyleSheet.create({
    enemyContainer: {
        flexDirection: 'row',
        width: screenWidth,
        height: screenHeight*5/16,
        backgroundColor: 'gray'
    },
    enemyInfo: {
        position: 'absolute',
        top: screenHeight*3/36,
        left: screenWidth/12,
        backgroundColor: 'gray',
        width: screenWidth/3
    },
    healthBar: {
        width: screenWidth/3,
        height: screenHeight*1/36,
        backgroundColor: 'red',
        borderWidth: 1,
        borderRadius: 120
    },
    greenHealth: {
        position: 'absolute',
        height: '100%',
        backgroundColor: 'rgba(0, 255, 0, 1)',
        borderRadius: 50
    },
    healthNumber: {
        fontSize: screenHeight*1/60,
    }
})