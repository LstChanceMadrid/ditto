import {screenWidth, screenHeight} from '../../constants/screenDimensions'


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
        name: 'Home'
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
    attack: {
        isChosen: false,
        name: 'unknown'
    },
    skills: {
        attackSkill1: {
            name: 'transform'
        },
        attackSkill2: {
            name: ''
        },
        attackSkill3: {
            name: ''
        },
        attackSkill4: {
            name: ''
        }
    },
    enemy: {
        lvl: 1,
        hP: 1,
        attack: 1,
        defense: 1,
        sAttack: 1,
        sDefence: 1,
        speed: 1
        
    }

}