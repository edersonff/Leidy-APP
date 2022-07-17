import { combineReducers } from 'redux'
import auth from './auth/auth'
import loading from './loading/loading'

const reducers = combineReducers({
    auth, loading
})

export default reducers;