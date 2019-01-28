import {actionType} from './actionTypes'

export const action = {
    moveUp: state => ({
        type: actionType.MOVE_UP,
        state
    })
}