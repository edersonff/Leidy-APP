import { combineReducers } from 'redux'
import auth from './auth'
import loading from './loading'

const reducers = combineReducers({
    auth, loading
})

export default reducers;