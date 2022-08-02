const auth = (state = {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVkZXJzb25mX0Bob3RtYWlsLmNvbS5iciIsInBhc3N3b3JkIjoiJDJiJDEwJEdLRmlRejNWRjNzOHUvdjlpT0xOUk8ybFJMYW1Mb2N4OXpBLzcuRi5ERlYyL2tGT2REeW9pIiwiaWF0IjoxNjU5MjE1NzEwfQ.7xCNP01OwurY8EKSS-odqnycMHPvzD4DS7bHaRZ-TPM'}, action) => {
    switch(action.type){
        case 'SET_TOKEN':
            return {token: action.token};
    }
    return state
}
export default auth;