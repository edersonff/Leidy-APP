const auth = (state = {token: ''}, action) => {
    switch(action.type){
        case 'SET_TOKEN':
            return {token: action.token};
    }
    return state
}
export default auth;