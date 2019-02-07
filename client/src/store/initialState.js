import {screenWidth, screenHeight} from '../constants/screenDimensions'


export const initialState = {
    dPad: {
        x: screenWidth*3/2,
        y: screenHeight*40/24
    },
    sprite: {
        x: screenWidth*36/24,
        y: screenHeight*32/24
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
        stepCounter: 0
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