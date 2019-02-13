import { actionType } from "../actionTypes";
import {pokemonSprite} from '../../constants/pokemonSprites'
import { initialState } from "../initialState";

const enemy = (state = {}, action) => {
    switch (action.type) {
        case actionType.ENEMY_DITTO: {
            return {
                ...state,
                enemy: {
                    ...state.enemy,
                    sprite: pokemonSprite.ditto.male.shiny.front,
                    name: 'ditto'
                }
            }
        }
        default: 
            return state
    }
}

export default enemy