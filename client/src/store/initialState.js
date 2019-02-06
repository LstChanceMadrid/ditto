import {screenWidth, screenHeight} from '../constants/screenDimensions'

export const initialState = {
    dPad: {
        x: screenWidth*3/2,
        y: screenHeight*21/12
    },
    sprite: {
        x: screenWidth*1.5,
        y: screenHeight*1.5
    },
    location: {
        name: 'home'
    },
    home: {
        x: 0,
        y: 0
    },
    wild: {
        isActive: false,
        stepCounter: 29
    },
    battleStatus: {
        isAttackOptions: false,
        isBagOptions: false,
        isPokemonOptions: false
    },
    skills: {
        attackSkill1: '',
        attackSkill2: '',
        attackSkill3: '',
        attackSkill4: ''
    },
    enemy: {
        hp: 100
    }

}