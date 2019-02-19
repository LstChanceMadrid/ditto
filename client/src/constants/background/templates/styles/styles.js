import { StyleSheet } from 'react-native'
import { screenHeight, screenWidth } from '../../../global/screenDimensions'

export const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    filler: {
        width: screenWidth*2/36,
        height: screenHeight*2/36
    }
})