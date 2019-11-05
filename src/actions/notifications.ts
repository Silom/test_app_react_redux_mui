import { ADD_MESSAGE, MESSAGE_TIMEOUT } from '../consts/actionTypes'
import { ReduxAction } from '../consts/types'

export function addMassage(message: string) {
  return <ReduxAction>{
    type: ADD_MESSAGE,
    payload: message
  }
}

export function messageTimeout() {
  return <ReduxAction>{
    type: MESSAGE_TIMEOUT
  }
}
