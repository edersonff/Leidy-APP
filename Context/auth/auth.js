const auth = (token = '') => {
    switch(token){
        case '':
            return false;
        default:
        return token;
    }
}
export default auth;