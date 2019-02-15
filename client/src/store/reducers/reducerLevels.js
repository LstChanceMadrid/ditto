import { actionLevel } from '../actionTypes/actionLevels'
import { initialState } from '../initialState'
import {rootReducer} from './rootReducer'

        //  ___       __________  ___        ___  __________  ___
        // |   |      |   _____|  \  \      /  / |   ______| |   |
        // |   |      |  |____     \  \    /  /  |  |____    |   |
        // |   |      |   ____|     \  \  /  /   |   ____|   |   |
        // |   |____  |  |_____      \  \/  /    |  |______  |   |_____
        // |________| |________|      \____/     |_________| |_________|


const reducerLevels = (state = {...rootReducer}, action) => {
    switch (action.type) {

        case actionLevel.LEVEL_1: {
            return {
                ...state,
                enemy: {
                    ...state.enemy,
                    lvl: 1
                }
            }
        }

        case actionLevel.LEVEL_2: {
            return {
                ...state,
                enemy: {
                    ...state.enemy,
                    lvl: 2
                }
            }
        }

        case actionLevel.LEVEL_3: {
            return {
                ...state,
                enemy: {
                    ...state.enemy,
                    lvl: 3
                }
            }
        }

        case actionLevel.LEVEL_4: {
            return {
                ...state,
                enemy: {
                    ...state.enemy,
                    lvl: 4
                }
            }
        }

        case actionLevel.LEVEL_5: {
            return {
                ...state,
                enemy: {
                    ...state.enemy,
                    lvl: 5
                }
            }
        }

        default: 
            return state
    }
}  

export default reducerLevels