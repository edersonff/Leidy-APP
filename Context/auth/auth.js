const auth = (token = '') => {
    switch(token){
        case '':
            return {value: false};
        default:
        return {value: token};
    }
}
export default auth;