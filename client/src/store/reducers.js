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
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.MOVE_UP_LEFT: {
            return {
                ...state,
                dPad: {
                    x: state.dPad.x - screenWidth/24,
                    y: state.dPad.y - screenHeight/24
                },
                sprite: {
                    x: state.sprite.x - screenWidth/24,
                    y: state.sprite.y - screenHeight/24
                },
                home: {
                    x: state.home.x + screenWidth/24,
                    y: state.home.y + screenHeight/24
                }
            }
        }
        case actionType.MOVE_SPRITE_UP_LEFT: {
            return {
                ...state,
                sprite: {
                    x: state.sprite.x - screenWidth/24,
                    y: state.sprite.y - screenHeight/24
                }
            }
        }


        case actionType.MOVE_UP: {
            return {
                ...state,
                dPad: {
                    ...state.dPad,
                    y: state.dPad.y - screenHeight/24
                },
                sprite: {
                    ...state.sprite,
                    y: state.sprite.y - screenHeight/24
                },
                home: {
                    ...state.home,
                    y: state.home.y + screenHeight/24
                }
            }
        }
        case actionType.MOVE_SPRITE_UP: {
            return {
                ...state,
                sprite: {
                    ...state.sprite,
                    y: state.sprite.y - screenHeight/24
                }
            }
        }


        case actionType.MOVE_UP_RIGHT: {
            return {
                ...state,
                dPad: {
                    x: state.dPad.x + screenWidth/24,
                    y: state.dPad.y - screenHeight/24
                },
                sprite: {
                    x: state.sprite.x + screenWidth/24,
                    y: state.sprite.y - screenHeight/24
                },
                home: {
                    x: state.home.x - screenWidth/24,
                    y: state.home.y + screenHeight/24
                }
            }
        }
        case actionType.MOVE_SPRITE_UP_RIGHT: {
            return {
                ...state,
                sprite: {
                    x: state.sprite.x + screenWidth/24,
                    y: state.sprite.y - screenHeight/24
                }
            }
        }


        case actionType.MOVE_LEFT: {
            return {
                ...state,
                dPad: {
                    ...state.dPad,
                    x: state.dPad.x - screenWidth/24,
                },
                sprite: {
                    ...state.sprite,
                    x: state.sprite.x - screenWidth/24
                },
                home: {
                    ...state.home,
                    x: state.home.x + screenWidth/24
                    
                }
            }
        }
        case actionType.MOVE_SPRITE_LEFT: {
            return {
                ...state,
                sprite: {
                    ...state.sprite,
                    x: state.sprite.x - screenWidth/24,
                }
            }
        }


        case actionType.MOVE_RIGHT: {
            return {
                ...state,
                dPad: {
                    ...state.dPad,
                    x: state.dPad.x + screenWidth/24,
                },
                sprite: {
                    ...state.sprite,
                    x: state.sprite.x + screenWidth/24,
                },
                home: {
                    ...state.home,
                    x: state.home.x - screenWidth/24,
                }
            }
        }
        case actionType.MOVE_SPRITE_RIGHT: {
            return {
                ...state,
                sprite: {
                    ...state.sprite,
                    x: state.sprite.x + screenWidth/24,
                }
            }
        }


        case actionType.MOVE_DOWN_LEFT: {
            return {
                ...state,
                dPad: {
                    x: state.dPad.x - screenWidth/24,
                    y: state.dPad.y + screenHeight/24
                },
                sprite: {
                    x: state.sprite.x - screenWidth/24,
                    y: state.sprite.y + screenHeight/24
                },
                home: {
                    x: state.home.x + screenWidth/24,
                    y: state.home.y - screenHeight/24
                }

            }
        }
        case actionType.MOVE_SPRITE_DOWN_LEFT: {
            return {
                ...state,
                sprite: {
                    x: state.sprite.x - screenWidth/24,
                    y: state.sprite.y + screenHeight/24
                }
            }
        }


        case actionType.MOVE_DOWN: {
            return {
                ...state,
                dPad: {
                    ...state.dPad,
                    y: state.dPad.y + screenHeight/24
                },
                sprite: {
                    ...state.sprite,
                    y: state.sprite.y + screenHeight/24,
                },
                home: {
                    ...state.home,
                    y: state.home.y - screenHeight/24
                }
            }
        }
        case actionType.MOVE_SPRITE_DOWN: {
            return {
                ...state,
                sprite: {
                    ...state.sprite,
                    y: state.sprite.y + screenHeight/24,
                }
            }
        }  


        case actionType.MOVE_DOWN_RIGHT: {
            return {
                ...state,
                dPad: {
                    x: state.dPad.x + screenWidth/24,
                    y: state.dPad.y + screenHeight/24
                },
                sprite: {
                    x: state.sprite.x + screenWidth/24,
                    y: state.sprite.y + screenHeight/24
                },
                home: {
                    x: state.home.x - screenWidth/24,
                    y: state.home.y - screenHeight/24
                }
            }
        }
        case actionType.MOVE_SPRITE_DOWN_RIGHT: {
            return {
                ...state,
                sprite: {
                    x: state.sprite.x + screenWidth/24,
                    y: state.sprite.y + screenHeight/24
                    
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