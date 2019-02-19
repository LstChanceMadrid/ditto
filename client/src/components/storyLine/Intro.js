import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { Navigation } from 'react-native-navigation';

class Intro extends Component {

    handleClick = () => {
        Navigation.push("Next", {
            component: {
                id: 'Next',
                name: 'Next',
                options: {
                    push: {
                        animations: {
                            startAlpha: 0,
                            endAlpha: 1,
                            duration: 2.4
                            
                        }
                    }
                }
            }
        })
    }

  render() {
      console.log(this.props)
    return (
      <View>
          <TouchableOpacity onPress={() => this.handleClick()}>
        <Text> Intro </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}
export default connect(mapStateToProps)(Intro)
