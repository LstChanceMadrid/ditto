
import { actionLevel } from '../actionTypes/actionLevels'
import { actionMovement } from '../actionTypes/actionMovements'
import { actionType } from '../actionTypes/actionTypes'
import { initialState } from './initialState'
import { pokemonSprite } from '../../constants/pokemon/pokemonSprites';
import { screenHeight, screenWidth } from '../../constants/global/screenDimensions'
import { statistics } from '../../constants/pokemon/pokemonStats'



const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        // Locations

        case actionType.HOME: {
            return {
                ...state,
                location: {
                    name: 'Home'
                }
            }
        }

        case actionType.HOUSE: {
            return {
                ...state,
                location: {
                    ...state.location,
                    name: 'House'
                }
            }
        }

        // Movements

        case actionMovement.MOVE_UP_LEFT: {
            return {
                ...state,
                dPad: {
                    x: state.dPad.x - screenWidth/36,
                    y: state.dPad.y - screenHeight/36
                },
                sprite: {
                    x: state.sprite.x - screenWidth/36,
                    y: state.sprite.y - screenHeight/36
                },
                home: {
                    x: state.home.x + screenWidth/36,
                    y: state.home.y + screenHeight/36
                }
            }
        }

        case actionMovement.MOVE_SPRITE_UP_LEFT: {
            return {
                ...state,
                sprite: {
                    x: state.sprite.x - screenWidth/36,
                    y: state.sprite.y - screenHeight/36
                }
            }
        }

        case actionMovement.MOVE_UP: {
            return {
                ...state,
                dPad: {
                    ...state.dPad,
                    y: state.dPad.y - screenHeight/36
                },
                sprite: {
                    ...state.sprite,
                    y: state.sprite.y - screenHeight/36
                },
                home: {
                    ...state.home,
                    y: state.home.y + screenHeight/36
                }
            }
        }

        case actionMovement.MOVE_SPRITE_UP: {
            return {
                ...state,
                sprite: {
                    ...state.sprite,
                    y: state.sprite.y - screenHeight/36
                }
            }
        }

        case actionMovement.MOVE_UP_RIGHT: {
            return {
                ...state,
                dPad: {
                    x: state.dPad.x + screenWidth/36,
                    y: state.dPad.y - screenHeight/36
                },
                sprite: {
                    x: state.sprite.x + screenWidth/36,
                    y: state.sprite.y - screenHeight/36
                },
                home: {
                    x: state.home.x - screenWidth/36,
                    y: state.home.y + screenHeight/36
                }
            }
        }

        case actionMovement.MOVE_SPRITE_UP_RIGHT: {
            return {
                ...state,
                sprite: {
                    x: state.sprite.x + screenWidth/36,
                    y: state.sprite.y - screenHeight/36
                }
            }
        }

        case actionMovement.MOVE_LEFT: {
            return {
                ...state,
                dPad: {
                    ...state.dPad,
                    x: state.dPad.x - screenWidth/36,
                },
                sprite: {
                    ...state.sprite,
                    x: state.sprite.x - screenWidth/36
                },
                home: {
                    ...state.home,
                    x: state.home.x + screenWidth/36
                }
            }
        }

        case actionMovement.MOVE_SPRITE_LEFT: {
            return {
                ...state,
                sprite: {
                    ...state.sprite,
                    x: state.sprite.x - screenWidth/36,
                }
            }
        }

        case actionMovement.MOVE_RIGHT: {
            return {
                ...state,
                dPad: {
                    ...state.dPad,
                    x: state.dPad.x + screenWidth/36,
                },
                sprite: {
                    ...state.sprite,
                    x: state.sprite.x + screenWidth/36,
                },
                home: {
                    ...state.home,
                    x: state.home.x - screenWidth/36,
                }
            }
        }

        case actionMovement.MOVE_SPRITE_RIGHT: {
            return {
                ...state,
                sprite: {
                    ...state.sprite,
                    x: state.sprite.x + screenWidth/36,
                }
            }
        }

        case actionMovement.MOVE_DOWN_LEFT: {
            return {
                ...state,
                dPad: {
                    x: state.dPad.x - screenWidth/36,
                    y: state.dPad.y + screenHeight/36
                },
                sprite: {
                    x: state.sprite.x - screenWidth/36,
                    y: state.sprite.y + screenHeight/36
                },
                home: {
                    x: state.home.x + screenWidth/36,
                    y: state.home.y - screenHeight/36
                }
            }
        }

        case actionMovement.MOVE_SPRITE_DOWN_LEFT: {
            return {
                ...state,
                sprite: {
                    x: state.sprite.x - screenWidth/36,
                    y: state.sprite.y + screenHeight/36
                }
            }
        }

        case actionMovement.MOVE_DOWN: {
            return {
                ...state,
                dPad: {
                    ...state.dPad,
                    y: state.dPad.y + screenHeight/36
                },
                sprite: {
                    ...state.sprite,
                    y: state.sprite.y + screenHeight/36,
                },
                home: {
                    ...state.home,
                    y: state.home.y - screenHeight/36
                }
            }
        }

        case actionMovement.MOVE_SPRITE_DOWN: {
            return {
                ...state,
                sprite: {
                    ...state.sprite,
                    y: state.sprite.y + screenHeight/36,
                }
            }
        }  

        case actionMovement.MOVE_DOWN_RIGHT: {
            return {
                ...state,
                dPad: {
                    x: state.dPad.x + screenWidth/36,
                    y: state.dPad.y + screenHeight/36
                },
                sprite: {
                    x: state.sprite.x + screenWidth/36,
                    y: state.sprite.y + screenHeight/36
                },
                home: {
                    x: state.home.x - screenWidth/36,
                    y: state.home.y - screenHeight/36
                }
            }
        }

        case actionMovement.MOVE_SPRITE_DOWN_RIGHT: {
            return {
                ...state,
                sprite: {
                    x: state.sprite.x + screenWidth/36,
                    y: state.sprite.y + screenHeight/36
                }
            }
        }

//////// wild stuff

        case actionType.ACTIVATE_WILD: {
            return {
                ...state,
                wild: {
                    ...state.wild,
                    isActive: true
                }
            }
        }

        case actionType.DEACTIVATE_WILD: {
            return {
                ...state,
                wild: {
                    ...state.wild,
                    isActive: false
                }
            }
        }

        case actionType.INCREMENT_WILD_STEP_COUNTER: {
            return {
                ...state,
                wild: {
                    ...state.wild,
                    stepCounter: state.wild.stepCounter + 5
                }
            }
        }

        case actionType.DECREMENT_WILD_STEP_COUNTER: {
            return {
                ...state,
                wild: {
                    ...state.wild,
                    stepCounter: state.wild.stepCounter - 1
                }
            }
        }

        case actionType.RESET_WILD_STEP_COUNTER: {
            return {
                ...state,
                wild: {
                    ...state.wild,
                    stepCounter: 0
                }
            }
        }

        /////////////// HOUSE

        case actionType.HOUSE_D_PAD: {
            return {
                ...state,
                dPad: {
                    x: screenWidth*3/6,
                    y: screenHeight*9/12
                }
            }
        }

        case actionType.HOUSE_RESET_DITTO: {
            return {
                ...state,
                sprite: {
                    x: screenWidth*11/12,
                    y: screenHeight/2
                }
            }
        }

        case actionType.RESET_DITTO: {
            return {
                ...state,
                sprite: {
                    x: screenWidth/2,
                    y: screenHeight/2
                }
            }
        }

        /////////////// Battle
        
        case actionType.BATTLE: {
            return {
                ...state,
                location: {
                    ...state.location,
                    name: 'Battle'
                }
            }
        }

        case actionType.ATTACK_OPTIONS: {
            return {
                ...state,
                battleStatus: {
                    isAttackOptions: true,
                    isBagOptions: false,
                    isPokemonOptions: false
                },
                attack: {
                    ...state.attack,
                    isChosen: false
                }
            }
        }

        case actionType.BAG_OPTIONS: {
            return {
                ...state,
                battleStatus: {
                    isAttackOptions: false,
                    isBagOptions: true,
                    isPokemonOptions: false
                }
            }
        }

        case actionType.POKEMON_OPTIONS: {
            return {
                ...state,
                battleStatus: {
                    isAttackOptions: false,
                    isBagOptions: false,
                    isPokemonOptions: true
                }
            }
        }

        case actionType.BATTLE_ACTIONS: {
            return {
                ...state,
                battleStatus: {
                    isAttackOptions: false,
                    isBagOptions: false,
                    isPokemonOptions: false
                }
            }
        }

        case actionType.CHOOSE: {
            return {
                ...state,
                attack: {
                    ...state.attack,
                    isChosen: true,
                    name: 'transform'
                }
            }
        }

        case actionType.ATTACK: {
            return {
                ...state,
                enemy: {
                    ...state.enemy,
                    hP: state.enemy.hP - 5
                },
                attack: {
                    ...state.attack,
                    isChosen: false
                }
            }
        }

//////////////////////////////////// ENEMY

        case actionType.ENEMY_BULBASAUR:{
            return {
                ...state,
                enemy: {
                    ...state.enemy,
                    hP: statistics.bulbasaur.hP,
                    sprite: pokemonSprite.bulbasaur.male.default.front,
                    name: 'bulbasaur'
                }
            }
        }

        case actionType.ENEMY_DITTO:{
            return {
                ...state,
                enemy: {
                    ...state.enemy,
                    hP: statistics.ditto.hP,
                    sprite: pokemonSprite.ditto.male.shiny.front,
                    name: 'ditto'
                }
            }
        }

        case actionType.ENEMY_RNG: {
            return {
                ...state,
                enemy: {
                    ...state.enemy,
                    rNG: Math.random().toFixed(2)*100
                }
            }
        }
        
        case actionType.RESET_ENEMY_HEALTH: {
            return {
                ...state,
                enemy: {
                    ...state.enemy,
                    // hP: 1
                }
            }
        }

        //  ___       __________  ___        ___  __________  ___
        // |   |      |   _____|  \  \      /  / |   ______| |   |
        // |   |      |  |____     \  \    /  /  |  |____    |   |
        // |   |      |   ____|     \  \  /  /   |   ____|   |   |
        // |   |____  |  |_____      \  \/  /    |  |______  |   |_____
        // |________| |________|      \____/     |_________| |_________|

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

export default rootReducer