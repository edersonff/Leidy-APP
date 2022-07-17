const setLoading = (state = { value: false }, action) => {
    if(action)
        return { value: true };
    return { value: false };
}
export default setLoading;