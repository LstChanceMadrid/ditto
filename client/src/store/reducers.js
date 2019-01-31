import {combineReducers} from 'redux'
import {actionType} from './actionTypes'
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
        stepCounter: 0
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        // HOME

        case actionType.HOME: {
            return {
                ...state,
                location: {
                    name: 'home'
                }
            }
        }
        case actionType.MOVE_UP_LEFT: {
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
        case actionType.MOVE_SPRITE_UP_LEFT: {
            return {
                ...state,
                sprite: {
                    x: state.sprite.x - screenWidth/36,
                    y: state.sprite.y - screenHeight/36
                }
            }
        }


        case actionType.MOVE_UP: {
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
        case actionType.MOVE_SPRITE_UP: {
            return {
                ...state,
                sprite: {
                    ...state.sprite,
                    y: state.sprite.y - screenHeight/36
                }
            }
        }


        case actionType.MOVE_UP_RIGHT: {
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
        case actionType.MOVE_SPRITE_UP_RIGHT: {
            return {
                ...state,
                sprite: {
                    x: state.sprite.x + screenWidth/36,
                    y: state.sprite.y - screenHeight/36
                }
            }
        }


        case actionType.MOVE_LEFT: {
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
        case actionType.MOVE_SPRITE_LEFT: {
            return {
                ...state,
                sprite: {
                    ...state.sprite,
                    x: state.sprite.x - screenWidth/36,
                }
            }
        }


        case actionType.MOVE_RIGHT: {
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
        case actionType.MOVE_SPRITE_RIGHT: {
            return {
                ...state,
                sprite: {
                    ...state.sprite,
                    x: state.sprite.x + screenWidth/36,
                }
            }
        }


        case actionType.MOVE_DOWN_LEFT: {
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
        case actionType.MOVE_SPRITE_DOWN_LEFT: {
            return {
                ...state,
                sprite: {
                    x: state.sprite.x - screenWidth/36,
                    y: state.sprite.y + screenHeight/36
                }
            }
        }


        case actionType.MOVE_DOWN: {
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
        case actionType.MOVE_SPRITE_DOWN: {
            return {
                ...state,
                sprite: {
                    ...state.sprite,
                    y: state.sprite.y + screenHeight/36,
                }
            }
        }  


        case actionType.MOVE_DOWN_RIGHT: {
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
        case actionType.MOVE_SPRITE_DOWN_RIGHT: {
            return {
                ...state,
                sprite: {
                    x: state.sprite.x + screenWidth/36,
                    y: state.sprite.y + screenHeight/36
                    
                }
            }
        }



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
                    stepCounter: state.wild.stepCounter + 1
                }
            }
        }
        case actionType.DECREMENT_WILD_STEP_COUNTER: {
            return {
                ...state,
                wild: {
                    ...state.wild,
                    stepCounter: state.wild.stepCounter + 1
                }
            }
        }

        case actionType.HOUSE: {
            return {
                ...state,
                location: {
                    ...state.location,
                    name: 'house'
                }
            }
        }
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

        default:
            return state
    }
}

export default rootReducer