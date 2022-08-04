const setLoading = (state = { value: false }, action) => {
    
    switch(action.type){
        case 'ACTIVE_LOADING':
            return { value: true };
        case 'DISABLE_LOADING':
            return { value: false };
    }
    return state;
}
export default setLoading;