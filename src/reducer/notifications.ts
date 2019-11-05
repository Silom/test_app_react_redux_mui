import { ReduxAction } from '../consts/types'
import { ADD_MESSAGE, MESSAGE_TIMEOUT } from '../consts/actionTypes'

import { messageTimeout } from '../actions/notifications'

import store from '../store'

import defaultState, { NotificationState, Notification } from '../store/module/notifications'

let currentMessageTimeout = null

export const notifications = function (state = <NotificationState>defaultState, action: ReduxAction) {
  switch (action.type) {
    case ADD_MESSAGE:
      const newNot = <Notification>{
        message: action.payload,
        time: new Date().getTime()
      }
      // Do timeout in order to hide the snackbar - cant get the autohide feature working.. so I will remain like this
      if (currentMessageTimeout) clearTimeout(currentMessageTimeout)
      currentMessageTimeout = setTimeout(() => store.dispatch(messageTimeout()), 5000)
      return { ...state, notifications: [...state.notifications, newNot], activeNotification: newNot }
    case MESSAGE_TIMEOUT:
      return { ...state, activeNotification: null }
    default:
      return state
  }
}
