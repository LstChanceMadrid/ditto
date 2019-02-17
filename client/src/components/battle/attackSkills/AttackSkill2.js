import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { connect } from 'react-redux'
import { screenWidth, screenHeight } from '../../../constants/screenDimensions'
import { actionType } from '../../../store/actionTypes/actionTypes';
import { pokemonMove } from '../../../constants/pokemon/pokemonMoves'


 class AttackSkill2 extends Component {


    render() {
        let move = pokemonMove[this.props.skills.attackSkill2.name]
    
        if (this.props.skills.attackSkill2.name === "") {
          return (
            <View style={styles.emptyContainer}>
                <Text style={styles.noMove}>----------</Text>
                <Text style={styles.noMove}>----------</Text>
                <Text style={styles.noMove}>----------</Text>
            </View>
        )
        } else {
    
          return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.choose()}>
              <View style={styles.column}>
                <Text>{move.name}</Text>
                <View style={styles[move.type]}>
                  <Text>{move.type}</Text>
                </View>
                <Text>{move.type}</Text>
              </View>
    
              <View style={styles.column}>
                <Text style={styles.moveStat}>{move.power}</Text>
                <Text style={styles.moveStat}>{move.accuracy}</Text>
                <Text style={styles.moveStat}>{move.powerPoints}/{move.powerPoints}</Text>
              </View>      
            </TouchableOpacity>
          )
        }
      }
    }
    
    const mapStateToProps = state => {
        return {
          ...state
        }
    }
    
    const mapDispatchToProps = (dispatch) => {
        return {
          choose: () => dispatch({type: actionType.CHOOSE})
        }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(AttackSkill2)
    
    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        width: screenWidth*17/36,
        height: screenHeight/12,
        backgroundColor: 'yellow',
        borderWidth: 1,
        padding: 2
      },
      emptyContainer: {
        width: screenWidth*17/36,
        height: screenHeight/12,
        backgroundColor: 'yellow',
        borderWidth: 1,
        padding: 2 
      },
      noMove: {
        textAlign: 'center'
      },
      Normal: {
        alignSelf: 'flex-start',
        backgroundColor: 'lightgray',
        borderRadius: 5,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 4,
        paddingRight: 4
      },
      black: {
        backgroundColor: 'black'
      },
      moveStat: {
        alignSelf: 'flex-end'
      },
      column: {
        flex: 1
      }
    })
    