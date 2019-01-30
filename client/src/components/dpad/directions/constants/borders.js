import {screenWidth, screenHeight} from '../../../../constants/screenDimensions'

export const border = {
    // 1Wx1H screen
    screenTop: screenHeight/18,
    screenRight: screenWidth*11/12,
    screenBottom: screenHeight*2/3,
    screenLeft: screenWidth/12,

    // 3Wx3H screen
    homeTopBorder: screenHeight*2/36,
    homeRightBorder: screenWidth*34/12,
    homeBottomBorder: screenHeight*63/24,
    homeLeftBorder: screenWidth/12
}