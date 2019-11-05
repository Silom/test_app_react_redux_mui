import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import * as reducer from '../reducer'

const rootReducer = combineReducers({ ...reducer })

const store = createStore(rootReducer, composeWithDevTools())

export default store
