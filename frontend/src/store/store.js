import { combineReducers, legacy_createStore as createStore } from 'redux'

import { toyReducer } from './toy.reducer.js'
// import { userReducer } from './user.reducer.js'

const rootReducer = combineReducers({
    toyModule: toyReducer,
})

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
export const store = createStore(rootReducer, middleware)
